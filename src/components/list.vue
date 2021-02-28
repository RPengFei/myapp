<template>
  <el-table
    :data="list"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    :autoplay="true"
  >
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="url" label="地址"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "list",
  props: {
    list: Array,
  },
  data() {
    return {};
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
<style lang="less">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>