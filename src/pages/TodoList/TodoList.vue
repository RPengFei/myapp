<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        <div class="add">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" @click="addMsg">添加</el-button>
          <el-button type="success" @click="search">搜索</el-button>
          <el-button type="warning" @click="rest">重置</el-button>
        </div>

        <list
          :list="list"
          :headerConfig="headerConfig"
          @deleteRow="deleteRow"
          :showAdd="true"
        ></list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import list from "../../components/list";
export default {
  components: {
    list,
  },
  name: "todoList",
  data: function () {
    return {
      list: [],
      headerConfig: [{ prop: "name", label: "名称" }],
      input: undefined,
    };
  },
  methods: {
    addMsg: function () {
      console.log(this.input);
      this.list.push({ name: this.input });
      this.input = null;
      console.log(this.list);
      this.$message({
        message: "添加成功！",
        type: "success",
      });
    },
    search: function () {},
    deleteRow: function (index) {
      console.log(index);
      this.list.splice(index, 1);
      this.$message({
        message: "删除成功！",
        type: "success",
      });
    },
    rest: function () {
      this.input = null;
      this.getData();
    },
    getData: function (key) {
      console.log(key);
    },
  },
};
</script>

<style scope>
.add .el-input {
  width: calc(100% - 240px);
  margin-right: 10px;
}
</style>