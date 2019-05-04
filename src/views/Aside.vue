<template>
    <el-row style="width: 100px;">
        <el-card class="box-card">
            <span class="el-icon-location-outline" style="color: #00B7FF"></span><router-link to="/">首页</router-link>
        </el-card>
        <br>
        <el-card class="box-card">
            <span class="el-icon-menu"></span><router-link to="./Paging">分页表格</router-link>
        </el-card>
        <br>
        <el-card class="box-card">
            <span class="el-icon-document"></span> <router-link to="./Mark">标签页</router-link>
        </el-card>
        <br>
        <el-card class="box-card">
            <router-link to="./Upload"><img src="../image/picture.png" alt="" width="15px" height="15px">图片上传</router-link>
        </el-card>

        <br>
        <el-card class="box-card">
            <router-link to="./Upload"><img src="../image/folder-open-fill.png" alt="" width="15px" height="15px">发布文章</router-link>
        </el-card>
        <br>
        <el-card class="box-card">
            <router-link to="./Upload"><img src="../image/setting.png" alt="" width="15px" height="15px">导出excel</router-link>
        </el-card>
        <br>
        <el-card class="box-card">
            <router-link to="./Upload"><img src="../image/del.png" alt="" width="15px" height="15px">退出系统</router-link>
        </el-card>
    </el-row>
</template>

<script>
    export default {
        name: "aside"
    }
</script>

<style scoped>
    .box-card {
        width: 150px;
        height: 50px;
        font-size: 15px;
        border: none;
        background-color: darkorange;
        margin: 10px 0 0 20px;
    }
   a{
       text-decoration: none;
       color: white;
   }


</style>