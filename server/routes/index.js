const router = require('koa-router')()

router.get('/', async ctx=> {
  ctx.body = {
    name: 'tom'
  }
})

router.get('/login', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
