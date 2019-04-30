<template>
  <el-container>
    <el-card class="box-card">
      <div class="clearfix">
        <span v-for="(item,index) in link">{{item.title}}</span>
      </div>
      <div v-for="(item,index) in citys" style="height: 50px;line-height: 50px;display: flex;position: relative;justify-content: space-between" class="hover_">
        <div style="display: flex;">
          <div style="padding:8px;width:40px;"><img :src="item.author.avatar_url" height="30px"></div>
          <div style="width: 60px">
            <span style="color: #9e78c0;font-size: 13px;">{{item.reply_count}}/</span>
            <span style="color: #b4b4b4;font-size: 13px;">{{item.visit_count}}</span>
          </div>
          <div ><span :class="item.top ? 'top':'tops'">{{item.top ? '置顶':item.tab==='ask' ? '问答':'分享'}}</span></div>
          <div style="font-size: 16px" class="font_hover"><router-link to="./Home.vue">&nbsp;{{item.title}}</router-link></div>
        </div>
        <div class="times">
          {{(item.times /60 /60 /1000)<1 ? (item.times /60/1000).toFixed(0)+'分钟前':
          (item.times /60 /60 /1000)>24 ? (item.times /60 /60 /1000/24).toFixed(0)+'天前':
          (item.times /60 /60 /1000).toFixed(0)+'小时前'}}
        </div>
        <div class="line"></div>
      </div>
      <br>
      <div class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40">
        </el-pagination>
      </div>

    </el-card>
  </el-container>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        link:[
          {id:1, title:'全部'},
          {id:2, title:'精华'},
          {id:3, title:'分享'},
          {id:4, title:'问答'},
          {id:5, title:'招聘'},
          {id:6, title:'客户端测试'},
        ],
        currentPage: 1,
        con:10,
        ye:1
      }
    },
    mounted(){
      this.$store.dispatch("getCity");


    },
    methods: {
      handleSizeChange(val) {
        this.con=val
      },
      handleCurrentChange(val) {
        this.ye=val
      },
    },
    computed: {
      citys() {
        return this.$store.state.citys.slice((this.ye-1)*this.con,this.con*this.ye);
      },

    }
  }
</script>
<style scoped>
  .box-card {
    width: 100%;
  }
  .clearfix>span{
    margin: 0 5px;
    color: #80bd01;
    font-size: 14px;
  }
  .clearfix>span:hover{
    color: #072b33;
  }
  .line{
    width: 120%;
    height: 2px;
    border-bottom: 1px solid #ccc;
    position: absolute;
    left: -10%;
    top:50px
  }
  .tops{
    width: 40px;
    text-align: center;
    color: #999;
    font-size: 12px;
    background-color: #e5e5e5;
    border-radius: 2px;
  }
  .top{
    width: 40px;
    text-align: center;
    color: white;
    font-size: 12px;
    background-color: #80bd01;
    border-radius: 2px;
  }
  .font_hover>a{
    color: black;
    text-decoration: none;
  }
  .font_hover>a:hover{
    color: #1b6d85;

    border-bottom: 1px solid black;
  }
  .times{
    color:#778087;
    font-size: 11px;

  }
</style>