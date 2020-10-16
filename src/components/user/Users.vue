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
        <!-- 用户列表区域 -->
        <el-table :data="userlist" border stripe>
           <el-table-column label="姓名" prop="username"></el-table-column>
           <el-table-column label="电话" prop="mobile"></el-table-column>
           <el-table-column label="邮箱" prop="email"></el-table-column>
           <el-table-column label="角色" prop="role_name"></el-table-column>
           <el-table-column label="状态" prop="mg_state"></el-table-column>
           <el-table-column label="操作"></el-table-column>
        </el-table>
        <!-- 用户列表区域 -->
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
      // 我当时打完了之后就说数据怎么就是渲染不出来，原来我获取到的并不是真正的用户列表，我打错单词了！不过，哥还是通过追根朔源的找到了错误，nice！
      this.userlist = res.data.users
      this.total = res.data.total
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
