<template>
  <div id="dashboard-adm">
    <h2>Ingressos Solicitados</h2>

    <!-- Lista de ingressos solicitados -->
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

    <!-- Botão para Aceitar Alterações -->
    <div class="input-container">
      <button @click="aceitarAlteracoes" class="acao-btn aceitar-alteracoes-btn">Aceitar Alterações</button>
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
      const req = await fetch("http://localhost:1337/ticket?solicitado=true");
      const data = await req.json();
      this.tickets = data;
    },
    async aceitarIngresso(ticket) {
      if (ticket.status === 'solicitado') {
        // Atualize o status no backend para 'aceito'
        const req = await fetch(`http://localhost:1337/ticket/${ticket.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'aceito' }),
        });

        const res = await req.json();

        // Atualize a lista de ingressos no Dashboard do Administrador
        this.getIngressosSolicitados();
      }
    },
    async negarIngresso(ticket) {
      if (ticket.status === 'solicitado') {
        // Atualize o status no backend para 'negado'
        const req = await fetch(`http://localhost:1337/ticket/${ticket.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'negado' }),
        });

        const res = await req.json();

        // Remova o ingresso da lista no Dashboard do Administrador
        this.tickets = this.tickets.filter((t) => t.id !== ticket.id);
      }
    },
    async aceitarAlteracoes() {
      // Lógica para aceitar alterações (por exemplo, enviar uma requisição para o backend)
      // Limpar a tabela e atualizar o status dos clientes
      // Atualize a lista de ingressos
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
  margin-top: 20px;
}

.acao-btn {
  margin-left: 35%;
  text-align: center;
  border: 2px solid transparent;
  padding: 10px 15px;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s, background-color 0.3s;
  width: 30%;
}

.acao-btn:hover {
  border: 2px solid transparent;
}

.acao-btn:active {
  border: 2px solid transparent;
  color: inherit;
}

.aceitar-btn {
  background-color: #4caf50;
  color: white;
}

.aceitar-btn:active {
  background-color: transparent;
  border-color: #4caf50;
  color: #4caf50;
}

.negar-btn {
  background-color: #ff5555;
  color: white;
}

.negar-btn:active {
  background-color: transparent;
  border-color: #ff5555;
  color: #ff5555;
}

.aceitar-alteracoes-btn {
  background-color: #4caf50;
  border-color: #4caf50;
  color: white;
}

</style>
