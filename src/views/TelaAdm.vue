<template>
  
  <div class="main-container">
    <FormAdm/>
    <DashboardIngresso/>
    <DashboardAdm/>
    
   
  </div>
 
</template>

<script>
import FormAdm from "../components/FormAdm.vue"
import DashboardAdm from "../components/DashboardAdm.vue"
import DashboardIngresso from "../components/DashboardIngresso.vue"


export default {
  name: "TelaAdm", 

  components: {
   FormAdm,
   DashboardAdm, 
   DashboardIngresso
  
  }
}
</script>