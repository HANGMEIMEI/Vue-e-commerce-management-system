

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



## 07 Property or method "loginFormRef" is not defined on the instance but referenced during render. Make sure that 

上面一句话的意思是你有一个方法但是没有定义，并且不能够渲染到页面，但是页面可以看到的！不影响大局！

![1602598294758](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602598294758.png)



## 08 Property or method "loginFormRef" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.

属性或方法“ loginFormRef”未在实例上定义，但在渲染期间被引用。 通过初始化该属性，确保该属性在data选项中或对于基于类的组件都是反应性的。



我出现上面的问题是我在   

```vue
ref="loginFormRef"
```

的前面加上了冒号如下：

```
:ref="loginFormRef"
```

谨记！



error More than 1 blank line not allowed no-multiple-empty-lines





## 10 Expected indentation of 8 spaces but found 10



预期缩进8个空格，但发现10个





![1602635654207](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602635654207.png)



上面的报错应该是我遇到的最难的报错了！

还有，当我开启后端服务器的时候，开启成功了，但是马上又自动关闭了！

出现上面的问题其实很简单，只是因为我操作不当的原因！

第一步：你因该打开你的mysql服务器，

![1602636638311](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602636638311.png)

第二步：开启后端服务器

![1602636671677](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602636671677.png)

然后只要保证你的前端代码没有问题，那么就应该可以解决了！





 Parsing error: Unexpected token





 Expected indentation of 0 spaces but found 4 



预期缩进0个空格，但发现4个





vue-router.esm.js?4fb5:16 [vue-router] Non-nested routes must include a leading slash character. Fix the following routes: 

- home



```js
{ path: "/home", component: Home }
```

vue-router.esm.js？4fb5：16 [vue-router]非嵌套路由必须包含前导斜杠字符。 修正以下路线：
-家

上面的是正确的代码：错的是下面的

```js
{ path: "home", component: Home }
```







 The template root requires an element rather than texts  vue/valid-template-root

模板根目录需要一个元素，而不是文本vue / valid-template-root



不能在Vue的但文件中直接进行文本的填充！必须使用元素进行包裹！









![1602835124159](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602835124159.png)





上面出现的问题单纯是因为我的MySQL服务器没有正常开启！







![1602839484715](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602839484715.png)

## 11 Expected an assignment or function call and instead saw an expression 

需要一个赋值或函数调用，而是看到一个表达式





## 12   Unexpected use of comma operator     

意外使用逗号运算符





## 第一次遇到了打代码，打到后面居然菜单栏都消失了！然后我退出登录，居然登录不聊了！！

求解决！

找到了，是后端服务器崩溃了，获取不到数据 ，登录不上





![1602853569139](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602853569139.png)

上面的错误不影响程序的运行！







![1603020108813](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1603020108813.png)



解决上面的报错其实挺简单的，就是函数的使用不要用下面这种【这个只包含异步代码用同步的形式写，就不能用下面的函数的创建方式】：

```
lvhang: function () {
    
}
```

必须‘用这种：

```
lvhang () {
    
}
```

、







## 13 error  Unnecessary return statement 

在项目中遇到上面的报错信息：

说return 是不必要的：解决方法：

```
if (!valid) return false
```

在return的后面加上false



![1603278448659](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1603278448659.png)





## 如何屏蔽ESlint 语法的警告问题！

 eslint-disable-next-line

> **（三）命令的使用**
>
> 　　　在代码中我们可以利用命令来屏蔽一些语法规范的检查，如 eslint-disable-next-line和eslint-disable，注意了这些命令必须要采用注释的方式使用。
>
> 　　（1）eslint-disable命令的使用
>
> 　　eslint-disable命令表示会将该命令所在行后面的所有文件进行语法规范检查屏蔽，若遇到eslint-enable命令就会结束屏蔽。
>
> - 若想屏蔽整个文档的语法规范检查，那么在文件的开头直接使用eslint-disable命令，在Vue文件的template标签中这样使用：<!-- eslint-disable -->，在script标签中这样使用： /* eslint-disable */
> - 若想屏蔽某段代码的语法规范检查，那么就结合eslint-disable和eslint-enable命令，在Vue文件的template标签中这样使用：<!-- eslint-disable --> 和 <!-- eslint-enable>两个命令将某段代码块包住，在script标签中这样使用：/* eslint-disable */ 和 /* eslint-enable */ 两个命令将某段代码块包住。
>
> 　　（2）eslint-disable-next-line命令的使用
>
> 　　eslint-disable-next-line命令表示该命令所在行的下一行的代码规范被屏蔽检查了。
>
> - 在Vue文件的template标签中这样使用：<!-- eslint-disable-next-line -->
> - 在Vue文件的script标签中这样使用： // eslint-disable-next-line



