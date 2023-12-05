<template>
  <div id="tabela">
    <!-- Seção de tabela -->
    <div>
      <div id="tabela-head">
        <div class="order-id">#:</div>
        <div>Cidade</div>
        <div>Setor</div>
        <div>Categoria</div>
        <div>Ações</div>
      </div>
    </div>
    <div id="tabela-rows">
      <div class="tabela-row" v-for="ticket in ticket" :key="ticket.id">
        <div class="order-number">{{ ticket.id }}</div>
        <div>{{ ticket.cidade }}</div>
        <div>{{ ticket.setor }}</div>
        <div>{{ ticket.categoria }}</div>
        <div>
          <button class="imprimir-btn">
            <a
              href="https://drive.google.com/file/d/1nyvhp6yyVj1ayJX47PqMBaLa9XM468IC/view?usp=sharing"
              target="_blank"
            >
              Imprimir
            </a>
          </button>
          <button class="edit-btn" @click="editTicket(ticket)">Editar</button>
          <button class="delete-btn" @click="deleteTicket(ticket.id)">Cancelar</button>
        </div>
      </div>
    </div>

    <!-- Seção de formulário de edição -->
    <form id="dados-form" v-if="editingTicket" @submit.prevent="saveEdit">
      <div class="input-container">
        <label for="edit-cidade">Cidade:</label>
        <select name="edit-cidade" id="edit-cidade" v-model="editedTicket.cidade">
          <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.tipo">
            {{ cidade.tipo }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="edit-setor">Setor:</label>
        <select name="edit-setor" id="edit-setor" v-model="editedTicket.setor">
          <option v-for="setor in setores" :key="setor.id" :value="setor.tipo">{{ setor.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="edit-categoria">Categoria:</label>
        <select name="edit-categoria" id="edit-categoria" v-model="editedTicket.categoria">
          <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.tipo">
            {{ categoria.tipo }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <button class="submit-btn" type="submit">Salvar Edições</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      ticket: null,
      ticket_id: null,
      status: [],
      editingTicket: false,
      editedTicket: {
        id: null,
        cidade: null,
        setor: null,
        categoria: null,
      },
      cidades: null,
      setores: null,
      categorias: null,
    };
  },
  methods: {
    async getIngressos() {
      const req = await fetch("http://localhost:3000/ticket");
      const data = await req.json();

      this.ticket = data;
    },
    async deleteTicket(id) {
      const req = await fetch(`http://localhost:3000/ticket/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      this.getIngressos();
    },
    editTicket(ticket) {
      // Ativar o modo de edição
      this.editingTicket = true;
      // Preencher os dados do ingresso a ser editado
      this.editedTicket.id = ticket.id;
      this.editedTicket.cidade = ticket.cidade;
      this.editedTicket.setor = ticket.setor;
      this.editedTicket.categoria = ticket.categoria;
    },
    async saveEdit() {
      const { id, cidade, setor, categoria } = this.editedTicket;

      const req = await fetch(`http://localhost:3000/ticket/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cidade, setor, categoria }),
      });

      const res = await req.json();

      // Desativar o modo de edição
      this.editingTicket = false;

      // Limpar os dados do ingresso editado
      this.editedTicket = {
        id: null,
        cidade: null,
        setor: null,
        categoria: null,
      };

      this.getIngressos();
    },
    async getIngresso() {
      const req = await fetch("http://localhost:3000/ingresso");
      const data = await req.json();

      this.cidades = data.cidades;
      this.setores = data.setores;
      this.categorias = data.categorias;
    },
  },
  mounted() {
    this.getIngressos();
    this.getIngresso();
  },
};
</script>




<style scoped>
  

    #tabela {
        max-width: 1100px;
        margin: 0 auto;
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
        width: 19%;
    }
    .tabela-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }
    #tabela-head .order-id,
    .tabela-row .order-number {
        width: 5%;
    }
   .imprimir-btn {
        background-color: #222;
        color: white;
        font-weight: bold;
        border: 2px solid #222;
        padding: 5px;
        font-size: 12px;
        margin: 0 5px;
        cursor: pointer;
        transition: .5s
   }
   .imprimir-btn:hover {
        background-color: transparent;
        color: #222;
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
        transition: .5s
    }
    .delete-btn:hover {
        background-color: transparent;
        color: #222;
    }

    .edit-btn {
        background-color: blue;
        color: white;
        font-weight: bold;
        border: 2px solid  blue;
        padding: 5px;
        font-size: 12px;
        margin: 0 5px;
        cursor: pointer;
        transition: .5s
    }
    .edit-btn:hover {
        background-color: transparent;
        color: #222;
    }


</style>