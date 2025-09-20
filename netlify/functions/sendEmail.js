const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

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

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error: error.message }),
    };
  }
};
