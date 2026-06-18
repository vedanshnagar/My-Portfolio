const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('.'));

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'vedu9622@gmail.com',
    pass: process.env.EMAIL_PASSWORD // Use Gmail App Password
  }
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('✓ Server is ready to send emails');
  }
});

// Routes
app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required' 
    });
  }

  try {
    // Send email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'vedu9622@gmail.com',
      to: process.env.EMAIL_USER || 'vedu9622@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    });

    // Send confirmation email to user (optional)
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'vedu9622@gmail.com',
      to: email,
      subject: 'We received your message!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Vedansh Nagar</p>
      `,
      text: `Hi ${name},\n\nWe received your message and will get back to you as soon as possible.\n\nYour message:\n${message}\n\nBest regards,\nVedansh Nagar`
    });

    res.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});