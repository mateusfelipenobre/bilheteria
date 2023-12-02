<template>
    <h2>Confira os mapas dos shows!</h2>

    <div id="galeria">
        
        <img src="../../public/img/mapa_mexico.jpeg">

        <img src="../../public/img/mapa_sao_paulo.jpg">

        <img src="../../public/img/mapa_santiago.jpeg">

        <img src="../../public/img/mapa_bogoda.jpeg">

    </div>
</template>

<script>
export default {
    name: "Carrossel"
}
</script>


<style>
.galeria{
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

img{
    height: 250px;
    margin: 20px 30px;

}

h2{
    font-family: "Sequel 100 Wide 95";
}

</style>