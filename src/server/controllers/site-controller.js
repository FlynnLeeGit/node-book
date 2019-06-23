export default class SiteController {
  async actionDefault(ctx) {
    await ctx.render('index', { a: 1, b: 2 })
  }
}
