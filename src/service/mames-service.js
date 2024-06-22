const axios = require("axios");
const Util = require("../utils/Util");
const responseCode = require("../utils/response-code");
const responseMessage = require("../utils/response-message");

//----------------------------------------------🔥GET ALL MEMES SERVICE🔥--------------------------------------------------------------

const getAllmames = async () => {
  try {
    const result = await axios.get("https://api.imgflip.com/get_memes");
    if (!result)
      return Util.responseFormat({
        code: responseCode.DATA_IS_NOT_PRESENT,
        msg: responseMessage[responseCode.DATA_IS_NOT_PRESENT],
      });
    return Util.responseFormat({
      code: responseCode.SUCCESS,
      msg: responseMessage[responseCode.SUCCESS],
      data: result.data.data.memes,
    });
  } catch (error) {
    return Util.responseFormat({
      code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,
      msg: responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED],
    });
  }
};

//----------------------------------------------🔥GET MEME BY ID SERVICE🔥--------------------------------------------------------------

const memeById = async function (id) {
  try {
    const result = await axios.get("https://api.imgflip.com/get_memes");
    if (!result)
      return Util.responseFormat({
        code: responseCode.DATA_IS_NOT_PRESENT,
        msg: responseMessage[responseCode.DATA_IS_NOT_PRESENT],
      });
    const allmemes = result.data.data.memes;
    const filtereddata = allmemes.filter((data) => data.id == id);
    if (filtereddata.length == 0)
      return Util.responseFormat({
        code: responseCode.DATA_IS_NOT_PRESENT,
        msg: responseMessage[responseCode.DATA_IS_NOT_PRESENT],
      });
    return Util.responseFormat({
      code: responseCode.SUCCESS,
      msg: responseMessage[responseCode.SUCCESS],
      data: filtereddata,
    });
  } catch (error) {
    return Util.responseFormat({
      code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,
      msg: responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED],
    });
  }
};

//----------------------------------------------🔥CREATE MEME SERVICE🔥--------------------------------------------------------------

const createMeme = async function (requestData) {
  try {
    const { template_id, text0, text1, username, password } = requestData;
    const result = await axios.get(
      `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    );
    if (!result) return Util.responseFormat({ code: responseCode.DATA_IS_NOT_PRESENT, msg: responseMessage[responseCode.DATA_IS_NOT_PRESENT] });
    return Util.responseFormat({ code: responseCode.SUCCESS, msg: responseMessage[responseCode.SUCCESS], data: result.data.data });
 } catch (error) {
    return Util.responseFormat({ code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED, msg: responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED] })
  }
};




module.exports = { getAllmames, memeById, createMeme };
