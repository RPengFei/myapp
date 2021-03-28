<template>
  <div class="bars">
    <ul class="menu">
      <router-link :to="'home'" tag="li" active-class="active"
        >首页</router-link
      >
      <router-link :to="'TodoList'" tag="li" active-class="active"
        >TodoList</router-link
      >

      <router-link
        :to="'Login'"
        tag="li"
        active-class="active"
        class="user"
        v-if="!this.user"
        >登录</router-link
      >

      <li class="user" @click="showLoginOut" v-if="this.user">
        欢迎回来：{{ this.user.phone }}
        <ul class="logout" v-if="showLogout">
          <li>
            <i class="el-icon-user"></i>
            个人中心
          </li>
          <li>
            <i class="el-icon-setting"></i>
            设置
          </li>
          <li @click="loguot">
            <i class="el-icon-delete"></i>
            退出登录
          </li>
        </ul>
      </li>
    </ul>
    <!-- <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/home" route="/home">首页</el-menu-item>
      <el-menu-item index="/todoList" route="/todoList">TodoList</el-menu-item>
      <el-menu-item v-if="this.user" style="float: right">
        <span class="user">欢迎回来：{{ this.user.phone }}</span>
        <el-button type="warning" @click="loguot">退出登录</el-button>
      </el-menu-item>
    </el-menu> -->
  </div>
</template>
<script>
import strong from "../utils/Storage";
import { mapActions, mapState } from "vuex";
export default {
  name: "myhader",
  data() {
    return {
      user: strong.getItem("user"),
      showLogout: false,
    };
  },
  //辅助函数
  computed: {
    ...mapState(["token"]),
  },
  mounted() {
    this.bodyListener = (e) => {
      this.showLogout = false;
    };
    document.body.addEventListener("click", this.bodyListener, true);
  },
  methods: {
    showLoginOut: function name() {
      this.showLogout = true;
    },
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
          this.user = null;
          this.$router.push("/home");
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="less" scope>
.bars {
  width: 100%;
  background-image: linear-gradient(
    to right,
    #434343 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  height: 48px;
  margin-bottom: 10px;
}
.menu {
  list-style: none;
  clear: both;
  color: #f5f5f7;
  width: 1200px;
  margin: 0 auto;
}
.menu > li {
  float: left;
  width: 100px;
  text-align: center;
  height: 48px;
  line-height: 48px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  font-size: 13px;
  position: relative;
}
.menu > li.active {
  opacity: 1;
}
.menu > li:not(.user):hover {
  opacity: 1;
}
.menu .user {
  float: right;
  width: auto;
  z-index: 100;
  opacity: 1;
  color: #ffffffd6;
}
.active {
  opacity: 1;
  text-shadow: 2px 1px 10px #fff;
}
.logout::before {
  left: 50%;
  border: 1px solid;
  content: "";
  display: block;
  position: absolute;
  top: -8.5px;
  width: 10px;
  height: 10px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  z-index: 1;
  background: #fff;
  border-color: #d2d2d7;
  border-radius: 2px 0 0 0;
  border-bottom: 0;
  border-right-color: #fff;
}
.logout {
  background: #ffffff;
  list-style: none;
  position: absolute;
  color: #06c;
  border: 1px solid #d2d2d7;
  border-radius: 12px;
  width: 160px;
  margin-top: 6px;
  padding: 10px;
}
.logout li {
  border-bottom: 1px solid #d2d2d7;
  transition: all 0.3s;
  text-align: left;
  padding-left: 10px;
}
.logout li i {
  margin-right: 5px;
}
.logout li:hover {
  text-decoration: underline;
}
</style>