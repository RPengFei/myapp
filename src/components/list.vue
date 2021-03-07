<template>
  <el-table :data="list" style="width: 100%" :autoplay="true" stripe>
    <template v-for="(item, index) in headerConfig">
      <el-table-column
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        class="animated bounceInDown"
      >
      </el-table-column>
    </template>

    <el-table-column label="操作" v-if="showAdd" width="100">
      <template slot-scope="scope">
        <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        > -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "list",
  props: {
    list: Array,
    headerConfig: Array,
    showAdd: Boolean,
  },
  created: function () {},
  mounted: function () {},
  data() {
    return {};
  },
  methods: {
    handleDelete: function (index, row) {
      console.log(index, row);
      this.$emit("deleteRow", index, row);
    },
  },
};
</script>
<style lang="less">
</style>