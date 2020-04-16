<!--  -->
<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
<div class='index'>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['0','1']" >
        <!-- <el-submenu v-for="(item,index) in $router.options.routes"  v-bind:key="index" :index="index+''" v-if="item.show">
          <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
          <el-menu-item v-for="(item2,index2) in item.children" v-bind:key="index2" :index="item2.path"
                        :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
        </el-submenu> -->
                <el-submenu v-for="(item,index) in showItems"  v-bind:key="index" :index="index+''">
          <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
          <el-menu-item v-for="(item2,index2) in item.children" v-bind:key="index2" :index="item2.path"
                        :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <!-- <h1>Azure Studio 后台管理系统</h1> -->
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Azure</span>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    </el-container>

  </el-container>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
  
  //把不需要渲染的页面过滤掉
  showItems: function() {
    return this.$router.options.routes.filter(function (item) {
      return item.show?item:''
    })
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
