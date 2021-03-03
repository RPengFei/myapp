import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'test',
    token: undefined,
    user: null
  },
  mutations: {
    update() {
      state.name = 'setName'
    }
  },
  actions: {},
  modules: {}
})