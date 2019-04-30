const router = require("koa-router")();
const Article = require("../models/Article");

router.prefix("/article");

router.get("/", async ctx => {
  ctx.body = {
    name: "jack"
  };
});

router.get("/release", async ctx => {
  let newArticle = new Article(ctx.request.body);
  await newArticle
    .save() //save保存
    .then(() => {
      //then成功，
      ctx.body = {
        code: 200,
        message: "发布成功"
      };
    })
    .catch(error => {
      //catch错误
      ctx.body = {
        code: 500,
        message: error
      };
    });
});
module.exports = router;
