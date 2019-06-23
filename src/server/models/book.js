import Http from '../utils/http'

export class Book {
  /**
   * 获取所有书籍
   */
  async getAll() {
    const books = await new Http({
      url: '/todos'
    })

    return books
  }
}
