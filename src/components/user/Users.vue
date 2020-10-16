// 用户列表组件
<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑导航区域 -->

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
  </div>
</template>

<script>
export default {
  // data 代表当前的私有数据
  data () {
    return {
      // 获取用户的参数列表对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      userlist: [],
      total: 0
    }
  },
  // 生命周期函数
  created () {
    //   发起当前组件的
    this.getUserList()
  },
  // 定义当前组件的一些处理函数
  methods: {
    async getUserList () {
      const { data: res } = await this.$http.get('users', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('请求用户列表数据失败！')
      }
      this.userlist = res.data.userlist
      this.total = res.data.total
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
