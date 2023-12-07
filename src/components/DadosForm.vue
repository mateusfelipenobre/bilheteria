<template>
  <div>
    <Mensagem :msg="msg" v-show="msg" />
    <form id="dados-form" @submit="createTicket">
      <div class="input-container">
        <label for="cidade">Para qual cidade da turnê você deseja escolher?</label>
        <select name="cidade" id="cidade" v-model="cidade">
          <option value="">Selecione a cidade</option>
          <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.tipo">{{ cidade.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="setor">Qual setor deseja assistir ao show?</label>
        <select name="setor" id="setor" v-model="setor">
          <option value="">Selecione o setor</option>
          <option v-for="setor in setores" :key="setor.id" :value="setor.tipo">{{ setor.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="categoria">Qual sua categoria de ingresso</label>
        <select name="categoria" id="categoria" v-model="categoria">
          <option value="">Selecione a categoria</option>
          <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.tipo">{{ categoria.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="quantidade">Quantidade de Ingressos (máximo 10)</label>
        <input
          type="number"
          name="quantidade"
          id="quantidade"
          v-model.number="quantidade"
          min="1"
          max="10"
        />
      </div>
      <div class="input-container">
        <input id="comprar" class="submit-btn" type="submit" value="Comprar ingresso">
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
      cidades: null,
      setores: null,
      categorias: null,
      cidade: null,
      setor: null,
      categoria: null,
      quantidade: 1,
      msg: null
    };
  },
  methods: {
    async getIngresso() {
      const req = await fetch('http://localhost:3000/ingresso');
      const data = await req.json();

      this.cidades = data.cidades;
      this.setores = data.setores;
      this.categorias = data.categorias;
    },

    async createTicket(e) {
      e.preventDefault();

      if (this.quantidade < 1 || this.quantidade > 10) {
        this.msg = "A quantidade de ingressos deve estar entre 1 e 10.";
        return;
      }

      const data = {
        cidade: this.cidade,
        setor: this.setor,
        categoria: this.categoria,
        quantidade: this.quantidade,
        status: "solicitado"
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      this.msg = "Pedido realizado com sucesso";

      this.cidade = "";
      this.setor = "";
      this.categoria = "";
      this.quantidade = 1; // redefinindo para o valor padrão
    }
  },
  mounted() {
    this.getIngresso();
  },
  components: {
    Mensagem
  }
};
</script>
