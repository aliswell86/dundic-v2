const Router = require('koa-router');
const teraniumCtrl = require('./teranium.ctrl');

const teranium = new Router();

teranium.get('/lowprice', teraniumCtrl.lowprice);

module.exports = teranium;
