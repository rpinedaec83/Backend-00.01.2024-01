const { Router } = require("express");
const { getPlanetary } = require("../services/nasa.service");

const routes = Router();

routes.get("/nasa/planetary/apod", getPlanetary);

module.exports = routes;
