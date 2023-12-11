// src/store.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    ingressos: [],
  },
  mutations: {
    adicionarIngresso(state, ingresso) {
      state.ingressos.push(ingresso);
    },
    // Adicione outras mutações conforme necessário
  },
  actions: {
    adicionarIngresso({ commit }, ingresso) {
      commit('adicionarIngresso', ingresso);
    },
    // Adicione outras ações conforme necessário
  },
  getters: {
    // Adicione getters conforme necessário
  },
});

export default store;
