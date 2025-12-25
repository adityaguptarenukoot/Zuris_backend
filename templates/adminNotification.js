const adminNotificationTemplate = (data) => {
  const { fullname, email, company, service, project_details, phoneNumber } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return {
    subject: `🚀 New Lead: ${fullname} from ${company}`,
    text: `New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted: ${timestamp}

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${fullname}
Email: ${email}
Company: ${company}
Phone: ${phoneNumber || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Project Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━
${project_details}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Action Required: Please respond within 48 hours.`,

    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 650px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .alert { background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 5px; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
    .info-box { background: #EFF6FF; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3B82F6; }
    .detail-grid { display: grid; grid-template-columns: 140px 1fr; gap: 15px; margin: 20px 0; }
    .label { font-weight: bold; color: #6b7280; }
    .value { color: #111827; }
    .project-details { background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0; white-space: pre-wrap; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; color: #6b7280; font-size: 13px; }
    .action-button { display: inline-block; background: #3B82F6; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 26px;">🚀 New Contact Form Submission</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">ViconAI Website</p>
    </div>
    
    <div class="content">
      <div class="alert">
        <strong>⚡ Action Required:</strong> New lead received. Please respond within 48 hours.
      </div>
      
      <p style="color: #6b7280; margin: 10px 0;">Submitted: <strong>${timestamp}</strong></p>
      
      <div class="info-box">
        <h3 style="margin-top: 0; color: #1F2937;">Contact Information</h3>
        
        <div class="detail-grid">
          <div class="label">Full Name:</div>
          <div class="value"><strong>${fullname}</strong></div>
          
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a></div>
          
          <div class="label">Company:</div>
          <div class="value"><strong>${company}</strong></div>
          
          <div class="label">Phone:</div>
          <div class="value">${phoneNumber ? `<a href="tel:${phoneNumber}" style="color: #3B82F6; text-decoration: none;">${phoneNumber}</a>` : '<em>Not provided</em>'}</div>
          
          <div class="label">Service Interest:</div>
          <div class="value">${service || '<em>Not specified</em>'}</div>
        </div>
      </div>
      
      <h3 style="color: #1F2937; margin-top: 30px;">Project Details</h3>
      <div class="project-details">${project_details}</div>
      
      <center style="margin-top: 30px;">
        <a href="mailto:${email}" class="action-button">Reply to ${fullname}</a>
        ${phoneNumber ? `<a href="tel:${phoneNumber}" class="action-button" style="background: #10B981;">Call ${fullname}</a>` : ''}
      </center>
    </div>
    
    <div class="footer">
      <p style="margin: 5px 0;">This is an automated notification from ViconAI contact form</p>
      <p style="margin: 5px 0; color: #9CA3AF;">Do not reply to this email</p>
    </div>
  </div>
</body>
</html>
    `
  };
};

export default adminNotificationTemplate;
