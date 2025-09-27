const nodemailer = require("nodemailer");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAILSEND);

 const sendEmail = async (req, res) => {
  try {
    const { email, otsikko, viesti, Puhelinnumero } = req.body;
   
    const message = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: otsikko,
      text: 
      `Viesti: 
      ${viesti},
      Yhteystiedot:
      Email: ${email}
      Puhelinnumero: 
      ${Puhelinnumero}`,
      replyTo: email,
    };

   await sgMail.send(message);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
};

module.exports = sendEmail;