const express = require("express");
const router = express.Router();
const { emailValidation } = require("../middleware/email-validation");
const controller = require("../controller/emailController");

router.get("/", (req, res) => {
  res.send("This is for Testing Apis");
});

router.post("/send", emailValidation, controller.sendMail);

module.exports = router;
