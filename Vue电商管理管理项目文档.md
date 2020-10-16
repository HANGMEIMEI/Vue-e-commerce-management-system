# Vue电商管理项目的搭建过程：



重点词汇： 1 多终端访问！



## 回过头你能学到什么【同时也检验一下自己！】：

### ◆能够基于Vue初始化项目

### ◆能够基于Vue 技术栈进行项目开发

### ◆能够使用Vue的第三方组件进行项目开发

### ◆能够说出前后端分离的开发模式

​	开发模式：（前后端分离【前端负责调用接口，后端负责写接口】）

# 项目的目录：

## ◆项目概述

### 1.1 电商项目的基本业务的概述

#### 	根据不同的业务场景，电商系统一般都提供了PC端、移动APP、移动web、微信小程序等多种终端访问方式！

![1601043262272](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601043262272.png)

### 1.2电商管理系统的功能：

- #### 1 管理用户的账号

- #### 	2 商品的分类

- #### 	3 商品的信息

- #### 	4 订单

- #### 	5 数据统计

等业务功能！





![1601043421587](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601043421587.png)



### 1.3 电商后台管理系统的开发模式（前后端分离）



#### 开发模式：（前后端分离【前端负责调用接口，后端负责写接口】）

#### 电商后台管理系统整体采用前后端分离的开发模式，其中前端项目是基于Vue技术栈的SPA项目。

![1601043573817](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601043573817.png)



### 1.4 电商后台管理系统的技术选型：

#### 1 前端技术栈

##### 1 Vue

##### 2 Vue-Router

##### 3 Element_UI

##### 4 Axios【发起网络数据请求】

##### 5 Echarts



#### 2 后端项目技术栈：

##### 1 Node.js

##### 2 Express

##### 3 Jwt

##### 4 Mysql

##### 5 Sequelize





## 2 ◆项目初始化



### 2.1前端项目初始化步骤

#### 1 安装Vue脚手架

​	安装Vue的脚手架工具 请在控制台中输入以下的代码

​	首先你要确认你想安装的是哪个版本的脚手架：下面有详细的说明！

