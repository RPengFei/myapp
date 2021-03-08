import Vue from 'vue'
// 引入表单验证
import verify from "vue-verify-plugin";

Vue.use(verify, {
  blur: true // 失焦是否触发
})