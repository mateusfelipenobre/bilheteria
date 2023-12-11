// store/moduleIngressos.js

const state = {
    ingressos: [],
  };
  
  const mutations = {
    SET_INGRESSOS(state, ingressos) {
      state.ingressos = ingressos;
    },
  };
  
  const actions = {
    atualizarIngressos({ commit }, ingressos) {
      commit('SET_INGRESSOS', ingressos);
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };
  