<template>
    <div>
<!--        <form action="http://localhost:6789/message/uploadfiles" method="post" enctype="multipart/form-data">-->
<!--            <input type="file" name="file"/>-->
<!--            <input type="submit" value="ok"/>-->
<!--        </form>-->
        <el-upload
                class="upload-demo"
                drag
                action="/api/uploads"
                multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

    </div>
</template>

<script>

</script>

<style scoped>

</style>