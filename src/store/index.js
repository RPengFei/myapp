import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: undefined,
    user: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setToken(state, data) {
      state.token = data
    }
  },
  actions: {
    login: function (context) {
      this.$axios
        .post("/api/api_list", {
          servername: "getUser",
        })
        .then((res) => {
          if (res.user) {
            console.log(res.user);
            context.commit('setUser', res.user)
          }
        });
    }
  },
  modules: {}
})