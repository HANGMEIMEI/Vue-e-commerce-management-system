// 同样是一个单文件组件
<template>
  <el-container class="home-container">
    <!-- 头部区域 开始-->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
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

.el-aside {
  background-color: rgb(49,54,67);
}

.el-main {
  background-color: #EAEDF1;
}
</style>
