import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import Login from '../components/Login.vue'

Vue.use(VueRouter)

// 路由规则是由path来指定咱们路径 当用户访问/login的时候我们通过component这个属性指定要展示的组件
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
