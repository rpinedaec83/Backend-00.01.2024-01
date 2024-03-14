
const { Router } = require("express");

const { getCita } = require("../services/cita.service");
const routes = Router();

routes.get("/leer/cita", getCita);

module.exports = routes;
