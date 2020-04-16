import Vue from 'vue'
import VueRouter from 'vue-router'

const JobShow = () => import('../views/job/JobShow.vue')
const JobDetail = () => import('../views/job/JobDetail.vue')
const JobAdd = () => import('../views/job/JobAdd.vue')
const PageThree = () => import('../views/PageThree.vue')
const PageFour = () => import('../views/PageFour.vue')
const Index = () => import('../views/Index.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '职位管理',
    component: Index,
    redirect: '/job/show',
    show: true,
    children:[
      {
        path: '/job/show',
        name: '所有职位',
        component: JobShow
      },
      {
        path: '/job/add',
        name: '新增职位',
        component: JobAdd
      }
    ]
  },
  {
    path: '/navigation2',
    name: '首页管理',
    component: Index,
    show: true,
    children: [
      {
        path: '/pageThree',
        name: '首页图片',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '首页文字',
        component: PageFour
      }
    ]
  },
  {
    path: '/navigation3',
    name: '投递处理',
    component: Index,
    show: true,
    children: [
      {
        path: '/pageThree',
        name: '未处理',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '已处理',
        component: PageFour
      }
    ]
  },
  {
    path: '/job/detail/:jid',
    name: '职位详情',
    component: JobDetail,
    show: false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
