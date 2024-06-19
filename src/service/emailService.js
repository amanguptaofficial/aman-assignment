const nodemailer = require("nodemailer");

 // ---------------------------------------------create transporter-------------------------------------------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: "Here You can give our emailID",
    pass: "Here you can give our password",
  },
});


// -----------------------------------------Sending Mail Service---------------------------------------------------------
const sendMail = async function (requestData) {
  try {
    const info = await transporter.sendMail({
      from: requestData.from,
      to: requestData.to,
      subject: requestData.subject,
      text: requestData.text,
    });
    return { code: 200, msg: "success", data: info.messageId };
  } catch (error) {
    if (error.response) {
      return { code: 400, msg: error.response, data: {} };
    } else if (error.message) {
      return { code: 400, msg: error.message, data: {} };
    } else {
      return { code: 400, msg: "An Error occured", data: {} };
    }
  }
};

module.exports = { sendMail };
