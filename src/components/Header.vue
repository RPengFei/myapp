<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/" route="/">首页</el-menu-item>
      <el-menu-item index="/todoList" route="/todoList">TodoList</el-menu-item>
      <el-menu-item index="/login" route="/login">Login</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "myhader",
  data() {
    return {
      activeIndex: "",
    };
  },
  methods: {},
  mounted() {
    //获取地址栏中的路由，设置elementui中的导航栏选中状态
    this.activeIndex = this.$route.path;
    console.log(this.$route.path);
  },
};
</script>
<style lang="less">
.el-menu--horizontal .el-menu-item:last-child {
  background: red;
  float: right;
}
</style>