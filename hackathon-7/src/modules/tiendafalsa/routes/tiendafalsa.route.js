const { Router } = require("express");

const { getProductos } = require("../services/tiendafalsa.service");
const routes = Router();

routes.get("/tienda/productos", getProductos);

module.exports = routes;
