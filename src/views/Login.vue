<template>
  
  <div class="main-container">
    <DadosForm/>
    <h1>Compras concluídas</h1>
    <Dashboard />
  </div>
 
</template>

<script>
import LoginForm from "../components/LoginForm.vue"
import DadosForm from "../components/DadosForm.vue"
import Mensagem from "../components/Mensagem.vue"
import Dashboard from "../components/Dashboard.vue"

export default {
  name: "Login", 

  components: {
   LoginForm,
   DadosForm,
   Mensagem,
   Dashboard
  }
}
</script>