​		下面的关于vue-cli的文档由CSDN的账户名为   [笑死我了笑死我了](https://blog.csdn.net/qq_35081380)整理！

​	查看vue-cli2版本号列表

```node
npm view vue-cli versions --json
```

​       vue-cli2版本的安装

```node
//指定版本安装

npm install -g vue-cli@2.x.x

//安装vue-cli2最新版

npm install -g vue-cli
```

​	vue-cli2版本的卸载


```
npm uninstall -g vue-cli
```

​	获取vue-cli3.x.x 版本


```
npm view @vue/cli versions --json
```

​        vue-cli3.x.x 版本安装

```
//指定版本安装



npm install -g @vue/cli@3.9.3



//安装vue-cli3最新版



npm install -g @vue/cli
```

​        vue-cli3.x.x 版本卸载


```
npm uninstall -g @vue/cli

```

##### 脚下留心： 

上面的命令的使用必须建立在node环境配置好之后！

至于node环境怎么配置，问度娘吧!【我后面再整理一份关于



#### 2 通过 Vue 脚手架创建项目

基于 图形化界面 的方式 ， 创建新版的vue项目

1、在控制台中输入： vue ui

浏览器弹出：

![1601913908287](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601913908287.png)

第二步：

![1601913947035](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601913947035.png)

第三步：

![1601914044731](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914044731.png)



第四步：

![1601914069116](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914069116.png)

第五步：

![1601914265146](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914265146.png)



第六步：

![1601914492511](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914492511.png)



第七步：

![1601914601347](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914601347.png)

第八步：

![1601914727520](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914727520.png)

第九步：

![1601914847713](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601914847713.png)



第十步：搞定！



![1601915080683](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1601915080683.png)







#### 3 配置 Vue 路由

前面我们的选择中已经包含了此项！！

#### 4 配置 Element-UI 组件库

![1602323679747](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602323679747.png)

第二步：

![1602323726159](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602323726159.png)



第三步：

![1602323814325](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602323814325.png)

#### 5 配置 axios 库

第一步：

![1602323887645](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602323887645.png)



第二步：

![1602323972891](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602323972891.png)





#### 6 初始化 git 远程仓库

#### 7 将本地项目托管到Github或码云中

这儿我将介绍两种将本地项目托管到版本控制的工具中！

第一种用ssh的公钥和私钥上传项目：

这儿我已github为例：

第一步：

​	在控制台中输入 ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

​		 "your_email@example.com"这个要替换成你的邮箱地址！

​		这是我的： ssh-keygen -t rsa -b 4096 -C "15523352161@163.com"



第二步：

![1602325067636](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602325067636.png)

出现上面的界面，连按三次回车就可以了！

![1602325143798](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602325143798.png)



公钥和私钥的存放路径：

![1602325265448](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602325265448.png)





复制公钥里的所有的内容：

![1602325406526](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602325406526.png)



第三步：

![1602325706637](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602325706637.png)



第四步：成功！

![1602325731774](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602325731774.png)



第五步：测试你的公钥能不能正常的工作

​	在控制台里输入：

​		ssh -T git@github.com

![1602326075388](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602326075388.png)

出现这样的提示就代表成功了！





至于在码云上面的ssh添加和GitHub差不多！

唯一不同的是

第五步的地方：

​	地址发生改变了：ssh -T git@gitee.com



其他的就是一摸一样的！

​	码云成功添加上的成功的图片：

![1602326431673](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602326431673.png)







将项目托管到github上面：

​	第一步： 新建仓库

![1602326512531](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602326512531.png)

第二步：填写基本的信息

![1602326716790](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602326716790.png)



码云的类似！



第三步：创建好仓库之后出现如下的界面
![1602326795837](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602326795837.png)



如果你之前进行了全局配置的化，就不用进行git的全局配置了！

这儿我再次的演示一遍：

![1602327065626](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602327065626.png)



![1602327316974](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602327316974.png)

可见我们是添加成功的！



第四步：

![1602327548119](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602327548119.png)



第五步：在控制台中输入

![1602328003652](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602328003652.png)

然后再次在控制台中输入：

 git push vue_shop master

就可以把项目上传到github上面了!



第六步：成功：

![1602328106071](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602328106071.png)





### 2.2 后台项目的环境安装配置：

#### 1 安装Mysql 数据库

​	用PHPstudy这个软件来使用MySQL数据库，因为它集成了MySQL和Apache服务器！而我们只需要用到MySQL，所以我们可以停掉Apache！

![1602329251697](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602329251697.png)



接下来需要导入数据库进行测试：

![1602329575524](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602329575524.png)

这个数据库文件可以自己写！

或者用MySQL软件来写！



用PHPstudy来执行这个脚本！：

![1602329945614](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602329945614.png)



查看数据库文件是否还原成功：

![1602330115154](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602330115154.png)







#### 2 安装Node.js 环境



以后再讲！



#### 3 配置项目相关信息

#### 4 启动项目

#### 5 使用postman 测试后台项目接口是否正常



首先，进入后台接口的文件夹目录：

![1602335919783](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602335919783.png)



然后，再在控制台中输入以下命令：

​	cnpm i   安装依赖项



然后再用 输入：

​	node命令运行app.js

​		node  app.js

​			![1602336074303](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602336074303.png)

出现这个界面就说明接口项目没有问题！（api接口项目ok）



具体详情请看：电商管理后台 API 接口文档



使用postman请求登录的接口：

![1602348479109](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602348479109.png)



token是用来进行登陆状态保存的！就相当于node里面的session！

我们可以通过token来验证这个人有没有登录！



## 3 ◆登录/退出功能



### 3.1 登录概述

#### 	1 登录的业务流程

- ①在登录页面输入用户名和密码

- ②调用后台接口进行验证
  ③通过验证之后，根据后台的响应状态跳转到项目主页

#### 2 登录业务的相关技术点

​	

- ·http是无状态的
  ·通过cookie在客户端记录状态
  ·通过session在服务器端记录状态
  ·通过token方式维持状态





如果前端和后台接口之间不存在跨域的问题推荐大家使用cookie和session来记录登录状态， 反之则需要token来维持登录状态



### 3.2 登录 –- token原理分析

![1602385194244](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602385194244.png)

​	

原理流程：

​	第一步：

​		登陆页面输入用户名和密码进行登录

​	第二步：

​		服务器验证通过之后生成该用户的token并返回

​		token值是由服务器生成的！ 不同的用户对应的token值也是不一样的！

​	第三步：

​		客户端存储该token

​	第四步：

​		后续所有的请求都携带该token发送请求

​		token主要是进行客户端与服务器端进行身份校验的！

​		token【唯一的身份令牌】

​	第五步：

​		服务器端验证token是否通过！





### 3.3 登录功能的实现

#### 1 登录页面的布局

##### 通过Element-UI组件实现布局（下面是会用到的组件）

·el-form  表单组件
·el-form-item    表单的item项 【输入框、登录和重置】
·el-input
·el-button
·字体图标





创建login分支：之后在合并到develop上 



```
 git checkout -b login
```



#### 2 删除不必要的组件

​	![1602390122780](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602390122780.png)



由于我这个版本是2.x的版本，所以和3.x的结构有所不同，但是是大同小异的，总之，用的上的就留下，前端页面肯定是要清空的

​	然后view文件夹也要删除， component组件文件也要删除！



#### 3 创建登录组件

​	第一步：

、在component文件夹下创建login.vue的组件

```vue
// 这是一个单文件组件 由三部分组成

// 1 结构
// 2 样式
// 3 行为
<template>
    <div>
        登录组件
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    // lang="less" 表示这个节点中支持less语法格式
    // scoped 是一个vue的指令 是用来控制组件的样式的生效的区间！
    // 只要是一个单文件组件 我们样式都推荐加上scoped属性！因为不会影响到其他的组件！从而防止组件之间的样式冲突！


</style>
```



#### 4 把登录组件渲染到根组件中！

Login.vue 组件创建好了之后，我们需要通过路由的形式渲染到APP根组件中：

我这个版本路由的名称在router文件夹下的index'.js，另一些版本就是router文件夹下的router.js,这个没有影响！



```js
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import Login from '../components/Login.vue'

Vue.use(VueRouter)

// 路由规则是由path来指定咱们路径 当用户访问/login的时候我们通过component这个属性指定要展示的组件
const routes = [
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

```



​	

最后在根组件中加入路由占位符：

```vue
<template>
  <div id="app">
  <!-- 路由占位符 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
vue

```

![1602395920554](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602395920554.png)

最后在地址中加入login即可看到上图所示的内容！



#### 5 添加路由重定向的规则



要在路由的规则中加入下面的代码：

```js
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login }
]
```



#### 6 登陆组件布局

还有，在开发的时候要安装依赖的化，要选择开发依赖！ha !



```vue
// 这是一个单文件组件 由三部分组成
// 1 结构
// 2 样式
// 3 行为
<template>
  <div class="login-container">登录组件</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// lang="less" 表示这个节点中支持less语法格式
// scoped 是一个vue的指令 是用来控制组件的样式的生效的区间！
// 只要是一个单文件组件 我们样式都推荐加上scoped属性！因为不会影响到其他的组件！从而防止组件之间的样式冲突！
.login-container {
  background-color: #2b4b6b
}
</style>

```

![1602474257060](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602474257060.png)

##### 我们要让背景色沾满全屏：

第一步：

![1602474627870](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602474627870.png)



第二步： 在入口文件中导入全局样式表

![1602474778209](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602474778209.png)



第三步： 让login-container这个div高度设为百分之百！

![1602475215540](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602475215540.png)



搞定：

![1602475242585](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602475242585.png)





##### 绘制登录盒子：

![1602475796044](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602475796044.png)

在登录组件中绘制：

```vue
// 这是一个单文件组件 由三部分组成
// 1 结构
// 2 样式
// 3 行为
<template>
  <div class="login-container">
      <div class="login_box">

      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// lang="less" 表示这个节点中支持less语法格式
// scoped 是一个vue的指令 是用来控制组件的样式的生效的区间！
// 只要是一个单文件组件 我们样式都推荐加上scoped属性！因为不会影响到其他的组件！从而防止组件之间的样式冲突！
.login-container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    // 让盒子在屏幕的正中间显示！
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

```





##### 绘制顶部默认的头像区域：

![1602501317604](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602501317604.png)



```html
 <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
    </div>
```



```css
<style lang="less" scoped>

.login-container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
//   padding-top: 10px;
  /* // 让盒子在屏幕的正中间显示！ */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    // 给外边框线加上阴影！
    box-shadow: 0 0 10px rgb(102, 40, 40);
    position: absolute;
    left: 50%;  // 值为正的话，值越大就越往右边走
    // translate: ;的第二个参数是y轴上的
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
</style>
```



##### 绘制登录组件的表单区域

##### <https://element.eleme.cn/#/zh-CN/component/form>



![1602504555340](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602504555340.png)



第二步：不复制下来的代码粘贴到组件结构中！

![1602506716905](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602506716905.png)



第三步： 导入所需插件

![1602507088798](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602507088798.png)



搞定！：

![1602507129053](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602507129053.png)





登陆表单的结构:

```html
 <!-- 登录表单区域 开始 -->
      <el-form label-width="0px" class="login_form">
        <!-- 用户名： -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 登录表单区域 结束 -->
```



登录表单的样式：

```css
// 登陆表单的样式 开始
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
//   由于EUI里的输入框默认是标准盒子， 所以会撑大我们的盒子，所以得把盒子转换成CSS3 的盒子
    box-sizing: border-box;
}

.btns {
  display: flex;
  // flex-end：弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。
  justify-content: flex-end;
}
// 登陆表单的样式 结束
```



最终效果：

![1602508496500](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602508496500.png)





##### 绘制密码和用户名前面的小图标：

![1602549115556](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602549115556.png)



引入输入框小图标的两种方式：

![1602549690948](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602549690948.png)





修改小图标：

![1602550415688](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602550415688.png)



咱们使用第三方的图标库！：

阿里图标库：

第一步：

​	<https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2>

进入网站：

![1602550890889](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602550890889.png)



第二步：

搜索自己想要的图标，并且加入购物车：

![1602551015834](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551015834.png)





第三步：

![1602551050276](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551050276.png)



第四步：点击添加至项目

![1602551077756](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551077756.png)





第五步：

![1602551264276](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551264276.png)



第六步：

![1602551321691](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551321691.png)





把下载下来的字体图标放到项目的assets文件夹下面：

并且在入口文件引入字体图标：

![1602551741071](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551741071.png)





最后在登录组件的地方假如相应的类就可以了！

![1602551982685](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602551982685.png)

```vue

          <!--  prefix-icon="el-icon-search" 表示输入框前面的小图标！ -->
          <el-input prefix-icon="iconfont icon-yonghuming"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-mima"></el-input>
```

搞定！

![1602552099955](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602552099955.png)





##### 07 实现表单的数据绑定

![1602553517099](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602553517099.png)

第一步： 

为

```vue
 <!-- 登录表单区域 开始 -->
      <el-form label-width="0px" class="login_form">
```

上面的标签添加:model=“form”的属性！【指向一个数据对象】进行数据绑定！



第二步：

为每一个表单项里面的文本输入框 通过v-model属性绑定到数据对象上具体的属性中！

```vue
<el-input prefix-icon="iconfont icon-yonghuming"></el-input>
```

![1602553656150](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602553656150.png)

例如： 上面的图片中

第一个数据会绑定到form对象的name属性

第二个数据绑定到form对象的第二个相应的属性上了！



具体的代码：

```vue
<!-- 登录表单区域 开始 -->
      <el-form :model="loginForm" label-width="0px" class="login_form">
        <!-- 用户名： -->
        <el-form-item>
          <!--  prefix-icon="el-icon-search" 表示输入框前面的小图标！ -->
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghuming"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 登录表单区域 结束 -->
```

业务代码（逻辑代码）：

```js
<script>
export default {
  data () {
    // data 是一个函数 返回的是一个对象
    return {
      // 这是登录表单的数据绑定对象！
      loginForm: {
        username: 'lvhang',
        password: '23'
      }
    };
  }
};
</script>
```





##### 08 实现表单的数据验证：

表单验证
在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

第一步： 如何添加验证规则对象！

![1602555433735](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602555433735.png)

首先要为el-form这个组件通过属性绑定，绑定一个rules属性，它的值是一个rules对象【验证规则对象】

第二步： 在data数据区定义！【规则一般都是数组】数组中的每一个规则都是一个对象





![1602555496021](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602555496021.png)



required: true 代表这是一个必选项！

message: ‘lvhang’  是一个错误的消息!【如果不符合这个规则，就会显示这个消息】

trigger: ‘blur’ 触发验证【鼠标在失去焦点的时候触发验证的行为】





min: 3  代表最小的长度

max: 13 自然就代表最大的长度了

message: ‘如果长度不在3-13之间就会显示这个消息’  是一个错误的消息!【如果不符合这个规则，就会显示这个消息】

trigger: ‘blur’ 触发验证【鼠标在失去焦点的时候触发验证的行为】





第三步： 怎么把验证规则和表单验证对象绑定在一起呢！

Form组件提供了表单验证的功能，只需要通过rules属性传入约定的验证规则，并将Form-ltem的prop属性设置为需校验的字段名即可。

![1602556478568](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602556478568.png)



###### 脚下留心

就是最后一步把验证规则和表单验证对象绑定在一起的时候

**prop=“规则的名字”是放在<el-form-item>元素里面的！**

具体的代码：

结构：

```vue
<!-- 登录表单区域 开始 -->
      <el-form
        :rules="loginFormRules"
        :model="loginForm"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名： -->
        <el-form-item prop="username">
          <!--  prefix-icon="el-icon-search" 表示输入框前面的小图标！ -->
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-yonghuming"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-mima"
            type="password"
          ></el-input>
        </el-form-item>
</el-form>
```

业务代码：

```js
// 这是表单的验证规则对象！
      loginFormRules: {
        // 一个规则一个数组
        // 验证用户名是否合法
        username: [
          {
            required: true,
            message: "你输入的用户名有误，请重新输入",
            trigger: "blur"
          },
          { min: 5, max: 15, message: "如果长度不在3-13之间就会显示这个消息", trigger: "blur" }
        ],
        // 验证输入的密码是否合法！
        password: [
          {
            required: true,
            message: "你输入的密码有误，请重新输入",
            trigger: "blur"
          },
          { min: 5, max: 15, message: "如果长度不在3-13之间就会显示这个消息", trigger: "blur" }
        ]
      }
```



##### 09 实现表单的重置按钮的功能：

![1602567144119](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602567144119.png)



只要我们获取到了表单的实例对象，就可以通过实例对象直接访问resetFields这个函数  从而重置整个表单  将所有字段值 重置为初始值 并移除校验结果！

我们只需要拿到表单的实例对象， 然后调用resetField函数 ，就可以重置整个表单了！

如何拿到这个表单的实例对象呢？！

  

第一步：

 为表单添加ref引用！ref="loginFormRef" 它的这个值就是表单的实例对象



第二步：

然后可以通过

```vue
 methods: {
    resetLoginForm: function () {
      // console.log(this)
      // 获取表单的实例对象
      this.$refs.loginFormRef.resetFields();
    }
  }
```

获取到表单的实例对象，然后在调用resetFields()方法就可以进行表单重置了！





##### 10 实现表单登录前的预校验



应该在登录之前就调用一个方法进行表单的预验证：



之前我们拿到的表单的引用【就是表单的实例对象】可以直接调用

![1602601600246](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602601600246.png)



下面的方法：



第一步：

为登录按钮绑定一个单击的事件：

第二步：

然后再通过获取表单的实例对象调用validate()方法

```
 login: function () {
      this.$refs.loginFormRef.validate();
    }
```

就可以实现登录按钮的预验证了！

![1602601951201](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602601951201.png)



但是这个validate()方法里面同样支持接收一个回调函数拿到回调的结果进行一个判断：

![1602602162855](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602602162855.png)

 // console.log(valid) valid 是一个布尔值 如果预校验的值没有通过就返回false





##### 11 根据表单预验证的结果是否发起登录请求



第一步： 

为登录按钮添加一个点击事件在点击事件中获取表单的实例对象，并且调用validate的的方法进行登录状态码的验证



下面是完整的代码：

完成下面的代码是有一些前预的工作是要做的：

第一步要打开 mysql的服务器

![1602649907419](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602649907419.png)

第二步：

导入axios的组件

```js
// 导入axios Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
import axios from 'axios'
// 把这个包挂载到Vue的原型对象上！
// 设置axios请求的根路径！[配置请求的根路径！]
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
```





然后就是点击按钮之后进行状态码的判断：



```js
 login: function () {
      this.$refs.loginFormRef.validate(async valid => {
        // console.log(valid)
        //  valid 是一个布尔值 如果预校验的值没有通过就返回false
        if (!valid) return
        // const result = await this.$http.post('login', this.loginForm);
        // 我们从result身上解构出一个data属性，然后重命名为res对象！
        const { data: res } = await this.$http.post('login', this.loginForm);
        // console.log(res);
        // console.log(res.meta.status) // 获取当前的状态码！
        // 在这儿进行if判断 判断状态码
        if (res.meta.status !== 400) return console.log("请求的地址不存在或者包含不支持的参数");
        console.log("请求成功！");
      });
    }
```





##### 12 以友好的方式提示用户登录成功或者失败



![1602660060184](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602660060184.png)



第一步：

在element-ui中进行导入!弹框组件！

 然后再把Message挂载为Vue原型上的一个属性！！然后起一个名字！这样在每个组件中都可以用this进行使用Q！

```js
// 这个的$message是一个自定义属性 可以改名字，只要合法就行!但后面的Message是一个组件 必须按照要求书写！、
// 下面的代码代表把Message组件挂载到了Vue的原型对象上！这样的话，每一个组件， 都可以通过this访问到$message 那么$message就会进行弹窗提示了！
Vue.prototype.$message = Message
```

第二步：：

$message上提供了多种弹窗的方法选择相应的弹窗提示就可以了!

```js
 if (res.meta.status !== 200) return this.$message.error("请求的地址不存在或者包含不支持的参数")
        this.$message.success("请求成功！")
```



##### 13 进行登录成功后的操作行为！



 // 1.将登录成功之后的token，保存到客户端的sessionstorage中

（把token保存到浏览器中）



```
为什么把token保存到sessionstorage中而不是localstorage中呢?!

答： 因为sessionstorage是会话存储，localstorage是本地存储 但是我们的token只应在当前网站打开期间生效  所以把token保存到sessionstorage中更加适合一些！
```

​	

​        



// 1.1项目中出了登录之外的其他API接口，必须在登录之后才能访问

​        // 1.2 token只应在当前网站打开期间生效，所以将token保存在sessionstorage中

​        // 2.通过编程式导航跳转到后台主页，路由地址是/home

```js
 // 1.2 token只应在当前网站打开期间生效，所以将token保存在sessionstorage中
        console.log(res.data.token); // 可以通过这种方式拿到token   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE2MDI2NjMyODksImV4cCI6MTYwMjc0OTY4OX0.wkZu4m7-AMfO73kZGwxVyct2kdh015q2otsT0HAqu_A
        // 保存token的值sessionStorage中！
        window.sessionStorage.setItem("token", res.data.token)
        // 2.通过编程式导航跳转到后台主页，路由地址是/home
        this.$router.push('/home')
```

就可以看到sessionStorage的token值了！

![1602663628413](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602663628413.png)



之后，再用路由的编程时导航跳转到第二个页面 

```js
 // 2.通过编程式导航跳转到后台主页，路由地址是/home
        this.$router.push("/home")
```



然后，在components中新建Home.vue组件

```js
// 同样是一个单文件组件
<template>
    <div>
        Home 组件
    </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
</style>

```



再然后： 在路由的js文件中导入主页的组件并且加入新的规则

```js
// 导入主页组件
import Home from '../components/Home.vue'


 // 加入新的主页路由规则
  // path下面的路径和编程导航的路径必须是一样的
  { path: "/home", component: Home }

```





完成效果：

![1602666262628](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602666262628.png)





### 3.3.2  路由导航守卫的访问控制权限



需求： 只有当登录了之后才可以看到主页的页面， 默认用户是没有登录的，所以不应该看到这个页面！

![1602667102316](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602667102316.png)



如果用户没有登录，但是直接通过URL访问特定页面，需要重新导航到登录页面。【开始我还以为是路由的重定向呢！】

![1602667290024](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602667290024.png)

为路由对象调用一个beforeEach函数

上面的beforeEach就是导航守卫 接收一个回调函数 接收三个形参 

 to： 代表我们将要访问的页面路径

from： 代表我们是从哪个页面【路径】跳转过来的！

next： 放行的函数！



在路由的js文件里进行配置，但是2.x的版本有点不一样！

```js
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  // 加入新的主页路由规则
  // path下面的路径和编程导航的路径必须是一样的
  { path: "/home", component: Home }
]

```

下面是3.版本的!

![1602670746940](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602670746940.png)





一样的一样的！

如下：

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import Login from '../components/Login.vue'
// 导入主页组件
import Home from '../components/Home.vue'

Vue.use(VueRouter)

// 路由规则是由path来指定咱们路径 当用户访问/login的时候我们通过component这个属性指定要展示的组件
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  // 加入新的主页路由规则
  // path下面的路径和编程导航的路径必须是一样的
  { path: "/home", component: Home }
]

