const pgp = require("pg-promise")();
require("dotenv").config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

db.connect()
  .then((obj) => {
    console.log("Postgres connection is established");
  })
  .catch((e) => {
    console.log("ERROR:", e.message || e);
  });
module.exports = db;
