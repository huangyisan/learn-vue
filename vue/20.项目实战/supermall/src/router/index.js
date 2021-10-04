import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')

// 1. 安装插件

Vue.use(VueRouter)

// 抽出routes
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component:Home,
  },
  {
    path: '/category',
    component:Category,
  },
  {
    path: '/cart',
    component:Cart,
  },
  {
    path: '/profile',
    component:Profile,
  },
  {
    // 使用动态路由的方式
    path: '/detail/:iid',
    component:Detail,
  },
]

// 2. 创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