const router = new VueRouter({
  routes
})

export default router

```



挂载路由导航守卫：

```js
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
})s
```

搞定！



### 3.4 退出功能

#### 退出功能的实现原理

基于token的方式实现退出比较简单，只需要销毁本地的token即可。这样，后续的请求就不会携带token，必须重新登录生成一个新的token之后才可以访问页面。~

核心代码：

![1602672217339](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602672217339.png)

```

```



在Home中新增一个退出功能的按钮：

并且在按钮中绑定一个点击事件，

之后我们为点击事件调用清除sessionStorage内容的方法

最后再把当前页面重定向到登录页面，搞定！



```js
// 同样是一个单文件组件
<template>
    <!--暂时把退出按钮写死 -->
    <el-button type="info" @click="logout">退出</el-button>
</template>
<script>
export default {
  methods: {
    logout: function () {
      // 清空sessionStorage中存储的内容
      window.sessionStorage.clear()
      // 清除完内容后 把当前页面重定向到登录页面
      this.$router.push("/login")
    }
  }
};
</script>

<style lang="less" scoped>
</style>

```





##### 14 处理项目中的语法警告的问题



在项目中创建格式化文件的配置项！

![1602677170250](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602677170250.png)



但是我发现没有用，因为我的末尾的逗号还是会出现！



```
{
	//用来隐藏或者取消分号的！
    "semi": false,
    // 用单引号来包裹字符串
    "singleQuote": true
}
```

这句代码已经不能够用了，至少2.x不能再用了！【就是函数和后面的括号要有一个空格 就是放在ESlint里面的规则

```js
    'space-before-function-paren': 0 

