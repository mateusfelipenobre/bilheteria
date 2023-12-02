<template>
   <iframe style="border-radius:12px" 
   src="https://open.spotify.com/embed/playlist/1sjsl0floiElKKAvurKtQo?utm_source=generator&theme=0" width="70%" 
   height="352" 
   frameBorder="0" 
   align-items="center"
   allowfullscreen="" 
   allow="autoplay; 
   clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy" id="playlist">
</iframe> 
</template>

<script>
export default {
    name: "Playlist"
}

</script>

<style scoped>
   #playlist{
    justify-content: center;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 15px;
   }
</style>
