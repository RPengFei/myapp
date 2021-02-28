<template>
  <div>
    <myhader></myhader>
    <router-view></router-view>
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
