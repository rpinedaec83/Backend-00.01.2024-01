const { Router } = require("express");

const { getFrankfurter } = require("../services/frankfurter.service");
const routes = Router();

routes.get("/frankfurter/exchange", getFrankfurter);

module.exports = routes;
