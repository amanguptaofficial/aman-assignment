const responseCode = require("../Utills/response-code");
const responseMessage = require("../Utills/response-message");
const Util = require("../Utills/util");
const userService = require("../services/userService");


//----------------------------------------------🔥GET ONE USER HANDLER🔥---------------------------------------------------

const fetchOneUser = async function (req, res) {
  try {
    const { userId } = req.params;
    const foundUser = await userService.fetchUserById(userId);
    res.send(Util.response(foundUser));
  } catch (error) {
    res.send(
      Util.response({
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],
        data: {},
      })
    );
  }
};
   
//----------------------------------------------🔥UPDATE USER HANDLER🔥---------------------------------------------------

const updateUser = async function (req, res) {
  try {
    const { userId } = req.params;
    const updatedUser = await userService.updateUserById(userId, req.body);
    res.send(Util.response(updatedUser));
  } catch (error) {
    res.send(
      Util.response({
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],
      })
    );
  }
};


//----------------------------------------------🔥DELETE USER HANDLER🔥---------------------------------------------------

const deleteUser = async (req,res)=>{
   try {
    const userDeletd= await userService.deleteUserById(req.params); 
     res.send(Util.response(userDeletd));
   } catch (error) {
    res.send(Util.responseFormat({code:responseCode.INTERNAL_SERVER_ERROR,msg:responseMessage[responseCode.INTERNAL_SERVER_ERROR]}));
   }
}




module.exports = { fetchOneUser, updateUser,deleteUser};
