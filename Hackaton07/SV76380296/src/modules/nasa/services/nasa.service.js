const { request, response } = require("express");
const axios = require("axios");
const apiNasa = "https://api.nasa.gov";
const apiKey = "56ghggT6RaZ3qQH9Lg9Jy85xbhPnbPWY89W5yJOs";
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getPlanetary = async (req = request, res = response) => {
  const response = await axios.get(`${apiNasa}/planetary/apod`, {
    params: {
      api_key: apiKey,
    },
    httpsAgent: agent,
  });
  const data = response.data;
  res.json(data);
};

module.exports = {
  getPlanetary,
};
