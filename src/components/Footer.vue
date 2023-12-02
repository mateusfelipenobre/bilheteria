<template>
    <footer id="footer">
        <p>Mateus & Ruan & Diogo. Desenvolvimento web e Design &copy; 2023</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #footer {
        position: fixed;
        height: 40px;
        background-image: url("../../public/img/footer.png");
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
        
    }
</style>