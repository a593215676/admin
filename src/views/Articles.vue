<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <el-button type="danger" size="medium" @click="See">查看</el-button>
        <el-button type="primary" size="medium" @click="releasel">发布</el-button>
      </div></el-col>
    </el-row>
    <!---->
    <el-table
            :data="tableData"
            border
            style="width: 100%">
      <el-table-column
              prop="name"
              label="标题"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name2"
              label="作者"
              width="180">
      </el-table-column>
      <el-table-column
              prop="region"
              label="类目"
              width="180">
      </el-table-column>
      <el-table-column
              prop="region1"
              label="来源"
              width="180">
      </el-table-column>
      <el-table-column prop="region2" label="重要性" width="180" >

        <template slot-scope="scope">
          <el-rate v-model="scope.row.region2" disabled show-text></el-rate>
        </template>
      </el-table-column>
      <el-table-column
              prop="date2"
              label="发布时间"
              width="180">
      </el-table-column>
    </el-table>


<!--    <table>-->
<!--      <tr v-for="(item,index) in tableData">-->
<!--        <td>{{item.name}}</td>-->
<!--        <td>{{item.name2}}</td>-->
<!--        <td>{{item.region}}</td>-->
<!--        <td>{{item.region1}}</td>-->
<!--        <td>-->
<!--          <el-rate :value="item.region2" disabled show-text></el-rate>-->
<!--        </td>-->
<!--        <td>{{item.date2}}</td>-->
<!--      </tr>-->
<!--    </table>-->
  </div>
  
</template>

<script>
  import moment from 'dayjs'
  export default {
    name: "Article",
    components: {},
    props: {},
    data() {
      return {
        // value:1,
        tableData:[]
      }
    },
    methods: {
      See(){//点击跳转查看页面
        this.$router.push('./Article')
      },
      releasel(){//点击跳转发布页面
        this.$router.push('./editor')
      }
    },
    mounted() {
      // this.$set(this.tableData,this.$store.state.article)
      // Vue.set(this.tableData,this.$store.state.article)
      // this.tableData.push(this.$store.state.article)
      this.tableData=this.$store.state.article
      this.tableData.map(item => {
        item.region2 = parseInt(item.region2)
      })
      console.log(this.tableData);
      this.tableData.map(item => {
        item.date2 = moment(item.date2).format('YYYY-MM-DD hh:mm:ss')
      })
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .bg-purple-dark {
    text-align: right;
    padding: 5px 20px;
    background: #58A587;
  }
</style>