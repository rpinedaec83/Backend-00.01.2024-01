const { request, response } = require("express");
const axios = require("axios").default;
const apiQuotes = "https://quotes.rest";
const apiKey = ""
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getQuote = async (req = request, res = response) => {
  const response = await axios.get(`${apiQuotes}/qod?language=en`, {
    httpsAgent: agent,
    headers: { 
      'Authorization': 'Bearer e98usQ0242KN67ZQsMc2aNQQmxRJPfQQKueADY2b'
    }
  });
  const data = response.data;
  console.log(data)
  res.json(data);
};

module.exports = {
  getQuote,
};
