const Joi = require('joi');
const jwt= require("jsonwebtoken")
const { responseFormat } = require('../../Utills/util');
const responseCode = require('../../Utills/response-code');
const responseMessage = require('../../Utills/response-message');
const mongoose = require('mongoose');

//----------------------------------------------🔥UPDATE USER SCHEMA VALIDATION 🔥---------------------------------------------------


const updateUserSchema = Joi.object().keys({
    firstName:Joi.string().pattern(/^[a-zA-Z]+$/).message("firstName conatain only the character"),
    lastName:Joi.string().pattern(/^[a-zA-Z]+$/).message("last name contain only the character"),
    mobile:Joi.string().length(10),
    emailId:Joi.string().email({tlds:{allow: true}}),
    password:Joi.string(),
    gender:Joi.string().valid("male","female"),
    isDeleted:Joi.boolean().default(false),
    age:Joi.number().min(17),    
})



//----------------------------------------------🔥UPDATE USER TOKEN VALIDATION 🔥---------------------------------------------------


const updateUser = function(req,res,next){
   const {userId}= req.params;
    const token = req.headers["x-auth-token"];
    if(!token) res.send(responseFormat({code:responseCode.HEADER_TOKEN_NOT_PRESENT,msg:responseMessage[responseCode.HEADER_TOKEN_NOT_PRESENT]}))
    if(Object.keys(req.body).length==0) res.send(responseFormat({code:responseCode.BODY_DATA_NOT_PRESENT,msg:responseMessage[responseCode.BODY_DATA_NOT_PRESENT]}));
   const data = updateUserSchema.validate(req.body);
   if(data.error){
    res.send(responseFormat({code:responseCode.BAD_REQUEST,msg:data.error.message}));
   }else{
        jwt.verify(token,"login",(err,decode)=>{
        if(err){ 
            res.send(responseFormat({code:responseCode.AUTHENTICATION_FAILED,msg:responseMessage[responseCode.AUTHENTICATION_FAILED]}));
        }else{
            if(userId== decode.userId) next();
            else res.send(responseFormat({code:responseCode.AUTHENTICATION_FAILED,msg:responseMessage[responseCode.AUTHENTICATION_FAILED]}))
            
        }  
    })      
   }
}


//----------------------------------------------🔥DELETE USER TOKEN VALIDATION 🔥---------------------------------------------------


const deleteUserValidation = async function(req,res,next){
    try {
        const {userId}=req.params;
    const token = req.headers["x-auth-token"];
    if(!token) res.send(responseFormat({code:responseCode.HEADER_TOKEN_NOT_PRESENT,msg:responseMessage[responseCode.HEADER_TOKEN_NOT_PRESENT]}))    
    if(mongoose.Types.ObjectId.isValid(userId)){
       jwt.verify(token,"login",(err,decode)=>{
          if(err){
           res.send(responseFormat({code:responseCode.AUTHENTICATION_FAILED,msg:responseMessage[responseCode.AUTHENTICATION_FAILED]}))
          }else{
           if(userId == decode.userId){
             next();
           }else{
           res.send(responseFormat({code:responseCode.AUTHENTICATION_FAILED,msg:responseMessage[responseCode.AUTHENTICATION_FAILED]}));
           }  
        }
       })
    }else{
      res.send(responseFormat({code:responseCode.USERID_NOT_VALID,msg:responseMessage[responseCode.USERID_NOT_VALID]}))
    }
    } catch (error) {
      res.send(responseFormat({code:responseCode.INTERNAL_SERVER_ERROR,msg:responseMessage[responseCode.INTERNAL_SERVER_ERROR]})); 
    }
}





module.exports={updateUser,deleteUserValidation};