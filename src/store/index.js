import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    users: (state) => {
      return state.users
    }
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    }
  },
  actions: {
    setUsers ({ commit }, users) {
      commit('setUsers', users)
    }
  }
})
