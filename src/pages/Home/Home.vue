<template>
  <div>
    <!-- 轮播 -->
    <Slider :imgList="imgList"></Slider>
    <h2>动态表头</h2>
    <list :list="domain_list" :headerConfig="headerConfig"></list>

    <h2>VUEX</h2>
    <p>vuex-name状态: {{ $store.state.name }}</p>
  </div>
</template>

<script>
import list from "../../components/list";
import Slider from "../../components/Slider";
export default {
  components: {
    list,
    Slider,
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
h2 {
  text-align: center;
}
</style>