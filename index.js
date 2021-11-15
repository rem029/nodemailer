require("dotenv").config();

const http = require("http");
const sendMailGmail = require("./mailerGmail");
const sendMailOutlook = require("./mailerOutlook");
const sendMailSendGrid = require("./mailSendGrid");

http
  .createServer(async (req, res) => {
    // elawrenceponce@gmail.com
    // e.ponce@qpm.com.qa
    try {
      console.log("reqUrl", req.url);
      let response;

      if (req.url === "/gmail")
        response = await sendMailGmail({ sendTo: ["elawrenceponce@gmail.com", "e.ponce@qpm.com.qa"] });

      if (req.url === "/outlook") response = await sendMailOutlook({ sendTo: "e.ponce@qpm.com.qa" });

      if (req.url === "/sendgrid") response = await sendMailSendGrid({ sendTo: "elawrenceponce@gmail.com" });

      console.log(req.url, response);

      res.end();
    } catch (error) {
      console.log("on error ", req.url, error);
      res.end();
    }
  })
  .listen(3030);
