const responseCode = require("./response-code");
const responseMessage = require("./response-message");
module.exports = class Util {
    static response({ code, msg, data }) {
        try {
            const result = {
                code,
            };
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
            let result = {
                code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,
                msg: responseMessage[code],
                data: {},
            };
            return result;
        }
    }

    static responseFormat({ code = 200, msg, data = {} }) {
        try {
            return { code, msg, data };
        } catch (error) {
            let res = {
                code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,
                msg: responseMessage[code],
                data: {},
            };
            return res;
        }
    }
};