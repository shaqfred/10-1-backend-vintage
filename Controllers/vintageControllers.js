const express = require("express");
const vintage = express.Router();

const { getAllVintage } = require("../db/queries/vintage.js");

vintage.get("/", async (request, response) => {
  const allVintage = await getAllVintage();
  if (allVintage[0]) {
    response.status(200).json(allVintage);
  } else response.status(500).json({ error: "service error" });
});

module.exports = vintage;
