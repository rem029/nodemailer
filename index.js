const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '712536524122-rn4nms9acvsb6jr7ulb8s94t00ghutqk.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04wf1saneumr5CgYIARAAGAQSNwF-L9Ir6IgYuWKvZlHEd5gmdomx5PkikqEqU9GoMT2RM-37G0VOXj0T8i1wq7Tx1Z0dH68rroQ';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async () => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'rem029mailer@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Rem Ponce <rem029mailer@gmail.com>',
      to: 'elawrenceponce@gmail.com',
      subject: 'Hello from nodemailer',
      text: 'Hello from nodemailer using API',
      html: '<h2>Hello from nodemailer using API</h2>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

sendMail()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
