const router = require("koa-router")();
const User = require("../models/User");
const md5 = require("md5");
const svgCaptcha = require("svg-captcha");

router.prefix("/users");


router.get('/code',async (ctx) => {
  let captcha = svgCaptcha.create({    //这种生成的是随机数验证码
    width:100,
    height:40,
  });
  let img = captcha.data // 验证码
  ctx.session.code = captcha.text.toLowerCase()
  ctx.type = 'html'
  ctx.body = `${img}<br>`
});

router.post("/register", async ctx => {
  let { username, password, code } = ctx.request.body;
  password = md5(password);
  let user = await User.find({
    username,
    password
  });
  if (code.toLowerCase() === ctx.session.code) {
    if (user.length > 0) {
      ctx.body = {
        code: 1,
        message: "用户已存"
        // cd:code
      };
    } else {
      // ctx.request.body.password = md5(ctx.request.body.password)
      let newUser = new User({
        username,
        password
      });
      await newUser
          .save()
          .then(() => {
            ctx.body = {
              code: 200,
              message: "注册成功"
            };
          })
          .catch(error => {
            ctx.body = {
              code: 500,
              message: error
            };
          });
    }
  } else {
    ctx.body = {
      code: 500,
      message: "验证码失败"
    };
  }
});


router.post("/login", async ctx => {
  let { username, password } = ctx.request.body;
  password = md5(password);
  let user = await User.find({
    username,
    password
  });

  if (user.length > 0) {
    ctx.body = {
      code: 200,
      data: user,
      message: "登录成功"
    };
  } else {
    ctx.body = {
      code: 500,
      data: null,
      message: "用户不存在"
    };
  }
});

module.exports = router;
