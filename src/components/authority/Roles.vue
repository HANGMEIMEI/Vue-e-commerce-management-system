<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑导航区域 -->
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 添加角色按钮区域 -->
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 添加角色按钮区域 -->
      <!-- 角色列表区域 -->
      <el-table :data="rolesList" border stripe>
          <!-- 展开列 -->
          <el-table-column type="expand">
            <template slot-scope="scope">
              <!-- 放置一个栅格系统的布局组件 -->
              <el-row :class="['bdbottom', i1 === 0 ? 'bdtop' : '', 'vcenter']" v-for="(item1, i1) in scope.row.children" :key="item1.id">
                <!-- 渲染一级权限 -->
                <el-col :span="5">
                  <el-tag closable @close="removeRightById(scope.row, item1.id)">
                    {{item1.authName}}
                  </el-tag>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <!-- 渲染二级和三级权限 -->
                <el-col :span="19">
                  <!-- 通过for 循环 嵌套 渲染二级权限  -->
                <!-- eslint-disable-next-line  -->
                  <el-row :class="[i2 === 0 ? '' : 'bdtop', 'vcenter']" v-for="(item2, i2) in item1.children" :key="item2.id" :span="6">
                    <!-- 左边的列  渲染二级权限-->
                    <el-col :span="6">
                      <el-tag type="success" closable @close="removeRightById(scope.row, item2.id)">
                        {{item2.authName}}
                      </el-tag>
                  <i class="el-icon-caret-right"></i>
                    </el-col>
                    <!-- 右边的列！渲染三级权限 -->
                    <el-col :span="18">
                <!-- eslint-disable-next-line  -->
                      <el-tag type="warning" v-for="(item3, i3) in item2.children" :key="item3" closable @close="removeRightById(scope.row, item3.id)">
                        {{item3.authName}}
                      </el-tag>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <!-- <pre>
              {{scope.row}}
              </pre> -->
            </template>
          </el-table-column>
          <!-- 索引列 -->
          <el-table-column type="index"></el-table-column>
          <el-table-column label="角色名称" prop="roleName"></el-table-column>
          <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
          <!-- 操作这一列需要用到作用域插槽！ -->
          <el-table-column label="操作" width="285px">
                <!-- eslint-disable-next-line  -->
              <template slot-scope="scope">
                  <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
                  <el-button size="mini" type="warning" icon="el-icon-setting" @click="showSetRightDialog(scope.row)">分配权限</el-button>
              </template>
          </el-table-column>
      </el-table>
      <!-- 角色列表区域 -->
    </el-card>
    <!-- 卡片视图区域 -->

    <!-- 分配权限的对话框 -->
    <el-dialog
    title="分配权限"
    :visible.sync="setRightDialogVisible"
    width="50%" @close="setRightDialogClosed">
    <!-- 分配权限的树型控件 -->
    <el-tree :data="rightList" :props="treeProps" show-checkbox node-key="id" default-expand-all :default-checked-keys="defKeys" ref="treeRef"></el-tree>
    <!-- 分配权限的树型控件 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="setRightDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="setRightDialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
    <!-- 分配权限的对话框 -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      //   所有角色列表的数据
      rolesList: [],
      // 控制分配权限对话框的显示与隐藏
      setRightDialogVisible: false,
      // 所有权限的数据！
      rightList: [],
      // 树形控件的属性绑定对象
      treeProps: {
        label: 'authName',
        children: 'children'
      },
      // 默认选中的节点id值 数组
      defKeys: [],
      // 当前即将分配权限的角色id
      roleId: ''
    }
  },
  created () {
    this.getRolesList()
  },
  methods: {
    // 获取所有角色的列表！
    async getRolesList () {
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status !== 200) {
        return this.$message.error('获取角色列表失败！')
      }
      this.rolesList = res.data
      console.log(this.rolesList)
    },
    // 根据ID删除对应的权限！
    async removeRightById (role, rightId) {
    // 弹框提示用户是否要删除！
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('您取消了删除！')
      }
      console.log('您确认了删除！')
      // 发起删除的业务请求！
      const { data: res } = await this.$http.delete(`roles/${role.id}/rights/${rightId}`)
      if (res.meta.status !== 200) {
        this.$message.error('删除失败！')
      }
      // 不建议调用下面的事件， 因为他会让页面再一次进行完整的渲染！
      // this.getRolesList()
      // 把删除了权限的页面直接赋值给角色页面， 就不用重新渲染页面了!， 这是提升用户体验性的操作!
      role.children = res.data
    },
    // 分配权限的业务逻辑！[展示分配权限的对话框!]
    async showSetRightDialog (role) {
      // 获取所有权限的数据！
      const { data: res } = await this.$http.get('rights/tree')
      if (res.meta.status !== 200) {
        this.$message.error('获取权限列表数据失败！')
      }
      // 把获取到的权限数据保存到 data 中！
      this.rightList = res.data
      console.log(this.rightList)
      // 递归获取三级节点的id
      this.getLeafKeys(role, this.defKeys)
      this.setRightDialogVisible = true
    },
    // 通过递归的形式， 获取角色下所有三级权限的id， 并保存到 defKeys 数组中！
    getLeafKeys (node, arr) {
      // 如果当前 node 节点 不包含 children 属性， 则是三级节点
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach(item =>
        this.getLeafKeys(item, arr)
      )
    },
    // 监听对话框的关闭事件
    setRightDialogClosed () {
      this.defKeys = []
    }
  }
}
</script>

<style lang="less" scoped>
.el-tag {
  margin: 7px;
}

.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
/*  设置一级权限上的纵向居中对齐！ */
.vcenter {
  display: flex;
  align-items: center;
}
</style>
