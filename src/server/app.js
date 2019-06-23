import Koa from 'koa'

import router from './router/index'
import swig from './middlewares/swig-handler'
import errorHandler from './middlewares/error-handler'

import config from './config/app.js'

/**
 * 添加koa的使用中间件方法
 */
Koa.prototype.install = function(fn) {
  if (typeof fn === 'function') {
    fn(this)
  }
  return this
}

const app = new Koa()

app
  .install(errorHandler())
  .install(router)
  .install(swig({ base: config.views, ext: '.html' }))

app.listen(config.port, config.host, () => {
  console.log('Book System is running on', `${config.host}:${config.port}`)
})
