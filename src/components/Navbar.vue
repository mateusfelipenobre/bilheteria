<template>
 <div id="nav">
    <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/Ingressos">Seus Ingressos</router-link>
    <router-link to="/Login">Login</router-link>
    
  </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: ["logo", "alt"]
    }
</script>
<style scoped>
    #nav {
        background-color: black;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

   #logo {
        width: 250px;
        height: 25px;
    }
    #nav a {
        color: white;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
        font-family: "Sequel 100 Wide 95";
    }
    #nav a:hover {
        color: #940d0d;
    }
</style>
