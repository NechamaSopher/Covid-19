const compose = require('koa-compose');

const cors = require('koa2-cors');
const koaBody = require('koa-bodyparser');
const response = require('./response');

module.exports = compose([cors({ credentials: true }), koaBody({ jsonLimit: '100mb' }), response]);
