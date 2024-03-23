const { request, response } = require("express");
const axios = require("axios").default;
const apiPokemon = "https://pokeapi.co";
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getPokemon = async (req = request, res = response) => {
  const { name } = req.params;
  const response = await axios.get(`${apiPokemon}/api/v2/pokemon/${name}`, {
    httpsAgent: agent,
  });
  const data = response.data;
  console.log(data)
  res.json(data);
};

module.exports = {
  getPokemon,
};
