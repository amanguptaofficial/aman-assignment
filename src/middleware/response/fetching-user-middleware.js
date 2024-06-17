const responseCode = require("../../Utills/response-code");
const responseMessage = require("../../Utills/response-message");
const Util = require("../../Utills/util");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//-----------------------------------------------🔥FETCHING USER MIDDLEWARE🔥---------------------------------------------------

const checkingHeader = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const token = req.headers["x-auth-token"];
    if (mongoose.Types.ObjectId.isValid(userId)) {
      if (token) {
        jwt.verify(token, "login", (err, decoded) => {
          if (err) {
            res.send(
              Util.responseFormat({
                code: responseCode.AUTHENTICATION_FAILED,
                msg: responseMessage[responseCode.AUTHENTICATION_FAILED],
              })
            );
          } else {
            if (userId == decoded.userId) {
              next();
            } else {
              res.send(
                Util.responseFormat({
                  code: responseCode.AUTHENTICATION_FAILED,
                  msg: responseMessage[responseCode.AUTHENTICATION_FAILED],
                })
              );
            }
          }
        });
      } else {
        res.send(
          Util.responseFormat({
            code: responseCode.HEADER_TOKEN_NOT_PRESENT,
            msg: responseMessage[responseCode.HEADER_TOKEN_NOT_PRESENT],
          })
        );
      }
    } else {
      res.send(
        Util.responseFormat({
          code: responseCode.USERID_NOT_VALID,
          msg: responseMessage[responseCode.USERID_NOT_VALID],
        })
      );
    }
  } catch (error) {
    res.send(
      Util.responseFormat({
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[responseCode.INTERNAL_SERVER_ERROR],
      })
    );
  }
};

module.exports = { checkingHeader };
