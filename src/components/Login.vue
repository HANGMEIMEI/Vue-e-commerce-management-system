// 这是一个单文件组件 由三部分组成
// 1 结构
// 2 样式
// 3 行为
<template>
  <div class="login-container">登录组件</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// lang="less" 表示这个节点中支持less语法格式
// scoped 是一个vue的指令 是用来控制组件的样式的生效的区间！
// 只要是一个单文件组件 我们样式都推荐加上scoped属性！因为不会影响到其他的组件！从而防止组件之间的样式冲突！
.login-container {
  background-color: #2b4b6b;
  height: 100%;
}
</style>