```





##### 15 优化element-ui按需组件的导入形式



```js
import Vue from "vue"
// 导入element-ui这个组件
import { Button, Form, Input, FormItem, Message } from 'element-ui'
```



##### 16 提交登录功能的代码：



第一步： 先提交源仓库的代码， 确保仓库是处于干净的状态。



第二步：

切换分支

```
git checkout develop
```

合并分支：





```
git merge login
```



最后，再推送到远程的仓库

```
git push vue-shop2 develop
```

搞定！

## 4 ◆主页布局



### 4.1 整体布局

![1602680207339](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602680207339.png)

整体布局：先上下划分，再左右划分。

![1602680234819](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602680234819.png)



![1602680315351](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602680315351.png)



创建一个主页的分支：

```
git checkout -b home
```

```html
// 同样是一个单文件组件
<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header
      >Header<el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 开始 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
    <!-- 页面主体区域 结束 -->
  </el-container>
</template>
```

![1602681463875](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602681463875.png)



上面的样式并没有生效，并且控制台中还给出了报错信息！



原因是我们想要使用这些组件，但是并没有注册这些组件

所以我们想要使用这些组件的话，就必须再plugins文件夹中的js文件中导入这些组件和使用才行！



```js
import { Button, Form, Input, FormItem, Message, Container, Header, Aside, Main } from 'element-ui'
// 导入用来显示[成功、警告、消息、错误]类的操作反馈。的组件 Message 使用他的方式 需要进行全局挂载

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
```



主页的结构和基本的样式代码：

```vue
// 同样是一个单文件组件
<template>
  <el-container class="home-container">
    <!-- 头部区域 开始-->
    <el-header
      >Header<el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 头部区域 结束-->

    <!-- 页面主体区域 开始 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
    <!-- 页面主体区域 结束 -->
  </el-container>
