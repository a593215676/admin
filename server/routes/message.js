const router = require("koa-router")();

const newGoods = require('../newGoods/newGoods')
const contents = require('./contents')

router.prefix("/message");

router.get("/", async ctx => {
    ctx.body = {
        name: "tom"
    };
});


router.get('/newGoods', async ctx => {
    ctx.body = {
        code: 0,
        data: newGoods
    }
})
router.get('/contents', async ctx => {
    ctx.body = {
        code: 0,
        data: contents
    }
})

module.exports = router;