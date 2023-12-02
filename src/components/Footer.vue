<template>
    <footer id="footer">
        <p>Mateus & Ruan & Diogo desenvolvimento web e design &copy; 2023</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #footer {
        height: 100px;
        background-image: url('/public/img/footer.png');
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
    }
</style>