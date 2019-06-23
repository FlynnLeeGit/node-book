import router from 'koa-simple-router'
import SiteController from '../controllers/site-controller'
import BookController from '../controllers/book-controller'

const siteController = new SiteController()
const bookController = new BookController()

export default app => {
  const routeHandler = router(_ => {
    _.get('/', siteController.actionDefault)
    _.get('/books/list', bookController.actionList)
  })

  app.use(routeHandler)
}
