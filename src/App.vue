<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data(){
    return {
      logo_src: "/img/logo.png",
      app_name: "Marina Sena"
    }
  }
}

</script>
  
<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "Sequel 100 Wide 95";
    src: url('../public/Sequel\ 100\ Wide\ 95.ttf');
    
  }
  .main-container {
    margin: 60px 120px;
    min-height: 500px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

    h2 {
      padding: 20px;
      text-align: center;
      font-family: "Sequel 100 Wide 95";
    }
   h3{
        font-family: "Sequel 100 Wide 95";
        text-align: center;
    }


  .submit-btn {
        background-color: #222;
        color: #fff;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }
    .submit-btn:hover {
        background-color: transparent;
        color: #222;
    }

  #dados-form {
        max-width: 400px;
        margin: 50px auto;
    }


  .input-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
    }
    input {
        padding: 5px 10px;
        width: 600px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid black;
    }

   select {
        padding: 5px 10px;
        width: 300px;
    }
    #opcionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px
    }


</style>
