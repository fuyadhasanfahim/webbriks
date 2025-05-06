import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const name = formData.get('name') || 'N/A';
        const email = formData.get('email') || 'N/A';
        const message = formData.get('message') || 'N/A';
        const driveLink = formData.get('driveLink') || 'N/A';
        const files = formData.getAll('files');

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
Drive Link: ${driveLink}
Message:
${message}
        `;

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Free Trial Request from ${name}`,
            text: mailText,
        };

        if (files && files.length > 0) {
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

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        });
    } catch (err) {
        console.error('Error sending trial request:', err);
        return new Response(
            JSON.stringify({ success: false, error: 'Something went wrong' }),
            { status: 500 }
        );
    }
}
