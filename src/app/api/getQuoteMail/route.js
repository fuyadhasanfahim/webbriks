import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        // Handle multipart/form-data using Next.js built-in `FormData` API
        const formData = await req.formData();

        // Extract basic fields from the formData
        const fullName = formData.get('fullName') || 'N/A';
        const email = formData.get('email') || 'N/A';
        const phone = formData.get('phone') || 'N/A';
        const website = formData.get('website') || 'N/A';
        const message = formData.get('message') || 'N/A';
        const driveLink = formData.get('driveLink') || 'N/A';

        // Extract main services and photo editing specific services
        const services = formData.getAll('services[]');
        const photoEditingServices = formData.getAll('photoEditingServices[]');

        // Extract new dropdown selections
        const fileFormat = formData.get('fileFormat') || 'N/A';
        const referralSource = formData.get('referralSource') || 'N/A';
        const quoteInterest = formData.get('quoteInterest') || 'N/A';

        // Extract files
        const files = formData.getAll('files');

        // Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Build the email content with new fields
        const mailMessage = `
      CONTACT INFORMATION
      ------------------
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Website: ${website}
      
      SERVICES REQUESTED
      -----------------
      Main Services: ${services.length ? services.join(', ') : 'N/A'}
      
      ${
          services.includes('photoEditing')
              ? `
      PHOTO EDITING DETAILS
      --------------------
      Selected Services: ${
          photoEditingServices.length ? photoEditingServices.join(', ') : 'None'
      }
      Preferred File Format: ${fileFormat}
      Referral Source: ${referralSource}
      Quote Interest Level: ${quoteInterest}
      `
              : ''
      }
      
      FILE SHARING
      ------------
      Drive Link: ${driveLink}
      Attached Files: ${
          files.length
              ? files.map((f) => f.name).join(', ')
              : 'No files attached'
      }
      
      ADDITIONAL INFORMATION
      ---------------------
      Message: ${message}
    `;

        // Define the email options
        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Quote Request from ${fullName} - ${services.join(', ')}`,
            text: mailMessage,
        };

        // If files were uploaded, attach them to the email
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

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return a success response
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to send email' }),
            { status: 500 }
        );
    }
}
