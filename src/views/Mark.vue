<template>
    <el-tabs type="border-card">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 未读消息（）</span>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>【系统通知】 该系统将于今晚凌晨2点到5点进行升级维护</span>
                    <el-button style="float: right; padding: 3px 0" type="text">标记已读</el-button>
                </div>
                <div class="text item">
                    <span>今晚12点整发大红包，先到先得</span>
                    <el-button style="float: right; padding: 3px 0" type="text">标记已读</el-button>
                </div>
                <div style="margin-top: 20px;border-top:1px solid #EBEEF5;height: 30px;">
                    <el-button style="margin-top: 15px; padding: 3px 0" type="text">全标记已读</el-button>
                </div>
            </el-card>
        </el-tab-pane>
        <el-tab-pane label="已读消息（）">
            <div class="text item">
                <span>【系统通知】 该系统将于今晚凌晨2点到5点进行升级维护</span>
                <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
            </div>
            <div style="margin-top: 20px;border-top:1px solid #EBEEF5;height: 30px;">
                <el-button style="margin-top: 15px; padding: 3px 0" type="text">删除全部</el-button>
            </div>
        </el-tab-pane>
        <el-tab-pane label="回收站（）">
            <div class="text item">
                <span>【系统通知】 您的优惠券已经过期</span>
                <el-button style="float: right; padding: 3px 0" type="text">还原</el-button>
            </div>
            <div style="margin-top: 20px;border-top:1px solid #EBEEF5;height: 30px;">
                <el-button style="margin-top: 15px; padding: 3px 0" type="text">清空回收站</el-button>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "Mark"
    }
</script>

<style scoped>

</style>