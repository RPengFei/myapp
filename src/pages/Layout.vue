<template>
  <div>
    <myhader></myhader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import myhader from "../components/Header";
export default {
  components: {
    myhader,
  },
};
</script>

<style>
.body {
  width: 1200px;
  margin: auto;
}
</style>
