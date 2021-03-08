<template>
  <el-carousel :interval="4000" type="card" width="800px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img :src="item.src" width="100%" />
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