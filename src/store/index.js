import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headshot: ""
  },
  mutations: {
    setHeadshot(state, pic) {
      state.headshot = pic;
    }
  },
  actions: {
  },
  modules: {
  }
})