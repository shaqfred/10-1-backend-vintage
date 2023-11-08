const express = require("express");
const cors = require("cors");

const vintageControllers = require("./Controllers/vintageControllers.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/vintage", vintageControllers);

app.get("/", (request, response) => {
  response.send("Welcome to Vintage Connect Retro");
});

app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

module.exports = app;
