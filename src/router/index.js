import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import Login from '../components/Login.vue'
// 导入主页组件
import Home from '../components/Home.vue'
// 导入欢迎的组件
import Welcome from '../components/Welcome.vue'

Vue.use(VueRouter)

// 路由规则是由path来指定咱们路径 当用户访问/login的时候我们通过component这个属性指定要展示的组件
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  // 加入新的主页路由规则
  // path下面的路径和编程导航的路径必须是一样的
  { path: '/home', component: Home, redirect: '/welcome', children: [{ path: '/welcome', component: Welcome }] }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数， 表示放行！
  //    next()  直接放行   next('/login)  强制跳转
  // ...如果用户访问的是登录页， 直接放行
  if (to.path === '/login') return next()
  // 获取token的值
  // 从 sessionstorage 中获取到 保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token 强制跳转登陆页面
  if (!tokenStr) return next('/login')
  // 有token 直接放行就可以了！
  next()
})
export default router
