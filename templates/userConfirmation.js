const userConfirmationTemplate = (data) => {
  const { fullname, email, company, service, project_details, phoneNumber } = data;

  return {
    subject: 'Thank you for contacting ViconAI',
    text: `Hi ${fullname},

Thank you for reaching out to ViconAI! We have received your inquiry and our team will get back to you within 48 hours.

Your Submission Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${fullname}
Email: ${email}
Company: ${company}
Phone: ${phoneNumber || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Project Details:
${project_details}
━━━━━━━━━━━━━━━━━━━━━━━━━━

In the meantime, feel free to explore our website to learn more about how we're transforming businesses with AI solutions.

Best regards,
The ViconAI Team

---
ViconAI - AI Engineering & Custom Solutions
Website: https://viconai.com
Email: contact@viconai.com`,

    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #3B82F6 0%, #9333EA 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
    .details { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .detail-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
    .detail-label { font-weight: bold; color: #6b7280; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; color: #6b7280; font-size: 14px; }
    .button { display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #9333EA 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting ViconAI</h1>
    </div>
    
    <div class="content">
      <p>Hi <strong>${fullname}</strong>,</p>
      
      <p>Thank you for reaching out to ViconAI! We have received your inquiry and our team will get back to you within <strong>48 hours</strong>.</p>
      
      <div class="details">
        <h3 style="margin-top: 0; color: #3B82F6;">Your Submission Details</h3>
        
        <div class="detail-row">
          <span class="detail-label">Name:</span> ${fullname}
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span> ${email}
        </div>
        <div class="detail-row">
          <span class="detail-label">Company:</span> ${company}
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span> ${phoneNumber || 'Not provided'}
        </div>
        <div class="detail-row">
          <span class="detail-label">Service Interest:</span> ${service || 'Not specified'}
        </div>
        <div class="detail-row" style="border-bottom: none;">
          <span class="detail-label">Project Details:</span>
          <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${project_details}</p>
        </div>
      </div>
      
      <p>In the meantime, feel free to explore our website to learn more about how we're transforming businesses with AI solutions.</p>
      
      <center>
        <a href="https://viconai.com" class="button">Visit Our Website</a>
      </center>
      
      <p style="margin-top: 30px;">Best regards,<br><strong>The ViconAI Team</strong></p>
    </div>
    
    <div class="footer">
      <p style="margin: 5px 0;"><strong>ViconAI</strong></p>
      <p style="margin: 5px 0;">AI Engineering & Custom Solutions</p>
      <p style="margin: 5px 0;">
        <a href="https://viconai.com" style="color: #3B82F6; text-decoration: none;">Website</a> | 
        <a href="mailto:contact@viconai.com" style="color: #3B82F6; text-decoration: none;">Email</a>
      </p>
    </div>
  </div>
</body>
</html>
    `
  };
};

export default userConfirmationTemplate;
