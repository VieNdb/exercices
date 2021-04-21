import express from "express";
import * as core from "express-serve-static-core";
import * as nunjucks from "nunjucks";
import { GameModel } from "./models/game";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  const clientWantsJson = (request: express.Request): boolean =>
  request.get("accept") === "application/json";

  nunjucks.configure("views", {
    autoescape: true,
    express: app
  });

  app.set("view engine", "njk");

  app.get("/", (request, response) => {
    response.render("platform");
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if(clientWantsJson(request)) {
        response.json(games);
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        response.json(game);
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      console.log(platforms);
      if(clientWantsJson(request)) {
        response.json(platforms);
      } else {
        response.render("platforms", { platforms });
      }
      
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel
      .findByPlatform(request.params.platform_slug)
      .then((gamesForPlatform) => {
        response.json(gamesForPlatform);
      });
  });

  return app;
}
