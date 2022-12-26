import Vue from "vue";
import Vuex from "vuex";
import actions from "./action";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUp: {
      email: "",
      password: "",
      username: "",
      userGender: "",
      userPhoto: "",
      userBirth: "",
    },
    loginData: {
      email: "",
      password: "",
    },
    club: 123,
  },
  actions,
  mutations: {
    setSelectedClub(state, club) {
      state.club = club;
    },
    setUserDate(state, userData) {
      state.userData = userData;
    },
  },
  modules: {},
});


