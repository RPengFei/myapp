<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        <div class="add">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" @click="addMsg">添加</el-button>
        </div>

        <list :list="list" :headerConfig="headerConfig" :showAdd="true"></list>
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
      list: [{ name: "事情A" }],
      headerConfig: [{ prop: "name", label: "名称" }],
      input: undefined,
    };
  },
  methods: {
    addMsg: function () {
      console.log(this.input);
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
      // this.$message({
      //   message: "警告哦，这是一条警告消息",
      //   type: "warning",
      // });
    },
  },
};
</script>

<style scope>
.add .el-input {
  width: calc(100% - 80px);
  margin-right: 10px;
}
</style>