<template>
    <div>
        <form id ="dados-form">
            <h2>Coloque seu nome e email</h2>
            <div class="input-container">
                <label for="user">Email</label>
                <input type="text" id="nome" name="nome" v-model ="nome" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="senha">Senha</label>
                <input type="text" id="nome" name="senha" v-model ="senha" placeholder="Digite sua senha">
            </div>
            <div class="input-container">
                <input type="submit" class="submit-btn" value= "Login">
            </div> 
            <div class="input-container">
            <router-link to="/TelaUsuario">user</router-link> <br>
            <router-link to="/TelaAdm">adm</router-link>
        </div>
        </form>
        
        
    </div>


</template>

<script>
export default {
    name: "LoginForm"
}


</script>

<style scoped>

#dados-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    input {
        padding: 5px 10px;
        width: 300px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid black;
    }

</style>