const path = require("path");
const express = require("express");
const githubRoutes = require("../modules/github/routes/github.route");
const nasaRoutes = require("../modules/nasa/routes/nasa.route");
const pokemonRoutes = require("../modules/pokemon/routes/pokemon.route");
const photoRoutes = require("../modules/photo/routes/photo.route");
const quoteRoutes = require("../modules/quote/routes/quote.route");
const rickMortyRoutes = require("../modules/rickmorty/routes/rickmorty.route");
const storeRoutes = require("../modules/store/routes/store.route");

class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.originPath = "/api";

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.static(path.join(__dirname, "../../public")));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.originPath, githubRoutes);
    this.app.use(this.originPath, nasaRoutes);
    this.app.use(this.originPath, pokemonRoutes);
    this.app.use(this.originPath, photoRoutes);
    this.app.use(this.originPath, quoteRoutes);
    this.app.use(this.originPath, rickMortyRoutes);
    this.app.use(this.originPath, storeRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen in port ${this.port}`);
    });
  }
}

module.exports = Server;