</template>
<script>
export default {
  methods: {
    logout: function () {
      // 清空sessionStorage中存储的内容
      window.sessionStorage.clear()
      // 清除完内容后 把当前页面重定向到登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: rgb(49,55,58);
}

.el-aside {
  background-color: rgb(49,54,67);
}

.el-main {
  background-color: #EAEDF1;
}
</style>

```

最后再把颜色统一一下！都用十六进制！



##### 01 实现主页区域中header区域中的布局

header区域的主要的内容：

![1602723965964](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602723965964.png)



样式代码：

```css
// 头部区域的样式
.el-header {
  background-color: rgb(49,55,58);
  // 为头部区域添加弹性布局
  display: flex;
  // 左右贴边对齐！
  justify-content: space-between;
  // 去掉el-header的内padding
  padding-left: 0;
  // 水平居中
  // justify-content: center;
  // 垂直居中
  align-items: center;
  // 美化文本
  color: #fff;
  font-size: 20px;
  // 再让logo外面的盒子转换成弹性盒子 这儿我们用子代选择器
  > div {
    display: flex;
    align-items: center;
    img {
      padding-right: 20px;
    }
  }

}
```



结构代码：

```html
 <el-header>
      <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 头部区域 结束-->
```



### 4.2 左侧菜单的布局



![1602736001768](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602736001768.png)

菜单分为二级，并且可以折叠。

![1602736045481](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602736045481.png)



![1602736347609](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602736347609.png)



上面的样式并没有生效，同样是组件要按需导入！并且要使用！【注册为全局组件！】

```
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
  MenuItemGroup,
  MenuItem
} from 'element-ui'
// 导入用来显示[成功、警告、消息、错误]类的操作反馈。的组件 Message 使用他的方式 需要进行全局挂载

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(MenuItem)
// 这个的$message是一个自定义属性 可以改名字，只要合法就行!但后面的Message是一个组件 必须按照要求书写！、
// 下面的代码代表把Message组件挂载到了Vue的原型对象上！这样的话，每一个组件， 都可以通过this访问到$message 那么$message就会进行弹窗提示了！
Vue.prototype.$message = Message

```

上面的menuGroup可以删掉，因为我们在项目中没有用到！



侧边栏区域的代码：

```html
 <!-- 侧！边栏菜单区域 -->
        <el-menu
          background-color="rgb(49,54,67)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 一级菜单！ -->
          <el-submenu index="1">
            <!-- 一级菜单的模板区域！ -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 里面的文本！ -->
              <span>导航一</span>
            </template>
            <!-- 二年级菜单！ -->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 里面的文本！ -->
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
```



最终的效果！：

![1602738124590](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602738124590.png)





### 4.3 通过接口获取菜单数据

除了登录接口，其他的接口都需要授权



- 需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌



通过axios 请求拦截器添加token，保拥有获取数据的权限。

![1602738815693](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602738815693.png)



#### 设置axios的请求拦截器

 从而为请求头对象挂在一个自定义属性 他的值就是我们曾经在sessionStorage中存储的token值！



##### 01 入口函数main.js

找到配置节点：

```js
// 把这个包挂载到Vue的原型对象上！之前，为他设置一个拦截器！【axios.interceptors.request】
axios.interceptors.request.use(config => {
  console.log(config)
  // 为config 作预处理
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})
```

在登录退出出之后，然后重新登录查看network 中的请求头

看Authorization有没有加到请求头里面

![1602743496015](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602743496015.png)







搞定！





### 4.4 发起请求获取左侧的导航菜单



请求左侧菜单

相关的代码：

```js
export default {
  // 把立即获取到的数据放到我们自己的data中
  data () {
    return {
      // 左侧菜单数据
      menuList: []
    }
  },
  // 整个页面刚一加载的时候就应该立即获取左侧菜单数据
  // 我们在行为区域定义一个生命周期函数
  created () {
    this.getMenuList()
  },
  methods: {
    logout: function () {
      // 清空sessionStorage中存储的内容
      window.sessionStorage.clear()
      // 清除完内容后 把当前页面重定向到登录页面
      this.$router.push('/login')
    },
    // 获取所有的菜单！
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.console.error(res.meta.msg)
      this.menuList = res.data
      console.log(res)
      console.log(this.menuList)
    }
  }
}
```





#### 01 实现左侧菜单的UI绘制

为什么会选择用双重for循环呢！

因为从！

```js
    // 获取所有的菜单！
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.console.error(res.meta.msg)
      this.menuList = res.data
      console.log(res)
      console.log(this.menuList)
    }
