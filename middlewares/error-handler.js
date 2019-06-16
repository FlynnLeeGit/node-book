const Koa = require('koa')
/**
 * @param {Koa} app Koa instance
 */
const errorHandler = (app,logger) => {
    app.use((ctx,next)=>{
        try{
            await next()
        }catch(e){
            ctx.status = e.status || 200
            ctx.body = '500了'
        }
    })
    app.use((ctx,next)=>{
        await next()
        if(ctx.status != 404) {
            return 
        }
        ctx.status = 200
        ctx.body = 'this is not found page'
    })


}
export default errorHandler
