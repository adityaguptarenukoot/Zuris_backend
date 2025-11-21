import { sendMail } from '../template/sendMail.js';

export const submitForm = async (req, res) => {
  const { fullname, email, company, service, project_details, phoneNumber } = req.body;

  try {
    // Send mail to admin
    await sendMail({
      to: process.env.MAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Details:</strong> ${project_details}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
      `
    });

    // Send confirmation to user
    await sendMail({
      to: email,
      subject: 'Thank you for contacting ViconAI!',
      html: `
        <h3>Hello ${fullname},</h3>
        <p>Thank you for reaching out to ViconAI! We’ve received your message and will reply within 48 hours.</p>
        <p><strong>Your submitted details:</strong></p>
        <ul>
          <li><b>Company:</b> ${company}</li>
          <li><b>Service:</b> ${service}</li>
          <li><b>Project details:</b> ${project_details}</li>
          <li><b>Phone:</b> ${phoneNumber}</li>
        </ul>
        <p>If you have urgent queries, reply directly to this email.</p>
        <br/>
        <p>- ViconAI Team</p>
      `
    });

    res.json({ success: true, message: 'Form submitted, emails sent.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
};
