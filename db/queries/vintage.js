const db = require("../dbConfig");

const getAllVintage = async () => {
  try {
    const allVintage = await db.any("SELECT * FROM vintage");
    return allVintage;
  } catch (error) {
    return error;
  }
};
const getVintage = async (id) => {
  try {
    const oneVintage = await db.one("SELECT * FROM vintage WHERE id=$1", id);
    return oneVintage;
  } catch (error) {
    return error;
  }
};
const createVintage = async (vintage) => {
  try {
    const newVintage = await db.one(
      "INSERT INTO vintage (name,style,category,price)VALUES($1, $2, $3, $4) RETURNING *",
      [vintage.name, vintage.stye, vintage.category, vintage.price]
    );
    return newVintage;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllVintage, getVintage, createVintage };
