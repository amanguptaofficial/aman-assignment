const axios = require("axios");

const getWeatherService = async function (queryData) {
  try {
    if (!queryData)
      return { code: 401, msg: "please provide the city name", data: {} }
    const { city } = queryData;
    const newcity = city.charAt(0).toUpperCase() + city.slice(1).toUpperCase();
    const wheaterData = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${newcity}&appid=aa63a04e008d070d53f536d6e0431269`
    );
    const currentTempInCelcius = (wheaterData.data.main.temp - 273.15).toFixed(1);
    return { city: newcity, temp: currentTempInCelcius };
  } catch (error) {
    return { code: 500, msg: error.message, data: {} };
  }
};

module.exports = { getWeatherService };
