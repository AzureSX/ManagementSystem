<!--  -->
<template>
<div class=''>
  <el-container style="height: 100%; border: 1px solid #eee">

    <el-main>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="职位" prop="job">
          <el-input v-model="form.job" maxlength="10"
            show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="category">
          <!-- <el-input v-model="form.category"></el-input> -->
          <el-select v-model="form.category" placeholder="请选择分类">
            <el-option v-for="(item,index) in jobCategory"  v-bind:key="index" :label="item.position" :value="item.position"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作地点" prop="location">
          <el-input v-model="form.location"></el-input>
        </el-form-item>
        <el-form-item label="薪资" prop="salary">
          <el-input v-model="form.salary"></el-input>
        </el-form-item>
        <el-form-item label="学历要求" prop="education">
          <el-radio-group v-model="form.education">
            <el-radio-button v-for="(item,index) in degree" :key="index" :label="item"></el-radio-button>
           </el-radio-group>
        </el-form-item>
        <el-form-item label="工作经验" prop="experience">
          <el-input v-model="form.experience" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="工作内容" prop="jobContent">
          <el-input v-model="form.jobContent" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="工作要求" prop="jobRequirement">
          <el-input v-model="form.jobRequirement" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="发布者">
          <el-input v-model="form.recruiter" :disabled="true"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="success" @click="submitForm('form')">发布新职位</el-button>
          <el-button @click="onReturn">返回</el-button>
        </el-form-item>
      </el-form>
    </el-main>

  </el-container>

  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { findByJid, listCategory, saveOrUpdate} from '../../network/job'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  form: {
          job: '',
          category: '',
          location: '',
          salary: '',
          education: '',
          experience: '',
          jobContent: '',
          jobRequirement: '',
          recruiter: 'Azure',
          createTime: ''
        },
  jobCategory: [],
  degree: [
    "专科","本科","硕士","博士"
  ],
  rules: {
          job: [
            { required: true, trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          category: [
            { required: true, trigger: 'change' }
          ],
          location: [
            { required: true, message: '请选择位置', trigger: 'change' }
          ],
          salary: [
            { required: true, message: '请输入薪资', trigger: 'change' }
          ],
          education: [
            { required: true, trigger: 'change' }
          ],
          experience: [
            { required: true, message: '请输入工作经历', trigger: 'blur' }
          ],
          jobContent: [
            { required: true, message: '请填输入工作内容', trigger: 'blur' }
          ],
          jobRequirement: [
            { required: true, message: '请输入工作要求', trigger: 'blur' }
          ]
        }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

  //网络请求方法

  _listCategory() {
    listCategory().then(res => {
      this.jobCategory = res.data.jobCategory
    })
  },

  
  _saveOrUpdate(formData) {
    saveOrUpdate(formData).then(res => {
      if(res.message == 'success') {
        this.$message({
            type: 'success',
            message: '发布成功'
        })
        setTimeout(() => {
          this.$router.go(-1)}
          ,2000);
      }
    })
  },

  // 提交按钮
  submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('确定发布?','提示',{
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                 this._saveOrUpdate(this.form)
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消'
              })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

  onReturn() {
    this.$router.go(-1)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

  this._listCategory()
  
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
