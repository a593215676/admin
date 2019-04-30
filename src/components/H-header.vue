<template>
  <el-col class="el-container">
    <el-col :span="18">
      <el-col :span="4" class="img">
        <img src="../image/logo.svg" height="29px">
      </el-col>
      <el-col :span="5">
        <el-input class="input_css" prefix-icon="el-icon-search"></el-input>
      </el-col>
    </el-col>
    <el-col :span="5">
      <el-col :span="4"  class="span_font">首页</el-col>
      <el-col :span="6"  class="span_font">新手入门</el-col>
      <el-col :span="4"  class="span_font">API</el-col>
      <el-col :span="4"  class="span_font">关于</el-col>
      <el-col :span="4"  class="span_font">注册</el-col>
      <el-col :span="2"  class="span_font">登录</el-col>
    </el-col>
  </el-col>
</template>

<script>
  export default {
    name: 'H-header',
    props: {

    }
  }
</script>


<style scoped lang="scss">

</style>
