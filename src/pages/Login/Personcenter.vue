<template>
  <div>
    <button @click="tab">show</button>
    <transition name="fade">
      <h1 v-if="flag">22</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flag: true,
    };
  },
  methods: {
    tab: function () {
      this.flag = !this.flag;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>