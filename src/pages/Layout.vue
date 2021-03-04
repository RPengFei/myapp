<template>
  <div>
    <myhader></myhader>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
