<template>
  <div class="body">
    <div class="todolist">
      <h1>我的行程</h1>
      <div class="add">
        <el-input v-model.trim="input" placeholder="请输入内容"></el-input>
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
      <!-- <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination> -->
    </div>
  </div>
</template>

<script>
import list from "../../components/list";
import strong from "../../utils/Storage";
export default {
  components: {
    list,
  },
  name: "todoList",
  data: function () {
    return {
      list: [],
      headerConfig: [{ prop: "todo", label: "名称" }],
      input: undefined,
      user: strong.getItem("user"),
    };
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    addMsg: function () {
      if (!this.input) {
        this.$message({
          message: "请输入内容",
          type: "warning",
        });
        return;
      }
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "#e0e4ea80",
      });
      var data = {
        servername: "addTodoList",
        data: {
          personid: this.user._id,
          todo: this.input,
        },
      };
      this.$axios.post("/api/api_list", data).then((res) => {
        console.log(res);
        loading.close();
        if (res) {
          this.list.push({ todo: this.input });
          this.input = null;
          this.$message({
            message: "添加成功！",
            type: "success",
          });
        }
      });
    },
    search: function () {
      var data = {
        servername: "searchUserTodoList",
        data: {
          personid: this.user._id,
          key: this.input,
        },
      };
      console.log(data);
      this.$axios.post("/api/api_list", data).then((res) => {
        console.log(res);
        if (res) {
          this.list = res;
        }
      });
    },
    deleteRow: function (index, row) {
      console.log(row._id);
      var data = {
        servername: "deleteTodoList",
        data: {
          id: row._id,
        },
      };
      console.log(data);
      this.$confirm("是否删除该条记录, 是否继续?", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios.post("/api/api_list", data).then((res) => {
            console.log(res);
            if (res) {
              this.list.splice(index, 1);
              this.$message({
                message: "删除成功！",
                type: "success",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    rest: function () {
      this.input = null;
      this.getData();
    },
    getData: function () {
      var data = {
        servername: "getUserTodoList",
        data: {
          personid: this.user._id,
        },
      };
      console.log(data);
      this.$axios.post("/api/api_list", data).then((res) => {
        console.log(res);
        if (res) {
          this.list = res;
        }
      });
    },
  },
};
</script>

<style scope lang='less'>
.body {
  width: 1200px;
  margin: 30px auto;
  .todolist {
    border-radius: 12px;
    box-shadow: 4px 7px 7px 4px #e4e7ed;
    padding: 10px;
    transition: all 0.3s;
    h1 {
      text-align: left;
      font-size: 40px;
      line-height: 1.1;
      font-weight: 600;
      letter-spacing: 0;
      padding: 20px 0 30px 0;
    }
  }
  .todolist:hover {
    box-shadow: 4px 7px 7px 4px #c0c4cc9e;
  }
  .todolist .add .el-input {
    width: calc(100% - 240px);
    margin-right: 10px;
  }
}
</style>