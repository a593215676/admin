<template>
    <div>
        <div style="margin-bottom: 25px">
            <input type="text" placeholder="请输入您要搜索的商品名称" class="serach" v-model="serach" @input="ser(serach)">
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
                              <td style="width: 30%;text-align: center">{{item.NAME}}</td>
                              <td style="width: 17%;text-align: center">{{item.GOODS_SERIAL_NUMBER}}</td>
                              <td style="width: 18%;text-align: center">{{item.ORI_PRICE}}</td>
                              <td style="width: 18%;text-align: center">{{item.PRESENT_PRICE}}</td>
                              <td style="width: 17%;text-align: center;">
                                  <el-button type="text" @click="revise(item,index)">修改</el-button>
                                  <el-button type="text" @click="del(item)">删除</el-button>
                              </td>
                          </tr>
                      </tbody>
                    </table>
                    <el-dialog title="提示" :visible.sync="outerVisible" width="30%">
                                        <span>
                                            <p style="margin-bottom: 15px">名称：<input type='text' v-model='NAME' style='height: 30px;width: 250px'></p>
                                            <p style="margin-bottom: 15px">原价：<input type='text' v-model='ORI_PRICE' style='height: 30px;width: 250px'></p>
                                            <p style="margin-bottom: 15px">现价：<input type='text' v-model='PRESENT_PRICE' style='height: 30px;width: 250px'></p>
                                        </span>
                        <span slot="footer" class="dialog-footer">
                                            <el-button @click="outerVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="unped">确 定</el-button>
                                         </span>
                    </el-dialog>
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
                serach:'',
                currentPage: 1,
                con:10,
                ye:1,
                goods:[],
                sergoods:[],
                oldgoods:[],
                flag:0,
                outerVisible:false,
                NAME:'',
                num:0,
                PRESENT_PRICE:'',
                ORI_PRICE:'',
                newgoods:[]
            }
        },
        mounted(){
            this.$store.dispatch("getCity");
        },
        methods: {
            revise(row,index) {
                this.flag = 1
                this.outerVisible = true
                this.NAME = row.NAME
                this.num = index
                this.ORI_PRICE = row.ORI_PRICE
                this.PRESENT_PRICE = row.PRESENT_PRICE
                this.newgoods = row
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
            unped(){
                this.newgoods.NAME =  this.NAME
                this.newgoods.ORI_PRICE =  this.ORI_PRICE
                this.newgoods.PRESENT_PRICE =  this.PRESENT_PRICE
                this.goods[this.num] = this.newgoods
                this.outerVisible = false
            },
            handleSizeChange(val) {
                this.con=val
            },
            handleCurrentChange(val) {
                this.ye=val
            },
            ser(msg){
                if(msg !==''){
                    this.flag = 1
                    this.goods = this.goods.filter((item,index) =>{
                        if( this.goods[index].NAME.indexOf(msg) !== -1){
                            return this.sergoods.push(this.goods[index])
                        }
                    })
                }else {
                    this.goods = this.oldgoods
                }

            }
        },
        computed: {
            citys() {
                this.goods = this.$store.state.citys
                this.oldgoods = this.$store.state.citys
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
    .serach{
        height: 30px;
        width: 300px;
        padding-left: 10px;
        border-radius: 5px;
        outline: none;
    }
</style>