import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/rest.css'
import axios from './utils/http'
import App from './App.vue'


Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')