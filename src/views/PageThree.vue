<!--  -->
<template>
<div class=''>
  <h1>效果预览</h1>
  <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in images" :key="index">
        <el-image :src="item"  style="width: 100%; height: 100%"></el-image>
      </el-carousel-item>
  </el-carousel>
  <h1>图片修改</h1>

  <el-upload
    action="https://sm.ms/api/v2/upload?inajax=1
"
    list-type="picture-card"
    :name="name"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
  </el-upload>

  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  images: [
    "http://upload.art.ifeng.com/2015/1207/1449482182818.gif",
    "http://upload.art.ifeng.com/2015/1207/1449482182246.gif",
    "http://upload.art.ifeng.com/2015/1207/1449482182551.gif"
  ],
  dialogImageUrl: '',
  dialogVisible: false,
  name: "smfile"
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
</style>
