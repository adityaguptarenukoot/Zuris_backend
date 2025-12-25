import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('Missing required email configuration. Please check your .env file.');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2'
    },
    requireTLS: true, 
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ Email configuration error:', error);
      console.error('Please verify:');
      console.error('1. Email: contact@viconai.com');
      console.error('2. Password is correct');
      console.error('3. SMTP is enabled in Hostinger');
    } else {
      console.log(' Hostinger email server (Port 587 STARTTLS) is ready!');
    }
  });

  return transporter;
};

export default createTransporter;
