<template>
  <div id="app">
    <router-view v-if="$route.path ==='/login'||$route.path ==='/'"></router-view>
    <el-container v-else>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside style="width: 200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from "./views/H-header"
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

  .el-aside {

    text-align: center;
    background-color: #344054;
  }

  .el-main {
    background-color: #E9EEF3;
  }



</style>
