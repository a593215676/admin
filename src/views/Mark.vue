<template>
    <el-tabs type="border-card">

        <el-tab-pane :label="`已读消息(`+Read_message.length+`)`">
            <div v-for="(item,index) in Read_message">
                <div style="display: flex; justify-content: space-between">
                   <div> {{Read_message[index]}}</div>
                   <div> <span>2019年5月4日</span> <button @click="Read(item,index)">标记为已读</button></div>
                </div>
            </div>
            <div> <button @click="all_Read">全部为已读</button></div>
        </el-tab-pane>
        <el-tab-pane :label="`未读消息(`+Unread_message.length+`)`">

            <div v-for="(item,index) in Unread_message">
                <div style="display: flex; justify-content: space-between">
                    <div> {{Unread_message[index]}}</div>
                    <div> <span>2019年5月3日</span> <button @click="Unread(item,index)">删除</button></div>
                </div>
            </div>
            <div> <button @click="all_Unread" >删除全部</button></div>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(`+Recycle_message.length+`)`">
            <div v-for="(item,index) in Recycle_message">
                <div style="display: flex; justify-content: space-between">
                    <div> {{Recycle_message[index]}}</div>
                    <div><span>2019年5月5日</span> <button  @click="Recycle(item,index)">还原</button></div>
                </div>
            </div>
            <div> <button  @click="all_Recycle">清空回收站</button></div>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        name: "Mark",
        components: {},
        props: {},
        data() {
            return {
                Read_message:[
                    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                    '今晚12点整发大红包，先到先得'
                ],
                Unread_message:[
                    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                ],
                Recycle_message:[
                    '【系统通知】你的优惠券已经过期',
                ],
            }
        },
        methods: {
            all_Read(){
                this.Unread_message.push(...this.Read_message)
                this.Read_message=[]
            },
            Read(item,index){
                this.Unread_message.push(this.Read_message[index])
                this.Read_message.splice(index,1)
            },
            all_Unread(){
                this.Recycle_message.push(...this.Unread_message)
                this.Unread_message=[]
            },
            Unread(item,index){
                this.Recycle_message.push(this.Unread_message[index])
                this.Unread_message.splice(index,1)
            },
            all_Recycle(){
                this.Recycle_message=[]
            },
            Recycle(item,index){
                this.Unread_message.push(this.Recycle_message[index])
                this.Recycle_message.splice(index,1)
            },
        },
        mounted() {

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

</style>