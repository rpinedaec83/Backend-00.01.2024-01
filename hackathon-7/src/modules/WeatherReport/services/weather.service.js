

const { request, response } = require("express");
const axios = require("axios").default;

const apiWeather = "https://the-weather-api.p.rapidapi.com";
const apiKey = "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186";

const getWeather = async (req = request, res = response) => {
  try {
    let ciudad = req.query.ciudad || "Lima"; 
    const response = await axios.get(`${apiWeather}/api/weather/${ciudad}`, {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "the-weather-api.p.rapidapi.com",
      },
    });
    console.log(ciudad)
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error al obtener datos meteorológicos:", error);
    res.status(500).json({ error: "Error al obtener datos meteorológicos" });
  }
};

module.exports = {
  getWeather,
};
