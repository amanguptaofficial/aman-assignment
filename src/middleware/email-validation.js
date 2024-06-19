const Joi = require("joi");


// -----------------------Here we are cheching all the data validation which is coming from the request------------------------------


const emailSchema = Joi.object().keys({
  from: Joi.string().required(),
  to: Joi.string().email().required(),
  subject: Joi.string().optional(),
  text: Joi.string().optional(),
});


// --------------------------------------------------middleware--------------------------------------------------
const emailValidation = function (req, res, next) {
  const data = emailSchema.validate(req.body);
  if (data.error) {
    res.send({ code: 400, msg: data.error.message, data: {} });
  } else {
  next()
}
};


module.exports={emailValidation};
