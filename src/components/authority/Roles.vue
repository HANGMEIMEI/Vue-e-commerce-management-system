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
              <el-row :class="['bdbottom', i1 === 0 ? 'bdtop' : '']" v-for="(item1, i1) in scope.row.children" :key="item1.id">
                <!-- 渲染一级权限 -->
                <el-col :span="5">
                  <el-tag>
                    {{item1.authName}}
                  </el-tag>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <!-- 渲染二级和三级权限 -->
                <el-col :span="19">
                  <!-- 通过for 循环 嵌套 渲染二级权限  -->
                <!-- eslint-disable-next-line  -->
                  <el-row :class="[i2 === 0 ? '' : 'bdtop']" v-for="(item2, i2) in item1.children" :key="item2.id">
                    <!-- 左边的列  渲染二级权限-->
                    <el-col>
                      <el-tag type="success">
                        {{item2.authName}}
                      </el-tag>
                  <i class="el-icon-caret-right"></i>
                    </el-col>
                    <!-- 右边的列！渲染三级权限 -->
                    <el-col></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <pre>
              {{scope.row}}
              </pre>
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
                  <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>
              </template>
          </el-table-column>
      </el-table>
      <!-- 角色列表区域 -->
    </el-card>
    <!-- 卡片视图区域 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      //   所有角色列表的数据
      rolesList: []
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
</style>
