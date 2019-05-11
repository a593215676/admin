<template>
    <div>
        <el-table
                :data="tableData.slice((ad-1)*fen,fen*ad)"
                style="width: 100%">
            <el-table-column
                    prop="NAME"
                    label="商品名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="CREATE_TIME"
                    label="商品编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="ORI_PRICE"
                    label="原价">
            </el-table-column>
            <el-table-column
                    prop="PRESENT_PRICE"
                    label="现价">
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total=" tableData.length">
            </el-pagination>
        </div>
        <el-button type="primary">
            <download-excel
                    class   = "btn btn-default"
                    :data   = "tableData"
                    :fields = "json_fields"
                    name    = "filename.xls">
                导出xls
            </download-excel>
        </el-button>
        <el-button type="danger">
            <download-excel
                    class   = "btn btn-default"
                    :data   = "tableData"
                    :fields = "json_fields"
                    type    = "csv"
                    name    = "filename.xls">
                导出csv
            </download-excel>
        </el-button>

    </div>
</template>

<script>
    export default {
        name: "Export",
        components: {
        },
        props: {},
        data() {
            return {
                fen:10,
                currentPage4: 1,
                ad:1,
                tableData:[],
                json_fields : {
                    "商品名称"      : "NAME",
                    "商品编号"      : "CREATE_TIME",
                    "原价"   : "ORI_PRICE",
                    "现价" : "PRESENT_PRICE"
                },
                json_meta: [
                    [{
                        "key": "charset",
                        "value": "utf-8"
                    }]
                ],
            }
        },
        methods: {
            deletel(index){
                this.tableData.splice(index + (this.ad-1) * this.fen,1)
            },
            handleSizeChange(val) {
                this.fen=val;
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.ad=val;

                console.log(`当前页: ${val}`);
            },
        },
        mounted() {
            this.$store.dispatch("getCity");
        },
        created() {

        },
        filters: {},
        computed: {
            citys() {
                this.tableData = this.$store.state.citys
                return  this.$store.state.citys
            },
        },
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">

</style>