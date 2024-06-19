const service = require("../service/emailService");

//----------------------------------------------sending mail Controller---------------------------------------------------

const sendMail = async function (req, res) {
  try {
    const isSent = await service.sendMail(req.body);
    res.send(isSent);
  } catch (error) {
    res.send({ code: 500, msg: "Internal server error", data:isSent});
  }
};

module.exports = { sendMail };
