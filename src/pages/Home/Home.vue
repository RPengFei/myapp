<template>
  <div>
    <h1>Home</h1>
    <el-row>
      <el-button type="success">成功按钮</el-button>
    </el-row>
    <ul>
      <li>{{ this.user.id }}</li>
      <li>{{ this.user.phone }}</li>
      <li>{{ this.user.username }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted: function () {
    axios.post("/node/getData").then((res) => {
      console.log(res);
      this.user = res.data;
    });
  },
  data: function (params) {
    return {
      user: {},
    };
  },
};
</script>

<style lang="less">
@color: red;
h1 {
  color: @color;
  font-size: 0.5rem;
}
</style>