

const { request, response } = require("express");
const axios = require("axios").default;

const apiPokemon = "https://pokeapi.co/api/v2/";
const apiKey = "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186";

const getPokemon = async (req = request, res = response) => {
  try {
    let pokemon = req.query.pokemon || "ditto"; 
    const response = await axios.get(`${apiPokemon}/pokemon/${pokemon}`, {
      
    });
    const data = response.data;
    console.log(pokemon)
    res.json(data);
  } catch (error) {
    console.error("Error al obtener datos del pokemon:", error);
    res.status(500).json({ error: "Error al obtener del pokemon" });
  }
};

module.exports = {
  getPokemon,
};
 