```



![1602749532570](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602749532570.png)

res的返回值来看

明显就是数组嵌套数组嘛！

外层for循环主要渲染一级菜单，内层for循环主要渲染二级菜单！





如果我们要绘制左侧的菜单那就只需要一个双重for循环就可以了！

```vue
 <!-- 一级菜单！ -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
```

```vue

 <!-- 二级菜单！ -->
            <el-menu-item :index="subItem.id +''" v-for="subItem in item.children" :key="subItem.id">

```



为什么当我们点击一个菜单的时候，所有的菜单都打开或者关闭呢？！



因为当前我们用的index都是相同的！所有都接受同一个指令，我们得为不同的菜单指定不同的index

采用动态绑定的方式为不同的菜单绑定一个不同的index

因为每个菜单项的id不同，所以我们就指定id为菜单的index，然后绑定上去

```
:index="item.id + ''"
```



![1602750364443](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602750364443.png)



报错了，是因为当前的index只接受字符串，不接收数值！最简单的方法就是为index 拼接上一个空的字符串！因为一个数值和一个字符串拼接就会得到一个字符串！





两层for循环完成左侧菜单的渲染【绘制】

![1602751344498](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602751344498.png)



#### 02 对渲染出的左侧菜单进行格式上的美化

现在有一个问题啊！就是当我的鼠标经过的时候背景颜色是白色，我怎样改过来！

01 对选中的二级菜单进行颜色的替换

```
   active-text-color="rgb(83,185,255)"
