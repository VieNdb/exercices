import express, { Request, Response } from "express";
import * as core from "express-serve-static-core";
import { Db } from "mongodb";
import nunjucks from "nunjucks";
import fetch from "node-fetch";
import { GameModel } from "./models/game";

import OAuth2Client, {
  OAuth2ClientConstructor,
} from "@fewlines/connect-client";


//const authURL = await oauthClient.getAuthorizationURL("state");

// const tokens = await oauthClient.getTokensFromAuthorizationCode(
//   "authorization_code"
// );

export function makeApp(db: Db): core.Express {



  const app = express();
  const oauthClientConstructorProps: OAuth2ClientConstructor = {
    openIDConfigurationURL:
      "https://fewlines.connect.prod.fewlines.tech/.well-known/openid-configuration",
    clientID: `${process.env.CONNECT_CLIENT_ID}`,
    clientSecret: `${process.env.CONNECT_CLIENT_SECRET}`,
    redirectURI: "http://localhost:3000/oauth/callback",
    audience: "wdb2g1",
    scopes: ["openid", "email"],
    //callbackUrls: {"https://happy-project-production.herokuapp.com/oauth/callback,https://happy-project-staging.herokuapp.com/oauth/callback,http://localhost:8080/oauth/callback,http://localhost:3000/oauth/callback,https://oauthdebugger.com/debug"}
  };
  nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  app.set("view engine", "njk");

  app.get("/", (request: Request, response: Response) => {
    //getAuthorizationURL
    //const url = `https://fewlines.connect.prod.fewlines.tech/oauth/authorize?client_id=${process.env.CONNECT_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/oauth/callback&scope=email%20openid`;
    const urlIntermediaire = new OAuth2Client(oauthClientConstructorProps);
    //console.log(urlIntermediaire);
    //urlIntermediaire.then(res => res.getAuthorizationURL("state"))

    //const url = await urlIntermediaire.getAuthorizationURL("state");

    urlIntermediaire.getAuthorizationURL("state").then((res) => {
      //console.log(res);
      response.render("index", {
        connectLoginURL: res,
      });
    });
  });

  // response.render("index", {
  //   connectLoginURL: url,
  // });

  app.get("/oauth/callback", (request: Request, response: Response) => {
    response.json({
      authorization_code: request.query.code,
    }); //.then(res => {
    //const tokens = await oauthClient.getTokensFromAuthorizationCode(res.authorization_code);

    //const tokens = await oauthClient.getTokensFromAuthorizationCode("authorization_code",);
  });

  // app.get("/oauth/callback", (request: Request, response: Response) => {
  //   const data = {
  //     client_id: `${process.env.CONNECT_CLIENT_ID}`,
  //     client_secret: `${process.env.CONNECT_CLIENT_SECRET}`,
  //     code: `${request.query.code}`,
  //     grant_type: "authorization_code",
  //     redirect_uri: "http://localhost:3000/oauth/callback",
  //   };
  //   fetch(`https://fewlines.connect.prod.fewlines.tech/oauth/token`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "appliciton/x-www-form-urlencoded",
  //     },
  //     body: new URLSearchParams(data).toString(),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       oauthClient.verifyJWT(result.access_token, "RS256").then((payload) => {
  //         response.json(payload);
  //       });
  //       response.end();
  //     });
  // });


//   return app;

// }
  //initDB().then((client) => {
    //const db=client.db();
    const gameModel=new GameModel(db.collection("games"));

    //const app2=makeApp2(gameModel);

  const clientWantsJson = (request: express.Request): boolean =>
  request.get("accept") === "application/json";

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
    gameModel.findBySlug(request.params.game_slug).then((games) => {
      if (!games) {
        response.status(404).end();
      } else {
        if(clientWantsJson(request)) {
          response.json(games);
        } else {
          response.render("game", { games });
        }
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
    
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
        if(clientWantsJson(request)) {
          response.json(gamesForPlatform);
        } else {
          response.render("platform", { gamesForPlatform });
        }
       
      });
  });

  

//})

return app;}