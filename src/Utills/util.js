const responseCode = require("../Utills/response-code");
const responseMessage = require("../Utills/response-message");

module.exports = class Util {

  //for controller
  static response({ code, msg, data }) {
    try {
      let result = {
        code,
      }
      if (msg) {
        result.msg = msg;
      } else {
        result.msg = responseMessage[code];
      }
      if (data) {
        result.data = data;
      }

      return result;
    } catch (error) {
      let res = {
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[code],
        data: {},
      };
      return res;
    }
  }

  // for service
  static responseFormat({ code = 200, msg, data = {} }) {

    try {
      return { code, msg, data };
    } catch (error) {
      let res = {
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[code],
        data: {},
      };
      return res;
    }
  }
};
