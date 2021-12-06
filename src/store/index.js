import Vue from "vue";
import Vuex from "../myStore/index2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    add(state) {
      state.counter++;
    },
  },
  actions: {
    addAsync({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
  getters: {
    getState(state) {
      return state.counter * 2;
    },
  },
  modules: {},
});
