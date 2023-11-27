<template>
  <Banner />
  <Playlist />
  <div class="main-container">
    
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import Playlist from "../components/Playlist.vue"



export default {
  name: "Home",
  components: {
    Banner, 
    Playlist

   
  }
}
</script>
