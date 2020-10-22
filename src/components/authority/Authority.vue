<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑导航区域 -->

    <!-- 卡片视图区域 -->
    <el-card>lvhang</el-card>
    <!-- 卡片视图区域 -->
  </div>
</template>

<script>
// 行为
export default {
  data () {
    return {
      // 所有的权限列表
      authorityList: []
    }
  },
  // 在生命周期函数中发起数据请求
  created () {
    // 获取所有的权限列表
    this.getAuthorityList()
  },
  methods: {
    // 获取权限列表
    async getAuthorityList () {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败！')
      }
      this.authorityList = res.data
      console.log(this.authorityList)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
