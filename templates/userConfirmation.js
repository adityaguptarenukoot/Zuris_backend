const userConfirmationTemplate = (data) => {
  const { fullname, email, company, service, project_details, phoneNumber } = data;

  return {
    subject: 'Inquiry Received | ViconAI',
    text: `Hi ${fullname},

Thank you for connecting with ViconAI. We have successfully received your inquiry regarding ${service || 'AI Solutions'}.

Our engineering team is currently reviewing your project requirements and will contact you within 48 hours to discuss the next steps in architecting your intelligence framework.

Submission Overview:
━━━━━━━━━━━━━━━━━━━━━━━━━━
NAME: ${fullname}
EMAIL: ${email}
COMPANY: ${company}
PHONE: ${phoneNumber || 'Not provided'}
SERVICE: ${service || 'Not specified'}

PROJECT SCOPE:
${project_details}
━━━━━━━━━━━━━━━━━━━━━━━━━━

Best regards,
The ViconAI Team

ViconAI - Architecting Intelligence
Website: https://viconai.com
Email: contact@viconai.com`,

    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #17091a; background-color: #ffffff; margin: 0; padding: 0; }
    .wrapper { background-color: #fafafa; padding: 40px 10px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #eeeeee; box-shadow: 0 10px 30px rgba(23, 9, 26, 0.05); }
    .header { background-color: #17091a; padding: 40px; text-align: center; }
    .brand-glow { color: #952877; font-style: italic; }
    .content { padding: 40px; }
    .welcome-text { font-size: 24px; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 20px; color: #17091a; }
    .details-box { background: #fafafa; padding: 25px; border-radius: 16px; border: 1px solid #eeeeee; margin: 25px 0; }
    .detail-row { padding: 12px 0; border-bottom: 1px solid #eeeeee; font-size: 14px; }
    .detail-label { font-weight: 900; color: #952877; text-transform: uppercase; letter-spacing: 0.1em; font-size: 10px; display: block; margin-bottom: 4px; }
    .detail-value { color: #17091a; font-weight: 500; }
    .button { display: inline-block; background-color: #952877; color: #ffffff !important; padding: 16px 32px; text-decoration: none; border-radius: 12px; font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; margin: 20px 0; box-shadow: 0 10px 20px rgba(149, 40, 119, 0.2); }
    .footer { padding: 30px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #eeeeee; }
    .accent-line { width: 40px; h-height: 3px; background: #952877; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1 style="margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 900;">
          VICON<span class="brand-glow">AI</span>
        </h1>
      </div>
      
      <div class="content">
        <div class="welcome-text">Architecting Your <span style="color: #952877;">Intelligence</span></div>
        <p style="color: #4b5563; font-size: 16px;">Hi <strong>${fullname}</strong>,</p>
        <p style="color: #4b5563;">Thank you for reaching out. We have received your inquiry. Our engineering team is currently reviewing your requirements and will connect with you within <strong>48 hours</strong>.</p>
        
        <div class="details-box">
          <h3 style="margin-top: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; color: #17091a;">Inquiry Manifest</h3>
          
          <div class="detail-row">
            <span class="detail-label">Client</span>
            <span class="detail-value">${fullname} — ${company}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Contact</span>
            <span class="detail-value">${email} ${phoneNumber ? ' | ' + phoneNumber : ''}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Requested Architecture</span>
            <span class="detail-value">${service || 'General AI Consultation'}</span>
          </div>
          <div class="detail-row" style="border-bottom: none;">
            <span class="detail-label">Project Scope</span>
            <p style="margin: 10px 0 0 0; color: #4b5563; font-size: 14px; white-space: pre-wrap;">${project_details}</p>
          </div>
        </div>
        
        <center>
          <a href="https://viconai.com" class="button">Explore Capabilities</a>
        </center>
      </div>
      
      <div class="footer">
        <p style="margin: 5px 0; color: #17091a; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase;">ViconAI Engineering</p>
        <p style="margin: 5px 0;">Scalable AI Frameworks & Custom Neural Solutions</p>
        <p style="margin: 15px 0 0 0;">
          <a href="https://viconai.com" style="color: #952877; text-decoration: none; font-weight: bold;">viconai.com</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
    `
  };
};

export default userConfirmationTemplate;