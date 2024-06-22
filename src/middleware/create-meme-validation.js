const Util = require("../utils/Util");
const Joi = require("joi");
const responseCode = require("../utils/response-code");
const responseMessage = require("../utils/response-message");

//----------------------------------------------🔥CREATE MEME REQUEST VALIDATION🔥--------------------------------------------------------------

const memeSchema = Joi.object().keys({
   template_id: Joi.string().required(),
   text0: Joi.string().required(),
   text1: Joi.string().required(),
   username: Joi.string().required(),
   password: Joi.string().required(),
})


const checkvalidation = async (req, res, next) => {
   try {
      const data = memeSchema.validate(req.query);
      if (!data.error) next();
      else res.send(Util.response({ code: responseCode.BAD_REQUEST, msg: data.error.message, data: {} }));
      } catch (error) {
      res.send(Util.response({ code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED, msg: responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED], data: {} }));
   }
}


module.exports = { checkvalidation }