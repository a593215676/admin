<template>
    <el-row :gutter="20" style=" margin: 20px 0 0 -10px">
        <el-col :span="24"><div class="grid-content bg-purple">
            <el-card class="box-card">
                <div class="text item">
                    <p>CNode：Node.js专业中文社区</p>
                    <span style="font-size: 13px;=">您可以 <a>登录</a> 或 <a>注册</a>  也可以</span>
                    <p></p>
                  <router-link to="./login" tag="a"> <el-button>通过 GitHub 登录</el-button></router-link>
                </div>
            </el-card>
            <br>

            <el-row>
                <el-col>
                    <el-card>
                        <img src="../image/log2.png" class="image">
                        <br>
                        <img src="../image/log3.png" class="image">
                        <br>
                        <img src="../image/log4.png" class="image">
                        <br>
                        <img src="../image/log5.png" class="image">
                    </el-card>
                </el-col>
            </el-row>

            <br>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="color: #444;font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无人回复的话题</span>
                </div>
                <div class="text">
                    <a style="font-size: 14px;">
                        开发环境中有什么方式可以连内网服务...
                        <p></p>
                        基于angular框架开源了一个窗口化的页
                        <p></p>
                        puppeteer 滚动控制研究
                        <p></p>
                        评论回复功能的实现
                        <p></p>
                        morgan日志库可以把路由信息打印和这</a>
                </div>
            </el-card>

            <br>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="color: #444;font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;积分榜   TOP 100 >></span>
                </div>
                <div class="text">
                    <a style="font-size: 13px;">21390 i5ting<p></p>15435 alsotang<p></p>9350 leapon<p></p>8780 jiyinyiyong<p></p>8215 atian25
                        <p></p>7185 yakczh<p></p>6740 im-here<p></p>6075 DevinXian<p></p>5750 chapgaga<p></p>5335 magicdawn
                    </a>
                </div>
            </el-card>

            <br>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="color: #444;font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;友情社区</span>
                </div>
                <div>
                    <img src="../image/img1.png" class="images">
                    <br>
                    <img src="../image/img2.png" class="images">
                    <br>
                    <img src="../image/img3.png" class="images">
                    <br>
                    <img src="../image/img4.png" class="images">
                </div>
            </el-card>

            <br>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="color: #444;font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户端二维码</span>
                </div>
               <div>
                   <img src="../image/ha.png" class="image">
                   <a style="font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户端源码地址</a>
               </div>
            </el-card>

        </div></el-col>
    </el-row>






</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>
    p{
        font-size: 14px;
        word-break: break-word;
        margin: 0 0 10px;
    }

    a{
        color: #778087;
    }
    button{
        background-color:#5bc0de;
        color: white;
    }

    button:hover{
        background-color: #369DBB;
        color: white;
    }

    .box-card {
        width: 300px;
    }

    .image {
        width: 100%;
        display: block;
    }
    .el-row{
        width:300px;
    }
    .clearfix:before, .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix{
        width:300px;
        height:40px;
        margin:-20px 0 -20px -20px;
        background:#F6F6F6;
        line-height:40px;
    }
    .images{
        width: 150px;
    }


</style>