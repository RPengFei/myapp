<template>
  <div>
    <el-carousel :interval="4000" type="card" height="300px" width="700px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>

    <list :list="domain_list"></list>
  </div>
</template>

<script>
import list from "../../components/list";
export default {
  components: {
    list,
  },
  mounted: function () {
    // var data = {
    //   servername: "register",
    //   data: {
    //     username: "user1",
    //     password: "123456",
    //   },
    // };

    // this.$axios.post("/local", data);

    this.$axios
      .post("/local", {
        data: "list",
      })
      .then((res) => {
        console.log(res);

        console.log(res.data.domain_list);
        if (res.data) {
          this.domain_list = res.data.domain_list;
        }
      });

    for (let index = 0; index < 5; index++) {
      this.imgList.push({
        id: index,
        src:
          "https://picsum.photos/700/300?random=" +
          Math.ceil(Math.random() * 10),
      });
    }
  },
  data: function (params) {
    return {
      imgList: [],
      domain_list: [],
    };
  },
  methods: {},
};
</script>

<style lang="less" scope>
</style>