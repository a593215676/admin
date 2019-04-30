const router = require("koa-router")();
const User = require("../models/User");
const md5 = require("md5");

let ObjectID = require("mongodb").ObjectID;

router.prefix("/users");

router.get("/", ctx => {
  ctx.body = {
    name: ""
  };
});

router.get("/allUsers", async ctx => {
  let users = await User.find();
  ctx.body = {
    code: 200,
    deta: users,
    message: "success"
  };
});

//注册
router.get("/register", async ctx => {
  let { username, password } = ctx.request.body;
  password = md5(password);
  let user = await User.find({
    username,
    password
  });
  if (user.length > 0) {
    ctx.body = {
      code: 1,
      message: "用户已存在"
    };
  } else {
    ctx.request.body.password = md5(ctx.request.body.password);
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
});

//登录

router.post("/login", async ctx => {
  let { username, password } = ctx.request.body;
  password = md5(password);
  let user = await User.find({
    username,
    password
  });

  if (user.length > 0) {
    // ctx.session.user = user[0];
    ctx.body = {
      code: 200,
      data: user,
      maessage: "登陆成功"
    };
  } else {
    ctx.body = {
      code: 500,
      data: null,
      message: "用户不存在"
    };
  }
});

//删除

router.post("/deleteUser", async ctx => {
  await User.remove({
    _id: ObjectID(ctx.request.body._id)
  })
    .then(article => {
      ctx.body = {
        code: 0,
        data: article
      };
    })
    .catch(error => {
      ctx.body = {
        code: 1,
        message: error
      };
    });
});

//

router.post("/update", async ctx => {
  console.log(ctx.request.body);
  const id = ctx.request.body.id();
  await User.findByIdAndUpdate(id, {
    username: ctx.request.body.username
  })
    .then(res => {
      ctx.body = {
        data: res,
        success: true
      };
    })
    .catch(err => {
      ctx.body = {
        message: err
      };
    });
});
module.exports = router;
