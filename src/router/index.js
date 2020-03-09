import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcar = () => import('views/shopcar/Shopcar')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 挂载
Vue.use(VueRouter)

// 创建路由对象并导出
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.afterEach((to, from) => {
  if(to.path.indexOf('/detail') >= 0) {
    // 让底部消失
    
  }
})

export default router;