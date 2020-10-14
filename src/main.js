import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fontIcon/iconfont.css'
// 导入axios Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
import axios from 'axios'
// 把这个包挂载到Vue的原型对象上！
// 设置axios请求的根路径！[配置请求的根路径！]
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
