const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const { request, response } = require("express");
const axios = require("axios").default;
const apiNasa = "https://api.nasa.gov";
const apiKey = "l2n794YHfqpe7Gln41DbToMG0DQXuUwulaeF74Lh";
// https://api.nasa.gov/insight_weather/?api_key=l2n794YHfqpe7Gln41DbToMG0DQXuUwulaeF74Lh&feedtype=json&ver=1.0
const getPlanetary = async (req = request, res = response) => {
  const response = await axios.get(`${apiNasa}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`, {
    params: {

    },
    httpsAgent: agent,
  });
  const data = response.data;
  res.json(data);
};

module.exports = {
  getPlanetary,
};
