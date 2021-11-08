const nodemailer = require("nodemailer");

const sendMailOutlook = async ({ sendTo }) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 465,
      secure: true,
      auth: {
        user: "e.ponce@qpm.com.qa",
        pass: "@@lbqpmDcAconex04",
      },
      logger: true,
    });

    const mailOptions = {
      from: "Rem Ponce <e.ponce@qpm.com.qa>",
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

module.exports = sendMailOutlook;
