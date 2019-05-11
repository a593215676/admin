<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <el-button type="danger" size="medium" @click="See">查看</el-button>
        <el-button type="primary" size="medium" @click="releasel">发布</el-button>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="文章名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="文章摘要" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <!---->
          <el-row :gutter="0">
            <el-col :span="4"><div class="grid-content ">
              <el-form-item label="作者" prop="name2">
                <el-input v-model="ruleForm.name2"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="5"><div class="grid-content ">
              <el-form-item label="类目" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择类目">
                  <el-option label="js" value="js"></el-option>
                  <el-option label="vue" value="vue"></el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
            <el-col :span="5"><div class="grid-content ">
              <el-form-item label="来源" prop="region">
                <el-select v-model="ruleForm.region1" placeholder="请选择来源">
                  <el-option label="原创" value="原创"></el-option>
                  <el-option label="伪原创" value="伪原创"></el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
            <el-col :span="5"><div class="grid-content ">
              <el-form-item label="重要性" prop="region">
                <el-select v-model="ruleForm.region2" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                  <el-option label="3" value="3"></el-option>
                  <el-option label="4" value="4"></el-option>
                  <el-option label="5" value="5"></el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
            <el-col :span="5"><div class="grid-content ">
              <el-form-item label="发布时间" required>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-date-picker type="datetime" placeholder="选择时间" v-model="ruleForm.date2" style="width: 170px;"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-form-item>

          </el-form-item>
        </el-form>
      </div></el-col>
    </el-row>
    <div>
      <mavon-editor v-model="ruleForm.value" />
    </div>
    <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
  </div>
  
</template>

<script>
  export default {
    name: "Editor",
    components: {},
    props: {},
    data() {
      return {
        ruleForm: {
          value:'',//内容
          name: '',//标题
          name1: '',//摘要
          name2: '',//作者
          region: '',//类目
          region1: '',//来源
          region2: '',//重要性
          date2: '',//发布时间
          delivery: false,

        },
        rules: {
          name: [
            { required: true, message: '请输入文章名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name1: [
            { required: true, message: '请输入再要内容', trigger: 'blur' },
          ],
          name2: [
            { required: true, message: '请输入作者', trigger: 'blur' },
          ],
          region: [
            { required: true, message: '请选择类目', trigger: 'change' }
          ],
          region1: [
            { required: true, message: '请选择来源', trigger: 'change' }
          ],
          region2: [
            { required: true, message: '请选择重要性', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
        },

        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }


      }
    },
    methods: {
      submitForm(formName) {//点击发布
        // console.log(this.$refs.ruleForm);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.req("api/work/release",{
              title:this.ruleForm.name,
              abstract:this.ruleForm.name1,
              author:this.ruleForm.name2,
              Category: this.ruleForm.region,
              source: this.ruleForm.region1,
              Importance: this.ruleForm.region2,
              date:this.ruleForm.date2
            }).then(response => {
              // this.$store.path = '/login'
              console.log(response);
              if (response.code === 200) {
                this.$store.state.article.push(this.ruleForm);
                this.$message({
                  message: '恭喜你发布成功',
                  type: 'success'
                });
                this.$router.push('./Articles')
                console.log(this.ruleForm)
              } else{
                this.$message({
                  message: "发布失败"
                });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });


      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      See(){//点击跳转查看页面
        this.$router.push('./Articles')
      },
      releasel(){//点击跳转发布页面
        this.$router.push('./editor')
      }
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg{

  }
  .bg-purple-dark {
    text-align: right;
    padding: 5px 20px;
    background: #58A587;
  }
  .bg-purple {
    background: #d3dce6;
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
</style>