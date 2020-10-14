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
