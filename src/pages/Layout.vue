<template>
  <div>
    <myhader></myhader>
    <keep-alive>
      <transition>
        <router-view></router-view>
      </transition>
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
