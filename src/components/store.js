// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingressosAtualizados: 0,
  },
  mutations: {
    incrementarAtualizacao(state) {
      state.ingressosAtualizados += 1;
    },
  },
});
