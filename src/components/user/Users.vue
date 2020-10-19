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
            <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
              <el-button slot="append" icon="el-icon-search" @click="getUserList"> </el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
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
                   <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)">
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
    <!-- Dialog 添加用户模态对话框区域 -->
    <!-- title就是模态对话框的 标题！   :visible.sync 是一个属性绑定， 用来控制模态对话框的显示与隐藏! 需要把他绑定到一个布尔值身上!   :before-close 在对话框关闭之前会触发这个事件   -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      >
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="addForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="addForm.password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addForm.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="addForm.phone"></el-input>
      </el-form-item>
      </el-form>
      <!-- 对话框的底部区域 -->
      <span slot="footer" class="dialog-footer">
        <!-- 只要点击了取消或者确定的按钮 都会关闭 对话框! -->
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
      <!-- 对话框的底部区域 -->
    </el-dialog>
    <!-- Dialog 添加用户模态对话框区域 -->
  </div>
</template>

<script>
export default {
  // data 代表当前的私有数据
  data () {
    // 验证邮箱的规则
    // rule 验证规则
    // value 待校验的value值
    // callback 回调函数
    /* eslint-disable */
    var checkEmail = (rule, value, callback) => {
      // 用正则实现规则的校验
      // 验证邮箱的正则表达式
      const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      // 判断邮箱的合法性!
      if (regEmail.test(value)) {
        return callback()
      }

      callback(new Error('请输入合法的邮箱！'))
    }
    // 校验手机号的验证规则
    var checkPhone = (rule, value, callback) => {
      // 验证手机号的正则表达式
      const regPhone = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/
      // 判断手机的合法性！
      if (regPhone.test(value)) {
        return callback()
      }
      callback(new Error('请输入合法的手机号')) 
    }
    /* eslint-disable */

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
      total: 0,
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        username: '',
        password: '',
        email: '',
        phone: ''
      },
      // 添加表单的验证规则对象
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 10, message: '用户名的长度在3~10个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码的长度在6~15个字符之间', trigger: 'blur' }],
        email: [{ required: true, message: '请输入你的邮箱', trigger: 'blur' }, { validator: checkEmail, trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入你的手机号', trigger: 'blur' }, { validator: checkPhone, trigger: 'blur' }]
      }
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
    },
    // 【监听switch 开关状态的改变】switch开关的行为事件
    async userStateChanged (userinfo) {
      console.log(userinfo)
      // 调用API接口 保存switch 开关的状态
      // 我也搞不懂这儿为什么要使用模板字符串
      const { data: res } = await this.$http.put(`users/${userinfo.id}/state/${userinfo.mg_state}`)
      if (res.meta.status !== 200) {
        // 将当前的开关状态取反
        userinfo.mg_state = !userinfo.mg_state
        return this.$message.error('更新用户状态失败！')
      } else {
        return this.$message.success('更新用户状态成功！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
