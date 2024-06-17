const responseCode = require("../Utills/response-code");
const responseMessage = require("../Utills/response-message");
const Util = require("../Utills/util");
const authService = require("../services/authService");

//----------------------------------------------🔥SIGN-UP USER HANDLER🔥---------------------------------------------------

const userSignUp = async (req, res) => {
  try {
    const usersignupSuccess = await authService.signupService(req.body);
    res.send(usersignupSuccess);
  } catch (error) {
    res.send(
      Util.response({code: responseCode.INTERNAL_SERVER_ERROR,msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],data: {} })
    );
  }
};


//----------------------------------------------🔥SIGN_IN USER HANDLER🔥---------------------------------------------------

const userLogin = async (req, res) => {
  try {
    const isloggedIn = await authService.loginService(req.body);
   res.send(Util.response(isloggedIn));
  } catch (error) {
    res.send(
      Util.response({ code: responseCode.INTERNAL_SERVER_ERROR,msg: responseMessage[code.INTERNAL_SERVER_ERROR],data: {}})
    );
  }
};



module.exports = { userSignUp, userLogin };
