<template>
  <div>
    <el-carousel :interval="4000" type="card" height="300px" width="700px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>

    <list :list="domain_list" :headerConfig="headerConfig"></list>

    <h1>{{ $store.state.name }}</h1>
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
    //   servername: "updatePerson",
    //   data: {
    //     id: "603ef159e25ff239e38c0eb4",
    //     phone: "18855556666",
    //   },
    // };

    // this.$axios.post("/api/api_list", data).then((res) => {
    //   console.log(res);
    // });

    this.$axios
      .post("/api/api_list", {
        servername: "file",
        data: { file: "list" },
      })
      .then((res) => {
        console.log(res);
        if (res.domain_list) {
          this.domain_list = res.domain_list;
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
      headerConfig: [
        { prop: "id", label: "ID" },
        { prop: "name", label: "名称" },
        { prop: "url", label: "地址" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scope>
</style>