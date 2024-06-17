const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const Util = require("../Utills/util");
const responseCode = require("../Utills/response-code");
const responseMessage = require("../Utills/response-message");

//----------------------------------------------🔥SIGN_UP USER SERVICE🔥---------------------------------------------------

const signupService = async (requestData) => {
  try {
    const { emailId, password } = requestData;
    const isUserExists = await user.findOne({ emailId });
    console.log(isUserExists);
    if (isUserExists) {
      return Util.responseFormat({
        code: responseCode.USER_ALREADY_EXITS,
        msg: responseMessage[responseCode.USER_ALREADY_EXITS],
      });
    } else {
      const hashPassword = bcrypt.hashSync(password, 5);
      requestData.password = hashPassword;
      const insertedUser = await user.create(requestData);
      if (!insertedUser)
        return Util.responseFormat({
          code: responseCode.REGISTRATION_FAILED,
          msg: responseMessage[responseCode.REGISTRATION_FAILED],
        });
      return Util.responseFormat({
        code: responseCode.SUCCESS,
        msg: responseMessage[responseCode.SUCCESS],
        data: insertedUser,
      });
    }
  } catch (error) {
    return Util.responseFormat({
      code: responseCode.INTERNAL_SERVER_ERROR,
      msg: responseMessage[code.INTERNAL_SERVER_ERROR],
    });
  }
};

//----------------------------------------------🔥SIGN_IN USER SERVICE🔥---------------------------------------------------

const loginService = async (requestData) => {
  try {
    const { emailId, password } = requestData;
    const isUserPresent = await user.findOne({ emailId });
    if (!isUserPresent) {
      return Util.responseFormat({
        code: responseCode.USER_NOT_EXISTS,
        msg: responseMessage[responseCode.USER_NOT_EXISTS],
      });
    } else {
      const isCorrectPassword = bcrypt.compareSync(
        password,
        isUserPresent.password
      );
      if (!isCorrectPassword) {
        return Util.responseFormat({
          code: responseCode.INCORRECT_PASSWORD,
          msg: responseMessage[responseCode.INCORRECT_PASSWORD],
        });
      } else {
        const { _id } = isUserPresent;
        const token = jwt.sign({ userId: _id }, "login");
        return Util.responseFormat({
          code: responseCode.SUCCESS,
          msg: responseMessage[responseCode.SUCCESS],
          data: { _id, token },
        });
      }
    }
  } catch (error) {
    return Util.responseFormat({
      code: responseCode.INTERNAL_SERVER_ERROR,
      msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],
    });
  }
};




module.exports = { signupService, loginService };
