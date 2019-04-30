const router = require("koa-router")();

router.get("/", async ctx => {
  ctx.body = {
    name: "tom"
  };
});

module.exports = router;
