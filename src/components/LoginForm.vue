<template>
    <div>
        <form id ="dados-form" @submit.prevent="login">
            <h2>Realize o login para fazer sua compra</h2>
            <div class="input-container">
                <label for="username">Nome de usuário</label>
                <input type="text" id="nome" name="nome" v-model ="username" placeholder="Digite o seu user">
            </div>
            <div class="input-container">
                <label for="password">Senha</label>
                <input type="text" id="nome" name="senha" v-model ="password" placeholder="Digite sua senha">
            </div>
            <div class="input-container">
                <input type="submit" class="submit-btn" value= "Login">
            </div> 
            <div class="input-container">
           
        </div>
        </form>
        <p v-if="error" style="color: red;">{{ error }}</p>
        
          <router-link to="TelaAdm">ADM</router-link> <br>
          <router-link to="TelaUsuario">Usuário</router-link>
        
    </div>


</template>

<script>
import axios from 'axios';


export default {
    name: "LoginForm",

    data() {
    return {
      username: '',
      password: '',
      error: null
    };
  },
  methods: {
   async login() {
  try {
    const response = await axios.post('http://localhost:1337/auth/local', {
      identifier: this.username,
      password: this.password
    });

    const user = response.data.user;

    if (user.role === 'user') {
      this.$router.push('TelaUsuario');
    } else if (user.role === 'admin') {
      this.$router.push('TelaAdm');
    }
  } catch (error) {
    console.error('Erro na autenticação:', error);
    this.error = 'Credenciais inválidas';
  }
}
  }
    


};
</script>

<style scoped>

#dados-form {
        max-width: 600px;
        margin: 0 auto;
    }
</style>