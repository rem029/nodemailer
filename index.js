const http = require("http");
const sendMailGmail = require("./mailerGmail");
const sendMailOutlook = require("./mailerOutlook");
const sendMailSendGrid = require("./mailSendGrid");

http
  .createServer(async (req, res) => {
    // elawrenceponce@gmail.com
    // e.ponce@qpm.com.qa
    try {
      let responseGmail = await sendMailGmail({ sendTo: ["elawrenceponce@gmail.com", "e.ponce@qpm.com.qa"] });
      console.log("gmail", responseGmail);

      let responseOutlookV1 = await sendMailOutlook({ sendTo: "e.ponce@qpm.com.qa" });
      console.log("outlookV1", responseOutlookV1);

      let responseSendGrid = await sendMailSendGrid({ sendTo: "elawrenceponce@gmail.com" });
      console.log("sendGrid", responseSendGrid);

      res.end();
    } catch (error) {
      console.log("on error ", error);
      res.end();
    }
  })
  .listen(3030);
