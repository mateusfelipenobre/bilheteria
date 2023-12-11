import { createStore } from 'vuex';
import ingressos from './ingressos';
import moduleIngressos from './moduleIngressos';

const store = createStore({
  modules: {
    ingressos: moduleIngressos,
    // Adicione outros módulos aqui, se necessário
  },
});

export default store;
