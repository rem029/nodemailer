const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = "712536524122-rn4nms9acvsb6jr7ulb8s94t00ghutqk.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//047dK9XDukDZqCgYIARAAGAQSNwF-L9IrzAJ3og0qUBqrlNED3bbxY7UgPJ_bKaTA7umTrTpeID-mem6br9fMmBiyWhN6jSBJ5pA";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMailGmail = async ({ sendTo = [] }) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    console.log("@gmail accesstoken", accessToken);
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "rem029mailer@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
      logger: true,
    });

    const mailOptions = {
      from: "Rem Ponce <rem029mailer@gmail.com>",
      to: sendTo,
      subject: "Hello from nodemailer",
      text: "Hello from nodemailer using API",
      html: "<h2>Hello from nodemailer using API testing</h2>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};
// elawrenceponce@gmail.com
// e.ponce@qpm.com.qa

module.exports = sendMailGmail;
