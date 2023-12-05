<template>
  <div>
    <form id="adm-form" @submit.prevent="inserirDados">
      <h2>Adicione cidades, shows e categorias</h2>
      <div class="input-container">
        <label for="cidade">Cidades que o show está disponível:</label>
        <input type="text" id="cidade" name="cidade" v-model="cidade" placeholder="Digite a cidade que vão ocorrer os shows">
      </div>
      <div class="input-container">
        <label for="setor">Que setores estarão disponíveis?</label>
        <input type="text" id="setor" name="setor" v-model="setor" placeholder="Digite os setores que estão disponíveis">
      </div>
      <div class="input-container">
        <label for="categoria">Que categorias estarão disponíveis?</label>
        <input type="text" id="categoria" name="categoria" v-model="categoria" placeholder="Digite que categorias estão disponíveis">
      </div>

      <div class="input-container">
        <input class="submit-btn" type="submit" value="Inserir dados">
      </div>
    </form>
  </div>
</template>

<script>
import Mensagem from "../components/Mensagem.vue";

export default {
  name: "DadosForm",
  data() {
    return {
      cidade: null,
      setor: null,
      categoria: null,
      msg: null
    };
  },
  methods: {
    async enviarDados(url, data) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      return response.json();
    },

    async inserirDados() {
      try {
        const endpoints = [
          "http://localhost:3000/ingresso/cidades",
          "http://localhost:3000/ingresso/setores",
          "http://localhost:3000/ingresso/categorias"
        ];

        // Itera sobre os endpoints e envia os dados
        for (const endpoint of endpoints) {
          await this.enviarDados(endpoint, { tipo: this[endpoint.split("/").pop()] });
        }

        console.log('Dados inseridos com sucesso');

        // Limpar os campos do formulário após a inserção
        this.cidade = "";
        this.setor = "";
        this.categoria = "";

        // Atualizar a lista de cidades, setores e categorias
        this.$parent.getIngresso();
      } catch (error) {
        console.error('Erro ao inserir dados:', error);
      }
    }
  },
  components: {
    Mensagem
  }
};
</script>


<style scoped>
  #adm-form {
    max-width: 600px;
    margin: 0 auto;
  }

</style>
