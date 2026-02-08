import createTransporter from '../config/emailConfig.js';
import userConfirmationTemplate from '../templates/userConfirmation.js';
import adminNotificationTemplate from '../templates/adminNotification.js';
import sql from '../config/dbConfig.js';

export const submitForm = async (req, res) => {
  try {
    const { fullname, email, company, service, project_details, phoneNumber } = req.body;

    // Validation
    if (!fullname || !email || !company || !project_details) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: fullname, email, company, and project_details'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    };

     await sql`
      INSERT INTO form_data (
        fullname,
        email,
        company,
        service,
        project_details,
        phone_number
      ) VALUES (
        ${fullname},
        ${email},
        ${company},
        ${service},
        ${project_details},
        ${phoneNumber}
      );
    `;

    console.log({data})

    const transporter = createTransporter();

    // Prepare email data
    const emailData = {
      fullname,
      email,
      company,
      service,
      project_details,
      phoneNumber
    };

    // 1. Send confirmation email to user
    const userEmail = userConfirmationTemplate(emailData);
    await transporter.sendMail({
      from: `"${process.env.COMPANY_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: userEmail.subject,
      text: userEmail.text,
      html: userEmail.html,
    });

    console.log(`✅ Confirmation email sent to: ${email}`);

    // 2. Send notification email to admin
    const adminEmail = adminNotificationTemplate(emailData);
    await transporter.sendMail({
      from: `"ViconAI Website Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: adminEmail.subject,
      text: adminEmail.text,
      html: adminEmail.html,
    });

    console.log(`✅ Notification email sent to admin: ${process.env.ADMIN_EMAIL}`);

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully! Check your email for confirmation.',
    });

  } catch (error) {
    console.error('❌ Error in submitForm:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
