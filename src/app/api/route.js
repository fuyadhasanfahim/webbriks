// app/api/contactMail/route.js

import nodemailer from 'nodemailer';


export async function POST(req) {
  const { firstName, lastName, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'gsarwar.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: 'hello@gsarwar.com', // Your email
      subject: 'New Contact Form Message',
      text: message,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
