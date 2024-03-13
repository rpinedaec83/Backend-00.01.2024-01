const { Router } = require("express");

const { getPlanetary } = require("../services/nasa.service");
const routes = Router();

routes.get("/nasa/planetary", getPlanetary);

module.exports = routes;