```

02 对菜单前面的小图标进行替换！

![1602752018846](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602752018846.png)



03 如何把一级菜单的字体图标渲染出来呢？!

方法：定义一个字体图标对象

![1602753359109](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602753359109.png)

最后我的代码报错了，正在尝试解决中！

```js
 iconsObj: {
        125: 'iconfont icon-yonghuguanli',
        103: 'iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-',
        101: 'iconfont icon-shangpinguanli',
        102: 'iconfont icon-dingdanguanli',
        145: 'iconfont icon-shujutongji'
      }
```

 这个地方有一点问题，就是2.x的版本如果用单引号包裹数值，会报错的，就是上面的错误，记住就可以了！

 04 修改文字图标和菜单之间的距离



#### 03 继续优化左侧菜单

我们的需求，一级菜单只能打开一个！

目前“：

![1602757825643](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602757825643.png)

可以打开多个一级菜单！

解决！：



![1602757602275](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602757602275.png)



上面的属性要加给谁，得看这个属性是属于谁的？! menu 的！

```vue
 <el-menu
          background-color="rgb(49,54,67)"
          text-color="#fff"
          active-text-color="rgb(83,185,255)"
          unique-opened
        >
```

搞定！

![1602757896635](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602757896635.png)



优化整个菜单栏右侧的边框线！

![1602759091281](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602759091281.png)

变得平滑了！



#### 04 实现左侧菜单的折叠与展开功能！



![1602775355548](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602775355548.png)



![1602776032018](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602776032018.png)



出现问题之后你要知道是什么导致的这个问题！







#### 05 实现首页路由的重定向



新建欢迎组件，然后再路由中导入这个组件

待补充！



#### 06 点击不同的二级菜单可以在右侧主体区域切换显示不同的组件页面



![1602834981820](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602834981820.png)

第一步：为整个menu菜单开启路由模式：


```
router=“true”
```

```html
  <!-- 侧！边栏菜单区域 -->
        <el-menu
          background-color="rgb(49,54,67)"
          text-color="#fff"
          active-text-color="rgb(83,185,255)"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
        >
