const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true })); // ref: https://medium.com/@obulareddyveera/next-js-invite-express-js-as-middleware-ea5e7bb494f0

    server.get("/chat", (req, res) => {
      return res
        .status(200)
        .send({ message: "resource found. you are seeing chat page" });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
