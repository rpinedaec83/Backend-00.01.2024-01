const { request, response } = require("express");
const axios = require("axios").default;
const apiUnsplash = "https://api.unsplash.com";
const apiKey = ""
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getPhoto = async (req = request, res = response) => {
  const { name } = req.params;
  const response = await axios.get(`${apiUnsplash}/photos/?client_id=${apiKey}`, {
    httpsAgent: agent,
  });
  const data = response.data;
  console.log(data)
  res.json(data);
};

module.exports = {
  getPhoto,
};
