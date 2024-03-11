const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const { request, response } = require("express");
const axios = require("axios").default;
const apiNasa = "https://api.nasa.gov";
const apiKey = "BPknDvxObDtsDbhTi29xzBmGOCK83UyyWCDA4cHd";

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
