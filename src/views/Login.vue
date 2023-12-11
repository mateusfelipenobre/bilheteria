<template>
    
    <div class="main-container">
        <LoginForm />
        <h3>Ou </h3>
        <LoginFormAdm/>
    </div>

</template>


<script>
    import LoginForm from "../components/LoginForm.vue"
    import LoginFormAdm from "../components/LoginFormAdm.vue"
   


    export default {
    name: "Login",
    components: {
        LoginForm,
        LoginFormAdm
       
    
  }
}
</script>
