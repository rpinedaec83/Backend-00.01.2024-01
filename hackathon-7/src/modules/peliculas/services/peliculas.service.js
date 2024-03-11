
const { request, response } = require("express");
const axios = require("axios").default;

const apiMovies = "moviesdatabase.p.rapidapi.com";
const apiKey = "64652c4e79mshbe01662c1b77842p144ed5jsn547684a26759";

const getMovies = async (req = request, res = response) => {
  try {
    let id = req.query.id || "tt0086250"; 
    const response = await axios.get(`${apiMovies}/titles/${id}/ratings`, {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      },
    });
    console.log(id)
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Limite de usos excedido:", error);
    res.status(500).json({ error: "Limite de usos excedido" });
  }
};

module.exports = {
  getMovies,
};
