<template>
    <div>
        <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="6">
                <div class="grid-content bg-purple" >
                    <div style="margin-top: 15px"><img src="../image/team.png" alt="" style="width: 70px;height: 70px;color: #45C9C6"></div>
                    <div>
                        <p>New Visits</p>
                        <p> <countTo :startVal='startVal' :endVal='NewVisits' :duration='duration'></countTo></p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" >
                    <div style="margin-top: 15px"><img src="../image/messenger.png" alt="" style="width: 70px;height: 70px;color: #45A2F6"></div>
                    <div>
                        <p>Messages</p>
                        <p> <countTo :startVal='startVal' :endVal='Messages' :duration='duration'></countTo></p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" >
                    <div style="margin-top: 15px"><img src="../image/money.png" alt="" style="width: 70px;height: 70px;color: #FC5282"></div>
                    <div>
                        <p>Purchases</p>
                        <p> <countTo :startVal='startVal' :endVal='Purchases' :duration='duration'></countTo></p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" >
                    <div style="margin-top: 15px"><img src="../image/car.png" alt="" style="width: 70px;height: 70px;color: #F3BD86"></div>
                    <div>
                        <p>Shoppings</p>
                        <p> <countTo :startVal='startVal' :endVal='Shoppings' :duration='duration'></countTo></p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div style="margin-top: 30px;background-color: white">
            <VeLine :data="chartData" :settings="chartSettings"></VeLine>
        </div>
        <el-row :gutter="10" style="margin: 10px auto;box-sizing: border-box">
             <el-col :span="8" style="padding-right:10px;padding-left: 0">
                 <div style="background-color: white;">
                     <ve-radar :data="chartData1" :settings="chartSettings1"></ve-radar>
                 </div>
            </el-col>
             <el-col :span="8" style="padding: 0 5px">
                 <div style="background-color: white;">
                     <ve-pie :data="chartData2" :settings="chartSettings2" ></ve-pie>
                 </div>

             </el-col>
             <el-col :span="8" style="padding-left:10px;padding-right:0 ">
                 <div style="background-color: white;">
                     <ve-histogram :data="chartData3" :settings="chartSettings3"></ve-histogram>
                 </div>
             </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" style="padding-right: 15px">
                <div  style="background-color: white">
                    <table>
                        <thead>
                        <tr>
                            <td>Order_No</td>
                            <td>price</td>
                            <td>status</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in tableList">
                            <td>{{item.Order_No}}</td>
                            <td>￥{{item.price}}</td>
                            <td><span :class="item.status===1 ? 'span2': 'span1'">{{item.status===1 ? 'success':'pending'}}</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </el-col>
            <el-col :span="12">
                <el-row :gutter="10">
                    <el-col :span="13">
                        <div style="height: 409px;background-color: white;position: relative;">
                            <div style="display: flex;justify-content: space-between;">
