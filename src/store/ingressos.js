// Importe as funções necessárias do Vuex
import { onSnapshot, collection } from 'firebase/firestore';
import { ref } from 'vue';
import { getFirestore } from 'firebase/firestore';

// Estado inicial
const state = {
  ingressos: [],
};

// Ações
const actions = {
  // Ação para carregar ingressos do Firestore
  async carregarIngressos({ commit }) {
    const db = getFirestore();
    const q = collection(db, 'ingressos');

    onSnapshot(q, (snapshot) => {
      const ingressos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      commit('setIngressos', ingressos);
    });
  },
};

// Mutações
const mutations = {
  // Mutação para definir os ingressos no estado
  setIngressos(state, ingressos) {
    state.ingressos = ingressos;
  },
};

// Exportar o módulo
export default {
  state,
  actions,
  mutations,
};
