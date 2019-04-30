<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside width="400px">
        <Aside></Aside>
      </el-aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import Header from "./components/H-header"
  import Aside from "./views/Aside"
  export default {
    components: {
      Header,
      Aside
    },
  }
</script>

<style>
  @import "./style/common.scss";
  .el-header{
    background-color: #444;
    color: #ccc;
    line-height: 60px;
    font-size: 13px;
    padding: 10px 15px;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #E9EEF3;
  }

  .el-main {
    background-color: #E9EEF3;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 40px;
  }

</style>