<!--                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="changeall_">全选</el-checkbox>-->
                                <div><input type="checkbox" :indeterminate="isIndeterminate" v-model="checked" @change="changeall_" :disabled="TodoList.length ===0 ? true :false " >全选</div>
                                <div>Todo List</div>
                            </div>
                            <div style="margin: 12px 0;border-bottom: 1px solid #EBEFF5"></div>
                            <div>
                                <p v-for="(item,index) in TodoList"   style="height: 35px;line-height: 35px;cursor: pointer">
                                    <input type="checkbox"  v-model="item.checked" @change="change_(item,index)" >{{item.conts}}
                                </p>
                            </div>
                            <div style="width: 50px; height: 100%;position: absolute;right: 0;top:50px;" >
                                <p class="" v-for="(item,index) in TodoList" @click="del(item,index)" style="height: 35px;line-height: 35px;cursor: pointer"><span class="el-icon-close"></span></p>
                            </div>
                            <div style="margin: 12px 0;border-bottom: 1px solid #EBEFF5"></div>
                            <el-row>
                                <el-col :span="9" style="text-align: center;height: 40px;line-height: 40px">{{num}} items left</el-col>
                                <el-col :span="4" style="text-align: center;height: 40px;line-height: 40px"><span style="width: 100%;height: 100%;cursor: pointer"  @click="all_">All</span></el-col>
                                <el-col :span="5" style="text-align: center;height: 40px;line-height: 40px"><span style="width: 100%;height: 100%;cursor: pointer"  @click="active_">Active</span></el-col>
                                <el-col :span="6" style="text-align: center;height: 40px;line-height: 40px"><span style="width: 100%;height: 100%;cursor: pointer"  @click="completed_">Completed</span></el-col>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div style="height: 409px;background-color: white">
                            <div style="height: 50%"><img src="" alt=""></div>
                            <div>
                                <p>Vue</p>
                                <el-progress :percentage="70"></el-progress>
                                <p>Html</p>
                                <el-progress :percentage="100"  status="success"></el-progress>
                                <p>Css</p>
                                <el-progress :percentage="54" ></el-progress>
                                <p>JavaScript</p>
                                <el-progress :percentage="70" ></el-progress>
                            </div>
                        </div>

                    </el-col>
                </el-row>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    import VeRadar from 'v-charts/lib/radar';
    import VeLine from 'v-charts/lib/line'
    import VePie from 'v-charts/lib/pie'
    import VeHistogram from 'v-charts/lib/histogram'
    const contents = require('../../server/routes/contents')

    export default {
    name: "about",
    components: {
        countTo,
        VeLine,
        VeRadar,
        VePie,
        VeHistogram
    },
    data() {
        this.chartSettings = contents.chartSettings
        this.chartSettings1 = contents.chartSettings1
        this.chartSettings2 = contents.chartSettings2
        this.chartSettings3 = contents.chartSettings3
      return {
          // checkAll:false,
          checked:false,
          isIndeterminate: true,
          checkedList:[],
          newList:contents.TodoList,
          uncheckedList:contents.TodoList,
          num:contents.TodoList.length,
          duration: contents.duration,
          startVal: contents.startVal,
          NewVisits:contents.NewVisits,
          Messages: contents.Messages,
          Purchases: contents.Purchases,
          Shoppings:contents.Shoppings,
          chartData:contents.chartData,
          chartData1:contents.chartData1,
          chartData2:contents.chartData2,
          chartData3:contents.chartData,
          tableList:contents.tableList,
          TodoList:contents.TodoList
      }
    },
    mounted(){},
    methods: {
        changeall_(val) {
            if(this.checked){
                this.num = 0
                this.checkedList =this.TodoList
                this.uncheckedList =[]
            }else {
                this.num = this.TodoList.length
                this.uncheckedList =this.TodoList
                this.checkedList =[]
            }
            for ( let i in this.TodoList){
                this.TodoList[i].checked = this.checked
            }
        },
        change_(item,index) {
            if(item.checked){
                this.checkedList.push(this.TodoList[index])
                this.uncheckedList =this.uncheckedList.filter(item =>{
                    if(item !== this.TodoList[index]){
                        return true
                    }
                })
                this.num--
            }else {
                this.uncheckedList.push(this.TodoList[index])
                this.checkedList =this.checkedList.filter(item =>{
                    if(item !== this.TodoList[index]){
                        return true
                    }
                })
                this.num++
            }
            this.checked = this.num === 0
            this.newList =  this.TodoList

        },
        del(item,index){

            const dellist=this.TodoList[index]
            this.TodoList = this.TodoList.filter(item =>{
                if(item !== dellist){
                    return true
                }
            })
            this.newList = this.newList.filter(item =>{
                if(item !== dellist){
                    return true
                }
            })
            if(item.checked){
                this.checkedList = this.checkedList.filter(item =>{
                    if(item !== dellist){
                        return true
                    }
                })
            }else {
                this.uncheckedList = this.uncheckedList.filter(item =>{
                    if(item !== dellist){
                        return true
                    }
                })
                this.num=this.TodoList.length
            }
        },
        all_() {
            this.TodoList =  this.newList
            this.num=this.uncheckedList.length
        },
        active_(){
            this.TodoList = this.checkedList
        },
        completed_(){
            this.TodoList = this.uncheckedList
            this.num=this.TodoList.length
        }
    },
    computed: {
    }
  }
</script>

<style scoped>

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        height: 100px;
        display: flex;
        justify-content: space-around;
        background: white;
    }
    .bg-purple>div>p{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
    }
    .bg-purple>div>p:last-child{
        height: 20px;
        line-height: 20px;
        font-size: 16px;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    table{
        width: 100%;
    }
    td{
        text-align: center;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid darkslateblue;
    }
    tr:hover{
        background-color: #99a9bf;
    }
    td>.span1{
        display: inline-block;
        height: 30px;
        width: 75px;
        line-height: 30px;
        margin: 10px auto;
        border-radius: 5px;
        background-color: #FFF1F1;
        color: #F99AB1;
    }
    td>.span2{
        display: inline-block;
        height: 30px;
        width: 75px;
        line-height: 30px;
        margin: 10px auto;
        border-radius: 5px;
        background-color: #EFFAEB;
        color: #66C33A;
    }
    .Checkbox {
        position: absolute;
        visibility: hidden;
        top: 20%;
    }
    .Checkbox+label {
        position:absolute;
        width: 16px;
        height: 16px;
        top: 20%;
        border: 1px solid #A6A6A6;
        border-radius: 50%;
        background-color:#DEDEDE;
    }
    .Checkbox:checked+label:after {
        content: "";
        position: absolute;
        left: 2px;
        top:2px;
        width: 9px;
        height: 4px;
        border: 2px solid #424242;
        border-top-color: transparent;
        border-right-color: transparent;
        transform: rotate(-45deg);
    }
</style>