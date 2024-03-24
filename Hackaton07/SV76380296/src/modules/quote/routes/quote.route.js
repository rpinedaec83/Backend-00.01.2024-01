const { Router } = require("express");

const { getQuote } = require("../services/quote.service");
const routes = Router();

routes.get("/api.unsplash.com", getQuote);

module.exports = routes;
