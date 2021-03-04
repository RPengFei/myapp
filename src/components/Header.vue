<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/" route="/">首页</el-menu-item>
      <el-menu-item index="/todoList" route="/todoList">TodoList</el-menu-item>
      <el-menu-item>
        <span class="user">欢迎回来：{{ this.user.username }}</span>
        <el-button type="warning" @click="loguot">退出登录</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import strong from "../utils/Storage";
import { mapActions, mapState } from "vuex";
export default {
  name: "myhader",
  data() {
    return {
      user: JSON.parse(strong.getItem("user")),
    };
  },
  //辅助函数
  computed: {
    ...mapState(["token"]),
  },
  mounted() {
    console.log();
  },
  methods: {
    loguot: function () {
      this.$confirm("是否退出登录？", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!",
          });
          strong.clear();
          this.$router.push("/login");
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="less">
.el-menu--horizontal .el-menu-item:last-child {
  background: red;
  float: right;
}
.user {
  margin-right: 20px;
}
</style>