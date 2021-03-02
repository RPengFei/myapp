<template>
  <div class="header">
    <!-- 标题区域 -->
    <div class="lnner-header">
      <div class="login">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-user-solid"></i> 登录</span>
            <el-form
              :model="loginForm"
              :rules="rules"
              ref="loginForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="username">
                <el-input
                  v-model="loginForm.username"
                  prefix-icon="el-icon-s-custom"
                ></el-input>
              </el-form-item>

              <el-form-item label="用户密码" prop="password">
                <el-input
                  prefix-icon="el-icon-key"
                  placeholder="请输入密码"
                  v-model="loginForm.password"
                  show-password
                ></el-input>
              </el-form-item>

              <el-button type="primary" @click="submitForm('loginForm')"
                >登录</el-button
              >
            </el-form>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-user"></i>注册</span>
            <el-form
              :model="register"
              :rules="registerRules"
              ref="register"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="register.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="register.password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="confirmpassword">
                <el-input v-model="register.confirmpassword"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="register.phone"></el-input>
              </el-form-item>

              <el-button type="primary" @click="registerSubmitForm('register')"
                >登录</el-button
              >
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 波浪区域 -->
    <div>
      <!-- svg 形状 -->
      <svg
        class="waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <!-- 形状容器 -->
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <!-- 组合形状 -->
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
import strong from "../../utils/Storage";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
      register: {
        username: "",
        password: "",
        confirmpassword: "",
        phone: "",
      },
      registerRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.loginForm);
          this.$axios
            .post("/api/api_list", {
              servername: "login",
              data: this.loginForm,
            })
            .then((res) => {
              console.log(res);
              if (res.token) {
                strong.setItem("token", res.token);
                this.$router.push("/");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.loginForm);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.line {
  margin: 30px 0;
}

h1 {
  font-family: "Lato", "sans-serif";
  font-weight: 300;
  /* font-spacing:2px; */
  font-size: 48px;
}

.login {
  width: 440px;
  box-shadow: 2px 2px 15px #fff;
  background: #fff;
  background: rgba(4, 4, 4, 0.56);
  -webkit-box-shadow: 0px 35px 44px -22px rgb(0 0 0 / 72%);
  -moz-box-shadow: 0px 35px 44px -22px rgba(0, 0, 0, 0.72);
  box-shadow: 0px 35px 44px -22px #1f181b;
  padding: 60px 40px;
}
.el-form-item {
  padding-right: 55px;
}
.header {
  position: relative;
  text-align: center;
  /* 背景渐变 */
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: wheat;
}

.lnner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
  /* flex */
  /* 垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /* 最小值 */
  min-height: 100px;
  /* 最大值 */
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

/* 选择的一个use */
.parallax > use:nth-child(1) {
  /* 延迟 2s 执行 */
  animation-delay: -2s;
  /* 7s 内 执行完毕 */
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

/* 动画 */
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* 当屏幕小于 768px 执行 */
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  h1 {
    font-size: 24px;
  }
}
</style>