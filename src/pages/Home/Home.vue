<template>
  <div>
    <!-- 轮播 -->
    <keep-alive>
      <Slider :imgList="imgList"></Slider>
    </keep-alive>
    <div class="body">
      <div class="table">
        <h1>GIT基础命令</h1>
        <keep-alive>
          <list :list="git" :headerConfig="gitConfig"></list>
        </keep-alive>
      </div>
      <div class="table">
        <h1>动态数据表格</h1>
        <keep-alive>
          <list :list="domain_list" :headerConfig="headerConfig"></list>
        </keep-alive>
        
      </div>
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
          "https://picsum.photos/800/500?random=" +
          Math.ceil(Math.random() * 10),
      });
    }
  },
  data: function (params) {
    return {
      imgList: [],
      domain_list: [],
      headerConfig: [
        { prop: "id", label: "ID", width: "220px" },
        { prop: "name", label: "名称" },
        { prop: "url", label: "地址" },
      ],
      git: [
        { code: "git config --global user.name' '", content: "配置用户名" },
        { code: "git config --global user.emal' '", content: "配置用户邮箱" },
        { code: "git init", content: "初始化仓库" },
        {
          code: "git clone [仓库地址] [取别名]",
          content: "克隆仓库，并且关联",
        },
        { code: "git add '文件名'", content: "提交单个文件到暂存区" },
        { code: "git add . [-A]", content: "当前文件夹全部提交" },
        {
          code: "git commit -m'描述'",
          content: "暂存区提交到历史区，并且添加描述",
        },
        {
          code: "git pull origin master",
          content: "拉取分支 origin 默认项目名",
        },
        { code: "git push origin master ", content: "将文件提交到远程服务器" },
      ],
      gitConfig: [
        { prop: "code", label: "命令", width: "300px" },
        {
          prop: "content",
          label: "描述",
        },
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
  h1 {
    text-align: left;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0;
    padding: 20px 0 30px 0;
  }
  .table {
    box-shadow: 4px 7px 7px 4px #c0c4cc9e;
    border-radius: 20px;
    padding: 10px;
    margin: 30px auto;
  }
}
</style>