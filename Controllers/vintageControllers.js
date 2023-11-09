const express = require("express");
const vintage = express.Router();

const {
  getAllVintage,
  getVintageItemByID,
  createVintage,
} = require("../db/queries/vintage.js");

const { checkPrice, checkName } = require("../validations/checkVintage.js");

//Get all vintage//
vintage.get("/", async (request, response) => {

  const allVintage = await getAllVintage();

  //if there is atleast one item
  if (allVintage[0]) {
    response.status(200).json(allVintage);
  } else response.status(500).json({ error: "service error" });
});

//Get one vintage//
vintage.get("/:id", async (request, response) => {
  const id = request.params.id;

  const vintageItemById = await getVintageItemByID(id);

  // if no item was found
  if (!vintageItemById) {
    //tell the client no item was found
    response.status(404).json({ error: "No item with that id was found." });
  } else {
    // send the item object
    response.status(200).json(vintageItemById);
  }
});

//post a new vintage
vintage.post("/", checkName, async (request, response) => {
  const body = request.body;
  const vintages = await createVintage(body);
  response.status(200).json(vintages);
});

module.exports = vintage;
