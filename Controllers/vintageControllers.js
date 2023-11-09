const express = require("express");
const vintage = express.Router();

const {
  getAllVintage,
  getVintage,
  createVintage,
} = require("../db/queries/vintage.js");
const { checkPrice, checkName } = require("../validations/checkVintage.js");

//Get all vintage//
vintage.get("/", async (request, response) => {
  const allVintage = await getAllVintage();
  if (allVintage[0]) {
    response.status(200).json(allVintage);
  } else response.status(500).json({ error: "service error" });
});
//Get one vintage//
vintage.get("/:id", async (request, response) => {
  const { id } = request.params;
  const oneVintage = await getVintage(id);
  if (oneVintage.length === 0) {
    response.status(404).json({ error: "Not Found" });
  } else {
    response.status(200).json(oneVintage);
  }
});
//post a new vintage
vintage.post("/", checkName, async (request, response) => {
  const body = request.body;
  const vintages = await createVintage(body);
  response.status(200).json(vintages);
});

module.exports = vintage;
