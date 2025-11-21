import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.hostinger.com",
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.EMAIL_SECURE === "true", // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email to admin with user form submission details
export const sendMailAdmin = async (
  subject,
  fullname,
  email,
  company,
  service,
  project_details,
  phoneNumber
) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; background-color: #f5f7fa; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 6px; padding: 20px 30px; color: #333; }
          h2 { color: #2a4d9b; }
          .details { background: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin-top: 15px; }
          .footer { text-align: center; margin-top: 25px; font-size: 13px; color: #777; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Form Submission</h2>
          <p>A user has submitted a form with the following details:</p>
          <div class="details">
            <p><strong>Full Name:</strong> ${fullname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Service Interested In:</strong> ${service}</p>
            <p><strong>Project Details:</strong> ${project_details}</p>
            <p><strong>Contact:</strong>+91 ${phoneNumber}</p>
          </div>
          <div class="footer">
            &copy; 2025 Zurix. All Rights Reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // send it to your own admin email
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};
