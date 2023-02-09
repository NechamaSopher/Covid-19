require('../config/.env');
const { knexSnakeCaseMappers } = require('objection');

const covidDB = process.env.COVID_DB;

const knexConfig = {
  client: 'postgresql',
  connection: covidDB,
  pool: {
    min: 2,
    max: 10
  },
  ...knexSnakeCaseMappers(),
  migrations: {
    directory: '../db/migrations'
  }
};

module.exports = knexConfig;
