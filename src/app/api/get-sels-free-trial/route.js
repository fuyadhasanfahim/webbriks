import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const name = formData.get('name')?.toString() || 'N/A';
        const email = formData.get('email')?.toString() || 'N/A';
        const phone = formData.get('phone')?.toString() || 'N/A';
        const website = formData.get('website')?.toString() || 'N/A';
        const message = formData.get('message')?.toString() || 'N/A';
        const driveLink = formData.get('driveLink')?.toString().trim() || '';
        const files = formData
            .getAll('files')
            .filter((f) => typeof f === 'object' && 'name' in f && f.name);

        if (files.length === 0 && !driveLink) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        'Please upload at least one file or provide a drive link.',
                },
                { status: 400 }
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

            Phone: ${phone}
            Website: ${website || 'N/A'}
            Message: ${message}
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
                message: 'Successfully sent the message.',
            },
            { status: 200 }
        );
    } catch (error) {
        console.log('Mail Error:', error.message);
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong while sending the message.',
                error: error?.message || 'Internal error',
            },
            { status: 500 }
        );
    }
}
