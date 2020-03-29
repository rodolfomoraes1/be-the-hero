const knex = require("knex");
const configuration = require("../../knexfile");

const dbEnviroment =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(dbEnviroment);

module.exports = connection;
