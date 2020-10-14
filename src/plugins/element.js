import Vue from 'vue'
// 导入element-ui这个组件
import { Button, Form, Input, FormItem, Message } from 'element-ui'
// 导入用来显示[成功、警告、消息、错误]类的操作反馈。的组件Message 使用他的方式 需要进行全局挂载

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 这个的$message是一个自定义属性 可以改名字，只要合法就行!但后面的Message是一个组件 必须按照要求书写！、
// 下面的代码代表把Message组件挂载到了Vue的原型对象上！这样的话，每一个组件， 都可以通过this访问到$message 那么$message就会进行弹窗提示了！
Vue.prototype.$message = Message
