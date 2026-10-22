import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, interest, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Name, phone, and message are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Sanmita Enquiry" <${process.env.GMAIL_USER}>`,
      to: 'info@sanmitaglobal.com',
      subject: `New enquiry: ${interest || 'General'}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nInterest: ${interest || 'Not specified'}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d2922;">New Enquiry from Sanmita Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Interest:</td><td style="padding: 8px;">${interest || 'Not specified'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f7f1e6; border-radius: 8px;">
            <strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}