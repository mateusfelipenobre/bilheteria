<template>
  
  <div class="main-container">
    <FormAdm/>
    <DashboardAdm/>
   
  </div>
 
</template>

<script>
import FormAdm from "../components/FormAdm.vue"
import DashboardAdm from "../components/DashboardAdm.vue"


export default {
  name: "TelaAdm", 

  components: {
   FormAdm,
   DashboardAdm
  
  }
}
</script>