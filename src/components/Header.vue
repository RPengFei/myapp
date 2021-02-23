<template>
  <header>
    <img src="../../public/img/tx.jpg" alt="" />
    <span>头部组件</span>
  </header>
</template>
<script>
export default {
  name: "myhader",
};
</script>
<style lang="less">
header {
  width: 100vh;
  height: 50px;
  box-shadow: 2px 2px 2px #eee;

  img {
    width: 50px;
  }
}
</style>