<template>
  <el-carousel :interval="4000" type="card" height="300px" width="700px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img :src="item.src" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Slider",
  props: {
    imgList: Array,
  },
};
</script>

<style>
</style>