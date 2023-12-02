<template>
  
  <div class="main-container">
    <Carrossel/>
    <DadosForm/>
    
  </div>
 
</template>

<script>
import LoginForm from "../components/LoginForm.vue"
import DadosForm from "../components/DadosForm.vue"
import Mensagem from "../components/Mensagem.vue"
import Carrossel from "../components/Carrossel.vue"


export default {
  name: "TelaUsuario", 

  components: {
   LoginForm,
   DadosForm,
   Mensagem,
   Carrossel
  }
}
</script>
