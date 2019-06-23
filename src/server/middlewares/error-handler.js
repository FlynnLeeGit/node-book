import log4js from 'log4js'

log4js.configure({
  appenders: { error: { type: 'file', filename: 'logs/error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } }
})

const logger = log4js.getLogger()

const errorHandler = () => {
  return app => {
    app.use(async (ctx, next) => {
      try {
        await next()
      } catch (e) {
        ctx.status = e.status || 200
        ctx.render('error', {
          error: e,
          ctx: { status: 500, message: 'Internal Server Error' }
        })
        logger.error(e)
      }
    })
    app.use(async (ctx, next) => {
      await next()
      if (ctx.status != 404) {
        return
      }
      ctx.status = 200
      await ctx.render('error', {
        error: e,
        ctx: { status: 404, message: 'Not Found' }
      })
    })
  }
}
export default errorHandler
