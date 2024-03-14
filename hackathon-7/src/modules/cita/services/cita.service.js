const { request, response } = require("express");
const axios = require("axios"); 
const apiCita = "https://quotes.rest"; 
const apiKey = "RBUOHa7RyuuQZGTFUHCjpwRk7YPkIHeICvnIbwi0";

const getCita = async (req = request, res = response) => {
  try {
    const response = await axios.get(`${apiCita}/quote/random.json`, {
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
      },
    });

    const data = response.data;

    res.json({
      citaData: data,
    });
  } catch (error) {
    console.error("Error en los datos de la API: ", error);
    res.status(500).json({ error: "Error en los datos de la API" });
  }
};

module.exports = {
  getCita,
};