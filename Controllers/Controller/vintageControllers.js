const express = require("express");
const vintage = express.Router();

const { getAllVintage } = require("../Controller/queries/vintage.js");

vintage.get("/", (request, response) => {
  response.json({ status: "ok" });
});

module.exports = vintage;
