<template>
      <div class="main-container">
        <h2>Aqui estão seus ingressos</h2>
        <Dashboard />
    </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue"

    export default {
    name: "Ingressos",

    components: {
    Dashboard
  }
    }
</script>