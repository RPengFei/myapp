<template>
  <el-table
    :data="list"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    :autoplay="true"
  >
    <template v-for="(item, index) in headerConfig">
      <el-table-column
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
export default {
  name: "list",
  props: {
    list: Array,
    headerConfig: Array,
  },
  created: function () {},
  mounted: function () {},
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