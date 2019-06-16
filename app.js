const Koa = require('koa')

const app = new Koa()

app.intall = function(fn) {
  fn(app)
}
