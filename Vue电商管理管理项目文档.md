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











## ◆主页布局





## ◆用户管理模块

## ◆权限管理模块

## ◆分类管理模块

## ◆参数管理模块

## ◆商品管理模块

## ◆订单管理模块

## ◆数据统计模块











