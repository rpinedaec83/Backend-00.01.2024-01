
const { request, response } = require("express");
const axios = require("axios").default;

const apiMovies = "moviesdatabase.p.rapidapi.com";
const apiKey = "64652c4e79mshbe01662c1b77842p144ed5jsn547684a26759";

const getinfoMovies = async (req = request, res = response) => {
  try {
    let idSerie = req.query.idSerie || "tt0086250"; 
    const response = await axios.get(`${apiMovies}/titles/series/${idSerie}/`, {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      },
    });
    console.log(idSerie)
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Profe por alguna razon no me dejaba usar esta api ni en el test endpoint:", error);
    res.status(500).json({ error: "Profe por alguna razon no me dejaba usar esta api ni en el test endpoint" });
  }
};

module.exports = {
  getinfoMovies,
};
