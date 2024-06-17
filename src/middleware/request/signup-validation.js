const Joi= require("joi");
const controller = require("../../controllers/authController");
const Util = require("../../Utills/util"); 
const responseCode = require("../../Utills/response-code");
const responseMessage = require("../../Utills/response-message");

const usersignupSchema = Joi.object().keys({
    firstName:Joi.string().pattern(/^[a-zA-Z]+$/).message("firstName conatain only the character").required(),
    lastName:Joi.string().pattern(/^[a-zA-Z]+$/).message("last name contain only the character").required(),
    mobile:Joi.string().length(10).required(),
    emailId:Joi.string().email({tlds:{allow: true}}).required(),
    password:Joi.string().required(),
    gender:Joi.string().valid("male","female").required(),
    isDeleted:Joi.boolean().default(false),
    age:Joi.number().min(17).required(),    
    
})

const signupValidRequestBody = async (req,res,next)=>{
    try {
       let data = await usersignupSchema.validate(req.body);
        if(data.error)
        {
        res.send( Util.responseFormat({code:responseCode.BAD_REQUEST,msg:data.error.message}));
        }else{
         next();
        }
    } catch (error) {
       res.send(error); 
    }
}

module.exports={signupValidRequestBody};