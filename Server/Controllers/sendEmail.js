const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
  const { email, otsikko, viesti } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  const message = {
    from: email,
    to: process.env.EMAIL,
    subject: otsikko,
    text: viesti,
    replyTo: email
  };

  try {
    await transporter.sendMail(message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

module.exports = sendEmail;
