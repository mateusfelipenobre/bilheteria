<template>
  <h2> Adicionar Ingressos para compra</h2>
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
export default {
  data() {
    return {
      novaCidade: "",
      novoSetor: "",
      novaCategoria: "",
      novaQuantidade: 1, // valor padrão
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

      const dataJson = JSON.stringify(novoIngresso);

      const req = await fetch("http://localhost:1337/ingressos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      // Lógica adicional, se necessário
      console.log("Ingresso cadastrado com sucesso!");

      // Limpar os campos após o cadastro
      this.novaCidade = "";
      this.novoSetor = "";
      this.novaCategoria = "";
      this.novaQuantidade = 1; // redefinindo para o valor padrão
    },
  },
};
</script>

<style scoped>
input{
  width: 400px;
}
</style>
