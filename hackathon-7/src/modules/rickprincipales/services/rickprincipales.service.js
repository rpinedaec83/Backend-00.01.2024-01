const { request, response } = require("express");
const axios = require("axios").default;

const apiUrl = "https://rickandmortyapi.com/api";

const getProtagonistas = async (req = request, res = response) => {
  try {
    let characterId = req.query.id || "2";
    const response = await axios.get(`${apiUrl}/character/${characterId}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error al obtener los protagonistas:", error);
    res.status(500).json({ error: "Error al obtener los protagonistas" });
  }
};

module.exports = {
  getProtagonistas,
};



