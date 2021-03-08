<template>
  <div class="header">
    <!-- 标题区域 -->
    <div class="lnner-header">
      <div id="loginAndRegister">
        <div class="login" v-show="showLogin == 1">
          <h1>登录</h1>
          <div class="line">
            <input
              type="text"
              v-model.trim="loginForm.phone"
              placeholder="手机号"
              @blur="checkLoginPhone"
            />
            <p class="tips">
              <i class="el-icon-warning-outline" v-show="loginTips.phoneTips">{{
                loginTips.phoneTips
              }}</i>
            </p>
          </div>
          <div class="line">
            <input
              type="password"
              v-model.trim="loginForm.password"
              placeholder="密码"
              @blur="checkLoginPassword"
              @keyup.enter="submitForm"
            />
            <p class="tips">
              <i
                class="el-icon-warning-outline"
                v-show="loginTips.passwordTips"
                >{{ loginTips.passwordTips }}</i
              >
            </p>
          </div>

          <el-button type="primary" @click="submitForm">登录</el-button>
          <div class="link">
            <a class="togoRegister" @click="tab('2')">立即注册</a>
          </div>
        </div>

        <div class="register" v-show="showLogin != 1">
          <h1>注册</h1>
          <div class="line">
            <input
              type="text"
              v-model.trim="register.phone"
              placeholder="手机号"
              @blur="checkRegPhone"
            />
            <p class="tips">
              <i
                class="el-icon-warning-outline"
                v-show="registerTips.phoneTips"
                >{{ registerTips.phoneTips }}</i
              >
            </p>
          </div>
          <div class="line">
            <input
              type="password"
              v-model.trim="register.password"
              placeholder="密码"
              @blur="checkRegPassword"
            />
            <p class="tips">
              <i
                class="el-icon-warning-outline"
                v-show="registerTips.passwordTips"
                >{{ registerTips.passwordTips }}</i
              >
            </p>
          </div>
          <div class="line">
            <input
              type="password"
              v-model.trim="register.confirmpassword"
              placeholder="确认密码"
              @blur="checkRegConfirmPassword()"
              @keyup.enter="registerSubmitForm"
            />
            <p class="tips">
              <i
                class="el-icon-warning-outline"
                v-show="registerTips.confirmpasswordTips"
                >{{ registerTips.confirmpasswordTips }}</i
              >
            </p>
          </div>
          <el-button type="primary" @click="registerSubmitForm">注册</el-button>
          <div class="link">
            <a class="togoRegister" @click="tab('1')">去登录</a>
          </div>
        </div>
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
      showLogin: 1,
      loginForm: {
        phone: "",
        password: "",
      },
      loginTips: {
        phoneTips: "",
        passwordTips: "",
      },
      register: {
        phone: "",
        password: "",
        confirmpassword: "",
      },
      registerTips: {
        phoneTips: "",
        passwordTips: "",
        confirmpasswordTips: "",
      },
    };
  },
  methods: {
    tab(type) {
      this.showLogin = type;
    },
    checkLoginPhone() {
      if (!this.loginForm.phone) {
        this.loginTips.phoneTips = "请填写手机号";
      } else {
        if (/^(1[3,4,5,6,7,8,9])\d{9}$/.test(this.loginForm.phone)) {
          this.loginTips.phoneTips = "";
          return true;
        } else {
          this.loginTips.phoneTips = "手机号格式错误";
          return false;
        }
      }
    },
    checkLoginPassword() {
      if (!this.loginForm.password) {
        this.loginTips.passwordTips = "请填写密码";
      } else {
        if (
          /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*+_-])|(?=.*\d)(?=.*[#@!~%^&*+_-])){8,18}/i.test(
            this.loginForm.password
          )
        ) {
          this.loginTips.passwordTips = "";
          return true;
        } else {
          this.loginTips.passwordTips =
            "安全等级低，至少包含数字、字母、符号中两种组合";
          return false;
        }
      }
    },
    submitForm() {
      if (!this.checkLoginPhone() | !this.checkLoginPassword()) {
        return;
      }
      console.log(this.loginForm);

      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$axios
        .post("/api/api_list", {
          servername: "login",
          data: this.loginForm,
        })
        .then((res) => {
          console.log(res);
          loading.close();

          if (res.token) {
            strong.clear();
            strong.setItem("token", res.token);
            strong.setItem("user", res.buser);
            this.$router.push("/");
          } else {
            this.$message.error("用户名或密码错误！");
          }
        });
    },
    checkRegPhone() {
      if (!this.register.phone) {
        this.registerTips.phoneTips = "请填写手机号";
      } else {
        if (/^(1[3,4,5,6,7,8,9])\d{9}$/.test(this.register.phone)) {
          this.registerTips.phoneTips = "";
          return true;
        } else {
          this.registerTips.phoneTips = "手机号格式错误";
          return false;
        }
      }
    },
    checkRegPassword() {
      if (!this.register.password) {
        this.registerTips.passwordTips = "请填写密码";
      } else {
        if (
          /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*+_-])|(?=.*\d)(?=.*[#@!~%^&*+_-])){8,18}/i.test(
            this.register.password
          )
        ) {
          this.registerTips.passwordTips = "";
          return true;
        } else {
          this.registerTips.passwordTips =
            "安全等级低，至少包含数字、字母、符号中两种组合";
          return false;
        }
      }
    },
    checkRegConfirmPassword() {
      if (!this.register.confirmpassword) {
        this.registerTips.confirmpasswordTips = "请填写密码";
        return false;
      }
      if (this.register.password === this.register.confirmpassword) {
        this.registerTips.confirmpasswordTips = "";
        return true;
      } else {
        this.registerTips.confirmpasswordTips = "两次密码不一致";
        return false;
      }
    },
    registerSubmitForm() {
      console.log(this.register);
      if (
        !this.checkRegPhone() |
        !this.checkRegPassword() |
        !this.checkRegConfirmPassword()
      ) {
        return;
      }

      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$axios
        .post("/api/api_list", {
          servername: "register",
          data: this.register,
        })
        .then((res) => {
          console.log(res);
          if (res.code == 1) {
            this.$message({
              message: "添加成功！快去登录吧！",
              type: "success",
            });
            this.showLogin = 1;
          } else {
            this.$message({
              message: res.msg,
              type: "warning",
            });
          }
          loading.close();
        });
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
#loginAndRegister {
  width: 440px;
  background: #fff;
  padding: 10px;
  -webkit-box-shadow: 0px 35px 44px -22px rgb(0 0 0 / 72%);
  -moz-box-shadow: 0px 35px 44px -22px rgba(0, 0, 0, 0.72);
  box-shadow: 0px 35px 44px -22px #1f181b;
  border-radius: 12px;
  h1 {
    text-align: left;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0;
    padding: 18px 0 17px 0;
  }
  .el-button--primary {
    width: 100%;
    margin: 0 0 22px 0;
    padding: 20px 0;
    border-radius: 12px;
    font-size: 15px;
    font-weight: bold;
    background-color: #2196f3;
  }

  .line {
    margin: 10px auto;
    i {
      margin-right: 4px;
      font-size: 14px;
    }
  }
  .tips {
    color: #e30000;
    text-align: left;
    margin: 8px 2px;
    font-size: 12px;
    height: 15px;
  }
  input {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 55px;
    line-height: 55px;
    outline: 0;
    padding: 0 15px;
    border-radius: 10px;
    transition: all 0.3s;
    width: 100%;
  }
  input:hover {
    border: 3px solid #2196f3;
  }
  .link {
    text-align: left;
    margin: 10px 0 16px 2px;
  }
  .togoRegister {
    color: #1e7ee1;
    font-size: 16px;
    line-height: 1.47059;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
  }
  .el-icon-warning-outline:before {
    margin-right: 4px;
  }
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
  color: #1d1d1f;
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