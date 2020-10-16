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
            <el-table-column label="#" type="index"></el-table-column>
           <el-table-column label="姓名" prop="username"></el-table-column>
           <el-table-column label="电话" prop="mobile"></el-table-column>
           <el-table-column label="邮箱" prop="email"></el-table-column>
           <el-table-column label="角色" prop="role_name"></el-table-column>
           <el-table-column label="状态" prop="mg_state">
               <!-- 这儿我有打错了了一个单词 害我找了好一会的错误！ slot-scope="scope" 就是这个 我原来打成了-->
               <template slot-scope="scope">
                   <!-- {{scope.row}} -->
                   <el-switch v-model="scope.row.mg_state">
                    </el-switch>
               </template>
           </el-table-column>
           <el-table-column label="操作" width="300px">
               <!-- 用 slot-scope="scope" 可以接收作用域插槽的数据 -->
               <template>
                   <!-- 修改按钮 -->
                   <el-button type="primary" icon="el-icon-edit" size="mini">修改</el-button>
                   <!-- 删除按钮 -->
                   <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                   <!-- 分配角色按钮 -->
                    <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                    <el-button type="warning" icon="el-icon-setting" size="mini">渲染</el-button>
                    </el-tooltip>
               </template>
           </el-table-column>
        </el-table>
        <!-- 用户列表区域 -->

        <!-- 分页区域 -->
        <!-- :current-page="queryInfo.pagenum" 显示当前页！ -->
        <!--  :page-size="100" 当前情况下每页显示多少条数据 -->
        <!--  layout="total, sizes, prev, pager, next, jumper" 用来展示页面上展示多少功能组件 -->
        <!--  :total="400"> 展示我们有多少条数据 -->
           <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        <!-- 分页区域 -->
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
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
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
    },
    // 监听pagesize 改变的事件(只要切换了页面页数的菜单 就会触发这个事件！)
    handleSizeChange: function (newSize) {
      console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // 【监听 页码值 改变的事件】 只要你的页码值发生了切换就会触发这个事件
    handleCurrentChange: function (newPage) {
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getUserList()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
