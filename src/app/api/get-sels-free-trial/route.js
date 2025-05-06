import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        console.log(formData);

        const name = formData.get('name') || 'N/A';
        const email = formData.get('email') || 'N/A';
        const message = formData.get('message') || 'N/A';
        const driveLink = formData.get('driveLink')?.trim();
        const files = formData.getAll('files').filter((f) => f && f.name);

        if ((!files || files.length === 0) && !driveLink) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        'Please upload at least one file or provide a drive link.',
                    error,
                },
                {
                    status: 400,
                }
            );
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailText = `
            📝 New Free Trial Request

            Name: ${name}
            Email: ${email}
            Drive Link: ${driveLink || 'N/A'}
            Message:
            ${message}
        `;

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Free Trial Request from ${name}`,
            text: mailText,
        };

        if (files.length > 0) {
            const attachments = await Promise.all(
                files.map(async (file) => {
                    const buffer = Buffer.from(await file.arrayBuffer());
                    return {
                        filename: file.name,
                        content: buffer,
                        contentType: file.type,
                        contentDisposition: 'attachment',
                    };
                })
            );
            mailOptions.attachments = attachments;
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Successfully send the message.',
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Something Went wrong!',
                error,
            },
            {
                status: 500,
            }
        );
    }
}
