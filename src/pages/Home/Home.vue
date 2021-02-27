<template>
  <div>
    <h1>Home</h1>
    <el-row>
      <el-button type="success">成功按钮</el-button>
    </el-row>

    <el-table
      :data="domain_list"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="url" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "../../utils/http";
export default {
  mounted: function () {
    // this.$axios.post("/api", { data: "getUser" }).then((res) => {
    //   console.log(res);
    //   if (res.data) {
    //     this.user = res.data;
    //   }
    // });

    // axios.post("/local", { data: "getUsers" }).then((res) => {
    //   console.log(res);
    //   // this.user = res.data;
    // });
    axios.post("/api/api_list", { data: "list" }).then((res) => {
      console.log(res.data.domain_list);
      if (res.data) {
        this.domain_list = res.data.domain_list;
      }
      // this.user = res.data;
    });
  },
  data: function (params) {
    return {
      user: {},
      domain_list: [],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<style lang="less" scope>
@color: red;
h1 {
  color: @color;
  font-size: 0.5rem;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>