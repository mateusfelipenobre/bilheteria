<template>
  <div id="dashboard-adm">
    <h2>Ingressos Solicitados</h2>

   
    <div id="tabela-head" class="ticket-row">
      <div class="order-id"># ID do Cliente</div>
      <div>Cidade</div>
      <div>Setor</div>
      <div>Categoria</div>
      <div>Status</div>
      <div>Ações</div>
    </div>

    <div v-for="ticket in tickets" :key="ticket.id" class="ticket-row">
      <div>{{ ticket.id }}</div>
      <div>{{ ticket.cidade }}</div>
      <div>{{ ticket.setor }}</div>
      <div>{{ ticket.categoria }}</div>
      <div>{{ ticket.status }}</div>
      <div>
        <button @click="aceitarIngresso(ticket)" :disabled="ticket.status !== 'solicitado'" class="acao-btn aceitar-btn">Aceitar</button>
        <button @click="negarIngresso(ticket)" :disabled="ticket.status !== 'solicitado'" class="acao-btn negar-btn">Negar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAdm",
  data() {
    return {
      tickets: [],
    };
  },
  methods: {
    async getIngressosSolicitados() {
      const req = await fetch("http://localhost:3000/ticket?solicitado=true");
      const data = await req.json();
      this.tickets = data;
    },
    async aceitarIngresso(ticket) {
      if (ticket.status === 'solicitado') {
        // atualiza para 'aceito'
        const req = await fetch(`http://localhost:3000/ticket/${ticket.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'aceito' }),
        });

        const res = await req.json();

        // atualiza a lista de ingressos no Dashboard do Admin
        this.getIngressosSolicitados();
      }
    },
    async negarIngresso(ticket) {
      if (ticket.status === 'solicitado') {
        // Atualiza p negado
        const req = await fetch(`http://localhost:3000/ticket/${ticket.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'negado' }),
        });

        const res = await req.json();

        // remove o ingresso do Dashboard do adm
        this.tickets = this.tickets.filter((t) => t.id !== ticket.id);
      }
    },
    async aceitarAlteracoes() {
    
      this.getIngressosSolicitados();
    },
  },
  mounted() {
    this.getIngressosSolicitados();
  },
};
</script>

<style scoped>
#dashboard-adm {
  max-width: 1100px;
  margin: 0 auto;
}

#tabela-head {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

.ticket-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

.ticket-row div {
  width: 14%;
}

.input-container {
  margin-top: 30px;
}

.acao-btn {
  margin: 5px;
  text-align: center;
  border: 2px solid transparent;
  padding: 5px;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s, background-color 0.3s;
  width: 40%;
}

.acao-btn:hover {
  border: 2px solid transparent;
}

.acao-btn:active {
  border: 2px solid transparent;
  color: inherit;
}

.aceitar-btn {
  background-color: green;
  color: white;
}

.aceitar-btn:active {
  background-color: transparent;
  border-color: green;
  color: green;
}

.negar-btn {
  background-color: #831010;
  color: white;
}

.negar-btn:active {
  background-color: transparent;
  border-color: #831010;
  color: #831010;
}

.aceitar-alteracoes-btn {
  background-color: green;
  border-color: green;
  color: white;
}

</style>
