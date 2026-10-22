import nodemailer from 'nodemailer';

async function sendWhatsApp(data) {
  const apiKey = process.env.WHATSAPP_API_KEY;
  const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER; // e.g., "918951760948"

  if (!apiKey || !phoneNumber) {
    console.log('WhatsApp not configured, skipping');
    return;
  }

  const text = `*New Sanmita Enquiry*\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Email:* ${data.email || 'Not provided'}\n*Interest:* ${data.interest || 'Not specified'}\n*Message:* ${data.message}`;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error('WhatsApp send failed:', response.statusText);
    } else {
      console.log('WhatsApp sent successfully');
    }
  } catch (err) {
    console.error('WhatsApp error:', err);
  }
}

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

    // Send WhatsApp notification (non-blocking)
    await sendWhatsApp({ name, phone, email, interest, message });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}