const path = require("path");
const express = require("express");
const githubRoutes = require("../modules/github/routes/github.route");
const nasaRoutes = require("../modules/nasa/routes/nasa.route");
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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listen in port ${this.port} 🚀🚀`);
    });
  }
}

module.exports = Server;