```

第二步：接下来通过index属性帮助我们获取跳转地址 subItem.path 但是他并没有以斜线开头 ， 所以再前面加上一个斜线就行了！



```html
<!-- 二级菜单！ -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
```

![1602836023133](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602836023133.png)



#### 07 用户管理菜单中用户列表的开发

- ​	001 点击用户列表在右侧展示出列表这个组件
- 第一步创建用户列表这个链接对应的那个的组件页面
  - 在VUE的项目名中使用组件的方式
  - 第一步：先创建一个组件
  - 第二步：在路由的js文件中导入新创建的组件
  - 第三步：再路由实例中添加新的规则
- 

```
  { path: '/home', component: Home, redirect: '/welcome', children: [{ path: '/welcome', component: Welcome }, { path: '/users', component: Users}] }
```



#### 08 - 解决用户列表的小问题-链接高亮问题！

![1602837395815](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602837395815.png)



第一步： 

- 给二级事件都绑定一个单击事件，再单击事件中把咱们的path值存储起来！





#### 09 绘制用户列表组件的基本UI结构



01 头部是一个面包屑的导航区！

![1602840223592](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1602840223592.png)

同样的，下一步就是进行组件的按需导入！

再插件的文件夹下面的js文件中进行文件导入！



```html
  <!-- 卡片视图区域 -->
    <el-card>
      <div>
        <!-- 搜索与添加区域 -->

        <el-row :gutter="20">
          <el-col :span="8">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"> </el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
              <el-button type="primary">添加用户</el-button>
          </el-col>
        </el-row>
        <!-- 搜索与添加区域 -->
      </div>
    </el-card>
    <!-- 卡片视图区域 -->
```

el-col是每一列，列的宽度由span的大小来决定！列于列的间隙可以使用gutter来控制！





## ◆用户管理模块

## ◆权限管理模块

## ◆分类管理模块

## ◆参数管理模块

## ◆商品管理模块

## ◆订单管理模块

## ◆数据统计模块











