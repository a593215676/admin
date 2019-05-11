<template>
  <div class="login">
    <div class="locss">
      <h2>在此登录</h2>
      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">提交</el-button>
          <p>
              如果您还没有注册请点击<router-link to="/"
          ><button>GO注册</button></router-link
          >
          </p>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.locss {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
    import moment from 'moment'
export default {
    name: "login",
  data() {
    var checkusernames = (rule, value, callback) => {
      if (value.trim() === "") {
        return callback(new Error("账号不能为空"));
      }
    };
    var validatepassword = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      form: {
        username: "",
        password: "",
        date:""
        // names:''
      },
      rules: {
        username: [{ validator: checkusernames, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$axios
        .req("api/users/login", {
          username: this.form.username,
          password: this.form.password
        })
        .then(response => {
          console.log(response);
          if (response.code === 200) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            // console.log(this.form.username);

            let storage = window.localStorage;
            storage.setItem("name", this.form.username); //存入localStorage
            this.$store.state.name = this.form.username; //存入vuex

            //得到时间
            this.date = response.data.date
            //在main.js 输入好后  命令行输入cnpm i -S dayjs  就可以在这里使用了
            this.date = moment(this.date).format('YYYY年MM月DD日 HH:mm:ss')
            // console.log(this.date)
           localStorage.setItem("date",this.date); //存入localStorage
            this.$store.state.date = this.date;//存入vuex
            // if(this.date.HH:mm:ss)
            //跳转页面到Homepage
            this.$router.push("/about");
          } else if (response.code === 500) {
            this.$message({
              message: "用户不存在"
            });
          }

        });

    }
  }
};
</script>
