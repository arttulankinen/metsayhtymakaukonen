const nodemailer = require("nodemailer");

 const sendEmail = async (req, res) => {
  console.log("Received request body:", req.body);
  try {
    const { email, otsikko, viesti, Puhelinnumero } = req.body;

    const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
   
 
    const message = {
      from: email,
      to: process.env.EMAIL,
      subject: otsikko,
      text: `Viesti: ${viesti},
      
      Yhteystiedot:
      Email: ${email}
      Puhelinnumero: ${Puhelinnumero}`,
      replyTo: email,
    };

   await transporter.sendMail(message);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
};

module.exports = sendEmail;