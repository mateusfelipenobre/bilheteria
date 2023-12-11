<template>
  
  <div class="main-container">
    <Carrossel/>
    
    <DadosForm/>
     <Dashboard />
    
  </div>
 
</template>

<script>
import LoginForm from "../components/LoginForm.vue"
import DadosForm from "../components/DadosForm.vue"
import Mensagem from "../components/Mensagem.vue"
import Carrossel from "../components/Carrossel.vue"
import Dashboard from "../components/Dashboard.vue"


export default {
  name: "TelaUsuario", 

  components: {
   LoginForm,
   DadosForm,
   Mensagem,
   Carrossel, 
   Dashboard
  }
}
</script>
