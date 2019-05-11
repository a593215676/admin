<template>
<div class="login">
  <div class="locss">
      <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm sig"
      >
        <el-form-item prop="account">
          <el-input v-model.number="ruleForm.account" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="testing">
          <el-input
                  v-model="ruleForm.testing"
                  autocomplete="off"
                  placeholder="请输入验证码"
                  class="testing"
          ></el-input>
          <el-button class="testin" type="primary" @click="clk"
          >获取验证码</el-button
          >
          <el-col class="testin" v-if="judge"> </el-col>
          <el-col class="testin" v-else v-html="jik"> </el-col>
        </el-form-item>
        <el-form-item>
          <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                  class="el-input__inner"
          >注册</el-button
          >
        </el-form-item>
      </el-form>
   </div>
</div>

</template>

<script>
  export default {
    name: "",
    components: {},
    props: {},
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      let checkTesting = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("验证码不能为空"));
        } else {
          callback();
        }
      };
      let checkAccount = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("账号不能为空"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: "",
          checkPass: "",
          account: "",
          testing: ""
        },
        judge: true,
        jik: "",
        rules: {
          pass: [{ validator: validatePass, trigger: "blur" }],
          checkPass: [{ validator: validatePass2, trigger: "blur" }],
          account: [{ validator: checkAccount, trigger: "blur" }],
          testing: [{ validator: checkTesting, trigger: "blur" }]
        }
      };
    },
    methods: {
      clk() {
        //获取svg图片
        this.judge = false;
        this.$axios.req(`api/users/code`).then(response => {
          this.jik = response;
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // alert("submit!");
            this.$axios.req(`api/users/register`, {
              username: this.ruleForm.account,
              password: this.ruleForm.pass,
              code: this.ruleForm.testing
            })
                    .then(response => {
                      if (response.code === 1) {
                        alert("用户已存在");
                        this.$axios.req(`api/code`).then(response => {
                          this.jik = response;
                          console.log
                        });
                      } else if (response.code === 200) {
                        alert("注册成功请登录");
                        this.$router.push("/login");
                      } else if (response.code === 500) {
                        alert("验证码错误");
                        this.$axios.req(`api/code`).then(response => {
                          this.jik = response;
                        });
                      }
                    });
          } else {
            alert("注册失败");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {},
    created() {},
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  };
</script>

<style scoped>
  .sig { margin: auto; }
  .testin {
    width: 25% !important;
    height: 40px;
  }
  .testing {
    width: 50% !important;
    height: 40px;
  }
  .locss{
    width: 50%;
    margin:50px auto;
  }
</style>
