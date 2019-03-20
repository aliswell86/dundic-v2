const Router = require('koa-router');
const teranium = require('./teranium');
const api = new Router();

api.use('/teranium', teranium.routes());

module.exports = api;
