const { Router } = require("express");
const { getUser } = require("../services/github.service");

const routes = Router();

routes.get("/github/:username", getUser);

module.exports = routes;