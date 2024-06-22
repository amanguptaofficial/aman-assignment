const express = require("express");
const router= express.Router();
const controller = require("../controller/mames-controller");
const {checkvalidation}= require("../middleware/create-meme-validation");

//----------------------------------------------🔥ALL ROUTE🔥--------------------------------------------------------------

router.get("/mames", controller.allMames);
router.get("/mames/:id", controller.memebyid);
router.post("/createMeme",checkvalidation,controller.createMemes);





module.exports = router;
