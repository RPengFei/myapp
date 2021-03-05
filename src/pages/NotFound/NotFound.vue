<template>
  <div class="header">
    <!-- 标题区域 -->
    <div class="lnner-header">
      <div>
        <h1>404</h1>

        <el-button type="primary" @click="togo">去登录</el-button>
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
export default {
  name: "NotFound",
  methods: {
    togo: function () {
      console.log(3);
      this.$router.push("/login");
    },
  },
};
</script>

<style   scoped>
h1 {
  font-size: 50px;
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