const service = require("../service/mames-service");
const Util = require("../utils/Util");
const responseCode = require("../utils/response-code");
const responseMessage = require("../utils/response-message");

//----------------------------------------------🔥GET ALL MEMES🔥--------------------------------------------------------------

const allMames = async (req, res) => {
  try {
    const alldata = await service.getAllmames();
    res.send(Util.response(alldata));
  } catch (error) {
    res.send(
      Util.response({
        code: responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,
        msg: responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED],
        data: {},
      })
    );
  }
};


//----------------------------------------------🔥GET MEMES BY ID🔥--------------------------------------------------------------

const memebyid = async (req, res) => {
  try {
    const { id } = req.params;
    const meme = await service.memeById(id);
    res.send(Util.response(meme));
  } catch (error) {
    res.send(Util.response({code:responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,msg:responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED]}));
  }
};



//----------------------------------------------🔥CREATE MEMES🔥--------------------------------------------------------------
const createMemes = async (req,res)=>{
 try {
  const memecreated = await service.createMeme(req.query);
   res.send(Util.response(memecreated));
res.send("hello")
 } catch (error) {
  res.send(Util.response({code:responseCode.INTERNAL_SERVER_PROBLEM_OCCURED,msg:responseMessage[responseCode.INTERNAL_SERVER_PROBLEM_OCCURED],data:{}}));
 }

}


module.exports = { allMames, memebyid,createMemes };