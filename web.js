require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const gzip = require('koa-gzip');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');
// const mongoose = require('mongoose');
const ssr = require('./ssr');
const api = require('./src/api');

const app = new Koa();
const router = new Router();

// mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
// mongoose.connect('mongodb://my_mean:dlskdud1@ds121321.mlab.com:21321/my_mean').then(() => {
//   console.log('connected to mongodb');
// }).catch((e) => {
//   console.error(e);
// });

app.use(gzip());

app.use(serve(path.resolve(__dirname, './views/build')));
app.use(serve(path.resolve(__dirname, './public')));
// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
app.use(ssr);

router.use('/api', api.routes()); // api 라우트 적용

app.listen(8001, () => {
  console.log('listening to port 8001');
});