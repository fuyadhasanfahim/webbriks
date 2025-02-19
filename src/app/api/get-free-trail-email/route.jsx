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

        // Add to Mailchimp
        const mailchimpResponse = await addToMailchimp(fullName, email, phone);
        if (!mailchimpResponse.success) {
            console.error('Failed to add to Mailchimp:', mailchimpResponse.error);
        }

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

async function addToMailchimp(name, email, phone) {
    try {
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

        if (!API_KEY || !AUDIENCE_ID) {
            throw new Error('Mailchimp API key or audience ID is missing');
        }

        const DATA_CENTER = API_KEY.split('-')[1];
        if (!DATA_CENTER) {
            throw new Error('Invalid Mailchimp API key format');
        }

        const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${Buffer.from(
                    `anystring:${API_KEY}`
                ).toString('base64')}`,
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: name,
                    PHONE: phone,
                },
            }),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                `Mailchimp API error: ${response.status} - ${JSON.stringify(responseData)}`
            );
        }

        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}