const Joi = require("joi");
const Util = require("../../Utills/util");
const responseCode = require("../../Utills/response-code");
const responseMessage = require("../../Utills/response-message");


const signInSchema = Joi.object().keys({  
emailId:Joi.string().email({tlds:{allow: true}}).required(),
password:Joi.string().required(),
})


const loginValidRequestBody = async function(req,res,next){
     try {
     const data = signInSchema.validate(req.body);
      if(data.error){
     res.send(Util.responseFormat({code:responseCode.BAD_REQUEST,msg:data.error.message}));
      }else{
        next();
      }
     } catch (error) {
      res.send(Util.responseFormat({code:responseCode.INTERNAL_SERVER_ERROR,msg:responseMessage[responseCode.INTERNAL_SERVER_ERROR]}));
     }
}


module.exports={loginValidRequestBody};