<template>
  <Banner />
 
  <div class="main-container">
       <Conteudo />
      <Playlist />
      
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import Playlist from "../components/Playlist.vue"
import Conteudo from "../components/Conteudo.vue"


export default {
  name: "Home",
  components: {
    Banner, 
    Playlist,
    Conteudo

   
  }
}
</script>

<style>
  .submit-btn{
    margin-top: 25px;
    align-items: center;
  }

</style>
