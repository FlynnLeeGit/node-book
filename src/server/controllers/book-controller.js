import { Book } from '../models/book'

export default class BookController {
  async actionList(ctx) {
    const books = await new Book().getAll()
    console.log(books)
    await ctx.render('books/list', { books })
  }
}
