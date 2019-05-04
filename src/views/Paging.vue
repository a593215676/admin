<template>
    <div>
        <div style="margin-bottom: 25px">
            <input type="text" placeholder="请输入您要搜索的商品名称" style="height: 30px;width: 300px;padding-left: 10px;border-radius: 5px;outline: none">
        </div>
        <el-container>
            <el-card class="box-card">
                <div>
                    <table style="width: 100%">
                        <tr style="width: 100%;height: 50px;line-height: 50px;border-bottom: 1px solid darkgrey">
                            <td style="width: 20%;text-align: center">名称</td>
                            <td style="width: 20%;text-align: center">商品编号</td>
                            <td style="width: 20%;text-align: center">原价</td>
                            <td style="width: 20%;text-align: center">现价</td>
                            <td style="width: 20%;text-align: center">操作</td>
                        </tr>
                      <tbody>
                          <tr  v-for="(item,index) in flag === 0 ? citys.slice((this.ye-1)*this.con,this.con*this.ye) : goods.slice((this.ye-1)*this.con,this.con*this.ye)" :class="index%2 === 0 ? 'row1' : 'row2'">
                              <td style="width: 25%;text-align: center">{{item.NAME}}</td>
                              <td style="width: 17%;text-align: center">{{item.GOODS_SERIAL_NUMBER}}</td>
                              <td style="width: 18%;text-align: center">{{item.ORI_PRICE}}</td>
                              <td style="width: 20%;text-align: center">{{item.PRESENT_PRICE}}</td>
                              <td style="width: 20%;text-align: center;">
                                  <el-button type="text" @click="outerVisible = true">修改</el-button>
                                  <el-button type="text" @click="del(item)">删除</el-button>
                                  <el-dialog title="提示" :visible.sync="outerVisible" width="30%">
                                        <span>
                                            <p style="margin-bottom: 15px">名称：<input type='text' v-model='item.NAME' style='height: 30px;width: 250px'></p>
                                            <p style="margin-bottom: 15px">原价：<input type='text' v-model='item.ORI_PRICE' style='height: 30px;width: 250px'></p>
                                            <p style="margin-bottom: 15px">现价：<input type='text' v-model='item.PRESENT_PRICE' style='height: 30px;width: 250px'></p>
                                        </span>
                                                      <span slot="footer" class="dialog-footer">
                                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                                         </span>
                                  </el-dialog>
                              </td>
                          </tr>
                      </tbody>
                    </table>

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
                            :total="goods.length">
                    </el-pagination>
                </div>
            </el-card>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Paging",
        data() {
            return {
                currentPage: 1,
                con:10,
                ye:1,
                goods:[],
                flag:0,
                NAME:'',
                outerVisible:false,
                PRESENT_PRICE:'',
                ORI_PRICE:'',
            }
        },
        mounted(){
            this.$store.dispatch("getCity");
        },
        methods: {
            revise(row) {
                this.flag = 1
                this.NAME = row.NAME
                this.ORI_PRICE = row.ORI_PRICE
                this.PRESENT_PRICE = row.PRESENT_PRICE
                this.$confirm(
                    "<div style='margin-bottom: 10px'>名称：<input type='text' v-model='NAME' style='height: 30px;width: 250px'></div>" +
                    "<div style='margin-bottom: 10px'>原价：<input type='text' v-model='ORI_PRICE' style='height: 30px;width: 250px'></div>" +
                    "<div style='margin-bottom: 10px'>现价：<input type='text' v-model='PRESENT_PRICE' style='height: 30px;width: 250px'></div>",
                    '商品信息',
                    {
                    dangerouslyUseHTMLString: true
                    }, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消修改'
                        })
                    })
            },
            del(row){
                this.flag = 1
                this.$confirm('是否删除该商品信息?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.goods = this.goods.filter((item)=>{
                        if(item !== row){
                            return true
                        }
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });


            },
            handleSizeChange(val) {
                this.con=val
            },
            handleCurrentChange(val) {
                this.ye=val
            },
        },
        computed: {
            citys() {
                this.goods = this.$store.state.citys
                return  this.$store.state.citys
            },
        },

    }
</script>
<style scoped>
    .box-card {
        width: 100%;
    }
    tbody>tr:hover{
        background-color:slategray ;
    }
    .row1{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: whitesmoke;
        color: black;
    }
    .row2{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: darkgray;
        color: black;
    }
</style>