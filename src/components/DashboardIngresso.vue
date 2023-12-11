<template>
  <div>
    <h2>Lista de Ingressos Disponibilizados</h2>

  
    <div id="tabela-ingressos">
      <div id="tabela-head">
        <div>Cidade</div>
        <div>Setor</div>
        <div>Categoria</div>
        <div>Quantidade</div>
        <div>Ações</div>
      </div>
      <div id="tabela-rows">
        <div class="tabela-row" v-for="ingresso in ingressos" :key="ingresso.id">
          <div>{{ ingresso.cidade }}</div>
          <div>{{ ingresso.setor }}</div>
          <div>{{ ingresso.categoria }}</div>
          <div>{{ ingresso.quantidadeDisponivel }}</div>
          <div>
            <button class="delete-btn" @click="excluirIngresso(ingresso.id)">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onSnapshot, collection, deleteDoc, doc } from 'firebase/firestore';
import { ref, onMounted } from 'vue';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore();

export default {
  name: "DashboardIngresso",
  setup() {
    const ingressos = ref([]);

    const excluirIngresso = async (id) => {
      try {
        await deleteDoc(doc(db, 'ingressos', id));
        console.log('Ingresso excluído com sucesso!');
        // Recarregar a lista de ingressos após a exclusão
        carregarIngressos();
      } catch (error) {
        console.error('Erro ao excluir o ingresso:', error);
      }
    };

    const carregarIngressos = async () => {
      const q = collection(db, 'ingressos');
      onSnapshot(q, (snapshot) => {
        ingressos.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    };

    onMounted(() => {
      carregarIngressos();
    });

    return {
      ingressos,
      excluirIngresso,
      carregarIngressos,
    };
  },
};
</script>

<style scoped>
#tabela-ingressos {
  max-width: 1200px;
  margin-top: 20px;
}

#tabela-head,
#tabela-rows,
.tabela-row {
  display: flex;
  flex-wrap: wrap;
}

#tabela-head {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#tabela-head div,
.tabela-row div {
  width: 20%;
}

.tabela-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

.delete-btn {
  background-color: #831010;
  color: white;
  font-weight: bold;
  border: 2px solid #831010;
  padding: 5px;
  font-size: 12px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>