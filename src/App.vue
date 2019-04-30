<template>
  <div id="app">
    <router-view v-if="$route.path === '/Login' || $route.path === '/Register'"></router-view >
    <el-container >
        <router-view></router-view>
    </el-container>
    <el-container >
    </el-container>

  </div>
</template>

<script>
  // import login from "./views/Login";
  // import register from "./views/Register";

  export  default {
    // components:{
    //   login,
    //   register
    // }
  }
</script>

<style lang="scss">
    @import "./style/common.css";
body {
    /*background:#00B7FF;*/
    background: #dae1ff;
    display: flex;
    justify-content:center;
}
    h3{
        width:100%;
        text-align:center;
    }
</style>
