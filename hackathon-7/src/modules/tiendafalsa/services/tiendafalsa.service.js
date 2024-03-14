
const { request, response } = require("express");
const axios = require("axios").default;

const apiTienda = "https://fakestoreapi.com";


const getProductos = async (req = request, res = response) => {
  try {
    let productoid = req.query.productoid || "1"; 
    const response = await axios.get(`${apiTienda}/products/${productoid}`, {

    });
    console.log(productoid)
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error al obtener datos de la tienda:", error);
    res.status(500).json({ error: "Error al obtener datos de la tienda" });
  }
};

module.exports = {
  getProductos,
};