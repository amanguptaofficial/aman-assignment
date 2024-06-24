const express = require("express");
const router = express.Router();
const { getWeather } = require("../controller/weatherController");

router.get("/", (req, res) => {
  res.send("Go ahead");
});

router.get("/weather",getWeather)




module.exports=router
