import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();

        const fullName = formData.get('fullName') || 'N/A';
        const email = formData.get('email') || 'N/A';
        const phone = formData.get('phone') || 'N/A';
        const website = formData.get('website') || 'N/A';
        const message = formData.get('message') || 'N/A';
        const driveLink = formData.get('driveLink') || 'N/A';
        const services = formData.getAll('services[]');
        const files = formData.getAll('files');

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailMessage = `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Website: ${website}
      Drive Link: ${driveLink}
      Services Requested: ${services.length ? services.join(', ') : 'N/A'}
      Message: ${message}
    `;

        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Free Trial Request from ${fullName}`,
            text: mailMessage,
        };

        if (files.length > 0) {
            const attachments = await Promise.all(
                files.map(async (file) => {
                    const buffer = Buffer.from(await file.arrayBuffer());
                    return {
                        filename: file.name,
                        content: buffer,
                        contentDisposition: 'attachment',
                        contentType: file.type,
                    };
                })
            );
            mailOptions.attachments = attachments;
        }

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Failed to process request:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Failed to process request',
            }),
            { status: 500 }
        );
    }
}
