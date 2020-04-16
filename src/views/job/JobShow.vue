<!--  -->
<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width: 1050px">
    <el-table-column
      fixed
      prop="job"
      label="职位"
      width="150">
    </el-table-column>
    <el-table-column
      prop="category"
      label="分类"
      width="120">
    </el-table-column>
    <el-table-column
      prop="location"
      label="工作地点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="salary"
      label="薪资"
      width="120">
    </el-table-column>
    <el-table-column
      prop="education"
      label="学历要求"
      width="140">
    </el-table-column>
    <el-table-column
      prop="experience"
      label="工作经验"
      width="120">
    </el-table-column>
    <el-table-column
      prop="recruiter"
      label="发布者"
      width="140">
    </el-table-column>
    <el-table-column
      fixed="right" 
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="primary" size="small">详细</el-button>
        <el-button @click="deleteClick(scope.row)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    @current-change="pageChange">
  </el-pagination>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { list, deleteByJid} from '../../network/job'



export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    currentPage: 1,
    total: 0,
    pageSize: 0,
    tableData: []
      }
    },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

  //详情按钮点击
  handleClick(row) {
      this.$router.push('/job/detail/'+row.id)
    },

  //删除按钮点击
  deleteClick(row) {
    this.$confirm('确定删除?','提示',{
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                this._deleteByJid(row.id)
            })
    
  },

  //翻页方法
  pageChange(currentPage) {
      this.currentPage = currentPage
      this._list(this.currentPage)

  },

  //网络请求方法
  _list(page) {
      list(page).then(res => {
          this.tableData = res.data.records
          this.total = res.data.total
          this.pageSize = res.data.size
      })
  },

  _deleteByJid(jid) {
    deleteByJid(jid).then(res => {
      if(res.message = 'success') {
        this.$message({
            type: 'success',
            message: '删除成功'
        })
        this._list(this.currentPage)
      } else {
          this.$message({
            type: 'error',
            message: '删除失败'
        })
      }
    })
  }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this._list(this.currentPage)
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
