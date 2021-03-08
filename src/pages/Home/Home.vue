<template>
  <div>
    <!-- 轮播 -->
    <keep-alive>
      <Slider :imgList="imgList"></Slider>
    </keep-alive>
    <div class="body">
      <h2>动态表头</h2>
      <keep-alive>
        <list :list="domain_list" :headerConfig="headerConfig"></list>
      </keep-alive>
    </div>
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

    for (let index = 0; index < 7; index++) {
      this.imgList.push({
        id: index,
        src:
          "https://picsum.photos/800/300?random=" +
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
.body {
  width: 1200px;
  margin: auto;
}
h2 {
  text-align: center;
}
</style>