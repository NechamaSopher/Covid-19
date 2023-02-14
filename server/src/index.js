require('../config/.env');

const knexConfig = require('../config/knexfile');
const knex = require('knex')(knexConfig);
const { Model } = require('objection');
Model.knex(knex);

const Koa = require('koa');

const middleWares = require('./middleware');
const routes = require('./routes');

const app = new Koa();

app.use(middleWares);
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on port ${process.env.PORT || 3000}`);
});