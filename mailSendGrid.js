const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendMailSendGrid = async ({ sendTo }) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true,
      auth: {
        user: "apikey",
        pass: "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",
      },
      logger: true,
    });

    const mailOptions = {
      from: "elawrenceponce@gmail.com",
      to: sendTo,
      subject: "Hello from nodemailer",
      text: "Hello from nodemailer using API",
      html: "<h2>Hello from nodemailer using API</h2>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

const sendMailSendGridv2 = () => {
  sgMail.setApiKey("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");
  const msg = {
    to: "elawrenceponce@gmail.com", // Change to your recipient
    from: "elawrenceponce@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendMailSendGrid;
