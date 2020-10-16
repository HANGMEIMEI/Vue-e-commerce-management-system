import Vue from 'vue'
// 导入element-ui这个组件
import {
  Button,
  Form,
  Input,
  FormItem,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  Row,
  Table,
  TableColumn,
  Switch,
  Tooltip
} from 'element-ui'
// 导入用来显示[成功、警告、消息、错误]类的操作反馈。的组件 Message 使用他的方式 需要进行全局挂载

// 下面是我们为我们导入的组件注册【为容器注册！】
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
// 这个的$message是一个自定义属性 可以改名字，只要合法就行!但后面的Message是一个组件 必须按照要求书写！、
// 下面的代码代表把Message组件挂载到了Vue的原型对象上！这样的话，每一个组件， 都可以通过this访问到$message 那么$message就会进行弹窗提示了！
Vue.prototype.$message = Message
