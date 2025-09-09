import nodemailer from 'nodemailer';
import { config } from 'dotenv';


import path from 'path';


config({ path: path.resolve(__dirname, '../.env') });

const sendEmail = async (name: string, email: string, subject: string, message: string) => {



   const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
      user: process.env.VITE_EMAIL_USER,
      pass: process.env.VITE_EMAIL_PASS,
    },

  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.VITE_EMAIL_RECEIVER,
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };



  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
};

export default sendEmail;