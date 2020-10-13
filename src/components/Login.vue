/* 这是一个单文件组件 由三部分组成
1 结构
2 样式
3 行为 */
<template>
  <div class="login-container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 开始 -->
      <el-form :model="loginForm" label-width="0px" class="login_form">
        <!-- 用户名： -->
        <el-form-item>
          <!--  prefix-icon="el-icon-search" 表示输入框前面的小图标！ -->
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghuming"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 登录表单区域 结束 -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    // data 是一个函数 返回的是一个对象
    return {
      // 这是登录表单的数据绑定对象！
      loginForm: {
        username: 'lvhang',
        password: '23'
      }
    };
  }
};
</script>

<style lang="less" scoped>
/* // lang="less" 表示这个节点中支持less语法格式
// scoped 是一个vue的指令 是用来控制组件的样式的生效的区间！
// 只要是一个单文件组件 我们样式都推荐加上scoped属性！因为不会影响到其他的组件！从而防止组件之间的样式冲突！ */
.login-container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  //   padding-top: 10px;
  /* // 让盒子在屏幕的正中间显示！ */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    // 给外边框线加上阴影！
    box-shadow: 0 0 10px rgb(102, 40, 40);
    position: absolute;
    left: 50%; // 值为正的话，值越大就越往右边走
    // translate: ;的第二个参数是y轴上的
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

// 登陆表单的样式 开始
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  //   由于EUI里的输入框默认是标准盒子， 所以会撑大我们的盒子，所以得把盒子转换成CSS3 的盒子
  box-sizing: border-box;
}

.btns {
  display: flex;
  // flex-end：弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。
  justify-content: flex-end;
}
// 登陆表单的样式 结束
</style>
