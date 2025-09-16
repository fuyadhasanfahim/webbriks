import connectToDatabase from '@/lib/mongodb';
import JobApplication from '@/models/JobApplication';
import cloudinary from '@/lib/cloudinary';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const jobId = formData.get('jobId');
        const jobTitle = formData.get('jobTitle');
        const company = formData.get('company');
        const hasExperience = formData.get('hasExperience') === 'true';
        const experiences = formData.get('experiences');
        const coverLetter = formData.get('coverLetter') || '';
        const cvFile = formData.get('cv');

        if (!cvFile) {
            return NextResponse.json(
                { success: false, message: 'CV file is required' },
                { status: 400 }
            );
        }

        // Validate file type
        const allowedFileTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];

        if (!allowedFileTypes.includes(cvFile.type)) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        'Invalid file type. Please upload a PDF or Word document.',
                },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const existingApplication = await JobApplication.findOne({
            email,
            jobId,
        });

        if (existingApplication) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'You have already applied for this position',
                },
                { status: 409 }
            );
        }

        // Upload CV to cloudinary
        const arrayBuffer = await cvFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const originalName = cvFile.name.split('.').slice(0, -1).join('.');
        const fileExtension = cvFile.name.split('.').pop();
        const timestamp = Date.now();

        const cloudinaryResult = await cloudinary.uploader.upload(
            `data:${cvFile.type};base64,${buffer.toString('base64')}`,
            {
                folder: `webbriks/job-applications/cvs/${firstName}_${lastName}`,
                public_id: `${originalName}_${timestamp}.${fileExtension}`, // Includes extension
                resource_type: 'raw',
                use_filename: true,
                unique_filename: false,
                ty // Set to false to use your custom public_id
            }
        );

        // Parse experiences
        let parsedExperiences = [];
        if (hasExperience && experiences) {
            try {
                parsedExperiences = JSON.parse(experiences);
            } catch (err) {
                console.error('Error parsing experiences:', err);
            }
        }

        // Save to DB
        const jobApplication = new JobApplication({
            firstName,
            lastName,
            email,
            phone,
            jobId,
            jobTitle,
            company,
            cvUrl: cloudinaryResult.secure_url,
            cvPublicId: cloudinaryResult.public_id,
            hasExperience,
            experiences: parsedExperiences,
            coverLetter,
        });

        const savedApplication = await jobApplication.save();

        // Email transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // --- ADMIN EMAIL ---
        const adminMailOptions = {
            from: `"Job Portal" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `📩 New Job Application - ${jobTitle} @ ${company}`,
            html: `
                <h2>New Job Application Received</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Position:</strong> ${jobTitle} (${jobId})</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Has Experience:</strong> ${
                    hasExperience ? 'Yes' : 'No'
                }</p>
                ${
                    hasExperience
                        ? `<pre><strong>Experiences:</strong> ${JSON.stringify(
                              parsedExperiences,
                              null,
                              2
                          )}</pre>`
                        : ''
                }
                <p><strong>Cover Letter:</strong></p>
                <blockquote>${coverLetter || 'N/A'}</blockquote>
                <p><a href="${
                    cloudinaryResult.secure_url
                }">📎 Download CV</a></p>
                <hr />
                <p>Submitted at: ${savedApplication.appliedAt}</p>
            `,
        };

        const applicationLink = `${process.env.NEXT_PUBLIC_APP_URL}/job/applicants/${savedApplication._id}`;
        const userMailOptions = {
            from: `"${company} Careers" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `✅ Application Received - ${jobTitle} @ ${company}`,
            html: `
                <h2>Thank you for applying, ${firstName}!</h2>
                <p>We have received your application for the position of <strong>${jobTitle}</strong> at <strong>${company}</strong>.</p>
                <p>You can track your application status anytime here:</p>
                <p><a href="${applicationLink}" style="color:#2563eb; text-decoration:underline;">View Application</a></p>
                <p>Application Number: <strong>${savedApplication._id
                    .toString()
                    .slice(-8)
                    .toUpperCase()}</strong></p>
                <br />
                <p>Best regards,</p>
                <p><strong>${company} HR Team</strong></p>
            `,
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Job application submitted successfully',
                data: {
                    id: savedApplication._id,
                    applicationNumber: savedApplication._id
                        .toString()
                        .slice(-8)
                        .toUpperCase(),
                    appliedAt: savedApplication.appliedAt,
                    status: savedApplication.status,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.keys(error.errors).map((key) => ({
                field: key,
                message: error.errors[key].message,
            }));

            return NextResponse.json(
                { success: false, message: 'Validation failed', errors },
                { status: 400 }
            );
        }

        console.error('Application submission error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
