<template>
  <div>
    <form id="form-adm" @submit.prevent="cadastrarIngresso">
      <div class="input-container">
        <label for="cidade">Cidade:</label>
        <input type="text" name="cidade" id="cidade" v-model="novaCidade" />
      </div>
      <div class="input-container">
        <label for="setor">Setor:</label>
        <input type="text" name="setor" id="setor" v-model="novoSetor" />
      </div>
      <div class="input-container">
        <label for="categoria">Categoria:</label>
        <input type="text" name="categoria" id="categoria" v-model="novaCategoria" />
      </div>
      <div class="input-container">
        <label for="quantidadeDisponivel">Quantidade a ser cadastrada:</label>
        <input type="number" name="quantidadeDisponivel" id="quantidadeDisponivel" v-model.number="novaQuantidade" />
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Cadastrar Ingresso" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      novaCidade: '',
      novoSetor: '',
      novaCategoria: '',
      novaQuantidade: 1,
    };
  },
  methods: {
    async cadastrarIngresso() {
      const novoIngresso = {
        cidade: this.novaCidade,
        setor: this.novoSetor,
        categoria: this.novaCategoria,
        quantidadeDisponivel: this.novaQuantidade,
      };

      const db = getFirestore();

      try {
        const docRef = await addDoc(collection(db, 'ingressos'), novoIngresso);
        console.log('Ingresso cadastrado com ID:', docRef.id);

        // depois do login, atualize os dados no componente DadosForm
        this.$root.$emit('atualizarIngressos');
      } catch (error) {
        console.error('Erro ao cadastrar o ingresso:', error);
      }

      // limpa os campos após o cadastro
      this.novaCidade = '';
      this.novoSetor = '';
      this.novaCategoria = '';
      this.novaQuantidade = 1;
    },
  }
};
</script>

<style scoped>
input {
  width: 400px;
}
</style>
