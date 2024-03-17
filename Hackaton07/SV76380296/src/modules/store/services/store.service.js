const { request, response } = require("express");
const axios = require("axios").default;
const apiStore = "https://fakestoreapi.com";
const apiKey = ""
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getStore = async (req = request, res = response) => {
  const response = await axios.get(`${apiStore}/products`, {
    httpsAgent: agent,
  });
  const data = response.data;
  console.log(data)
  res.json(data);
};

module.exports = {
  getStore,
};
