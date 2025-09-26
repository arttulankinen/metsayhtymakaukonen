const nodemailer = require("nodemailer");

 const sendEmail = async (req, res) => {
  try {
    const { email, otsikko, viesti, Puhelinnumero } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
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