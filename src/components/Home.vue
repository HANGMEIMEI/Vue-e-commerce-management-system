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
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
