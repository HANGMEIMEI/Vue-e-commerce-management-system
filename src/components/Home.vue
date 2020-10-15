// 同样是一个单文件组件
<template>
  <el-container class="home-container">
    <!-- 头部区域 开始-->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 头部区域 结束-->

    <!-- 页面主体区域 开始 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧！边栏菜单区域 -->
        <el-menu
          background-color="rgb(49,54,67)"
          text-color="#fff"
          active-text-color="rgb(83,185,255)"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <!-- 一级菜单！ -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单的模板区域！ -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 里面的文本！ -->
              <span class="juli">{{item.authName}}</span>
            </template>

            <!-- 二级菜单！ -->
            <el-menu-item :index="subItem.id +''" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 里面的文本！ -->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由的占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 页面主体区域 结束 -->
  </el-container>
</template>
<script>
export default {
  // 把立即获取到的数据放到我们自己的data中
  data () {
    return {
      // 左侧菜单数据
      menuList: [],
      // 定义一个字体图标的对象
      iconsObj: {
        125: 'iconfont icon-yonghuguanli',
        103: 'iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-',
        101: 'iconfont icon-shangpinguanli',
        102: 'iconfont icon-dingdanguanli',
        145: 'iconfont icon-shujutongji'
      },
      // 是否折叠 默认代表不折叠！
      isCollapse: false
    }
  },
  // 整个页面刚一加载的时候就应该立即获取左侧菜单数据
  // 我们在行为区域定义一个生命周期函数
  created () {
    this.getMenuList()
  },
  methods: {
    logout: function () {
      // 清空sessionStorage中存储的内容
      window.sessionStorage.clear()
      // 清除完内容后 把当前页面重定向到登录页面
      this.$router.push('/login')
    },
    // 获取所有的菜单！
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.console.error(res.meta.msg)
      this.menuList = res.data
      console.log(res)
      console.log(this.menuList)
    },
    // 点击按钮，切换菜单的折叠与展开！
    toggleCollapse: function (a) {
      // console.log(a)
      // 进行isCollapse的取反操作！
      this.isCollapse = !this.isCollapse
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
  background-color: rgb(49, 55, 58);
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
  background-color: rgb(49, 54, 67);
  // 解决选中的边框线
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

// 修改文字图标和菜单之间的距离
.iconfont {
  margin-right: 10px;
}

.juli {
  vertical-align: top;
}

// 折叠与展开功能的样式
.toggle-button {
  background-color: rgb(72,82,100);
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  // letter-spacing 属性增加或减少字符间的空白（字符间距）。
  // 该属性定义了在文本字符框之间插入多少空间。由于字符字形通常比其字符框要窄，指定长度值时，会调整字母之间通常的间隔。因此，normal 就相当于值为 0。
  // 注释：允许使用负值，这会让字母之间挤得更紧。
  letter-spacing: 0.2em;
  // 鼠标经过变成小手！
  cursor: pointer;
}
</style>
