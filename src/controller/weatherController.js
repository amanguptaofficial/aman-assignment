const { getWeatherService } = require("../service/weatherService");

const getWeather = async function (req, res) {
  try {
    const temprature = await getWeatherService(req.query);
    res.send(temprature);
  } catch (error) {
    res.send({ code: 500, msg: "error occured", data: {} });
  }
};

module.exports = { getWeather };
