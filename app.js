const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to Vintage Connect Retro");
});

module.exports = app;
