const responseCode = require("../Utills/response-code");
const responseMessage = require("../Utills/response-message");
const { responseFormat } = require("../Utills/util");
const User = require("../models/user");
const bcrypt = require("bcrypt");

//----------------------------------------------🔥Fetch USER SERVICE🔥---------------------------------------------------

const fetchUserById = async function (userId) {
   try {
      const isUserPresent = await User.findById(userId);
       if (isUserPresent) {
         if(isUserPresent.isDeleted) return responseFormat({code:responseCode.USER_NOT_EXISTS,msg:responseMessage[responseCode.USER_NOT_EXISTS]});
         return responseFormat({
            code: responseCode.SUCCESS,
            msg: responseMessage[responseCode.SUCCESS],
            data: isUserPresent,
         });
      } else {
         return responseFormat({
            code: responseCode.USER_NOT_EXISTS,
            msg: responseMessage[responseCode.USER_NOT_EXISTS],
         });
      }
   } catch (error) {
      return responseFormat({
         code: responseCode.INTERNAL_SERVER_ERROR,
         msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],
      });
   }
};

//----------------------------------------------🔥UPDATE USER SERVICE🔥---------------------------------------------------

const updateUserById = async function (userId, requestData) {
   try {
      const isUserExists = await User.findById(userId);
      if (isUserExists) {
          if(isUserExists.isDeleted) return responseFormat({code:responseCode.USER_NOT_EXISTS,msg:responseMessage[responseCode.USER_NOT_EXISTS]});
          if(requestData.isDeleted) return responseFormat({code:responseCode.NOT_ACCESS_FOR_DELETE,msg:responseMessage(responseCode.NOT_ACCESS_FOR_DELETE)});
         if (requestData.password) {
            const hashPassword = bcrypt.hashSync(requestData.password, 5);
            requestData.password = hashPassword;
         }
         const updatedUser = await User.updateOne({ _id: userId }, requestData);
         return responseFormat({
            code: responseCode.SUCCESS,
            msg: responseMessage[responseCode.SUCCESS],
            data: updatedUser,
         });
      } else {
         return responseFormat({
            code: responseCode.USER_NOT_EXISTS,
            msg: responseMessage[responseCode.USER_NOT_EXISTS],
         });
      }
   } catch (error) {
      return responseFormat({
         code: responseCode.INTERNAL_SERVER_ERROR,
         msg: responseMessage[code.INTERNAL_SERVER_ERROR],
      });
   }
};

//----------------------------------------------🔥DELETE USER SERVICE🔥---------------------------------------------------
const deleteUserById = async (request) => {
   try {
      const { userId } = request;
      const isUser = await User.findById(userId);
      if (!isUser)
         return responseFormat({
            code: responseCode.USER_NOT_EXISTS,
            msg: responseMessage[responseCode.USER_NOT_EXISTS],
         });
      if (isUser.isDeleted)
         return responseFormat({
            code: responseCode.USER_ALREADY_DELETED,
            msg: responseMessage[responseCode.USER_ALREADY_DELETED],
         });
      const deleted = await User.updateOne({ _id: userId }, { isDeleted: true });
      return responseFormat({
         code: responseCode.SUCCESS,
         msg: responseMessage[responseCode.SUCCESS],
         data: deleted,
      });
   } catch (error) {
      return responseFormat({
         code: responseCode.INTERNAL_SERVER_ERROR,
         msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],
      });
   }
};



module.exports = { fetchUserById, updateUserById, deleteUserById };
