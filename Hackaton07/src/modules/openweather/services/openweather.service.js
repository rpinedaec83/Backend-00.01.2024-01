const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const { response, request } = require('express');
const axios = require('axios').default;
const apiOpenWeather = "https://api.openweathermap.org";
const apiKey = 'ee29c2e0d5e2edc270ab0115eab3fada';

const getWeather = async (req = request, res = response) => {
    const { lat } = req.params;
    const { lon } = req.params;
    const response = await axios.get(`${apiOpenWeather}/data/2.5/weather`, {
        params: {
            lat: lat,
            lon: lon, 
            appid: apiKey,
        },
        httpsAgent : agent,        
    });
    const data = response.data;
    console.log(data);
    res.json(data);
};

module.exports = {
    getWeather,
}