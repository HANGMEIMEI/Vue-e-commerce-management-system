

在运行项目的时候遇到了的



![1602395555781](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602395555781.png)



解决方法：

安装less加载器：

## npm install less less-loader --save-dev







![1602473889108](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602473889108.png)

## Expected indentation of 0 spaces but found 4

## 期望缩进0个空格，但发现4



![1602474023448](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602474023448.png)

## 原因：项目中使用了eslint 的 semi 功能，

该功能，强制使代码必须使用分号（ ; ），或者必须不能加（ ; ）

## 但是我推荐全部使用分号！



![1602474100311](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602474100311.png)

## 文件末尾需要换行符，但找不到

不允许尾随的空格！



##  Trailing spaces not allowed   







![1602504829151](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602504829151.png)



## 1 上面显示的是访问不到element-ui中的元素

因为咱们的element-ui是用的按需导入的方式来使用的，你需要那些组件，必须要先导入才能够使用！







## 2 Vue中出现“‘xxxxx‘ is defined but never used”解决办法

![1602505453649](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602505453649.png)





"no-unused-vars": "off"







## 3  imported multiple times  import/no-duplicates

![1602506014008](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602506014008.png)



出现上面的问题就是因为

## 出现这个问题一般是导入import次数过多

只需要把导入的文件放在一行即可，并且都好后边加空格

```js
mport Vue from 'vue'
import { Button, FormItem } from 'element-ui'
// 导入element-ui这个组件
import { Form } from 'element-ui'
import { Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

```

踩坑之后：

```js
import Vue from 'vue'
// 导入element-ui这个组件
import { Button,Form, Input, FormItem } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

```

完成上面的步骤之后还是会报错 

## 4  A space is required after ','  comma-spacing



就是逗号后面必须加空格！

改正之后的！

```js
import Vue from 'vue'
// 导入element-ui这个组件
import { Button, Form, Input, FormItem } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
```





## 5 error  More than 1 blank line not allowed  no-multiple-empty-lines

错误不允许多于1个空行无多空行





## 6 Unexpected trailing comma  comma-dangle



意外的尾随逗号逗号





##   Missing space before function parentheses  space-before-function-paren



函数前的空格缺少括号前的空格













error More than 1 blank line not allowed no-multiple-empty-lines