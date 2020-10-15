// 同样是一个单文件组件
<template>
  <el-container class="home-container">
    <!-- 头部区域 开始-->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 头部区域 结束-->

    <!-- 页面主体区域 开始 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
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
      </el-aside>
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
// 头部区域的样式
.el-header {
  background-color: rgb(49, 55, 58);
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

.el-aside {
  background-color: rgb(49, 54, 67);
}

.el-main {
  background-color: #eaedf1;
}
</style>
