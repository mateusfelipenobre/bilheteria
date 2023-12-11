<template>
  <div>
    <form id="dados-form" @submit.prevent="authenticate">
      <h2>É administrador? Faça aqui seu Login</h2>
      <div class="input-container">
        <label for="username">Nome de usuário</label>
        <input required type="email" id="email" name="email" v-model="email" placeholder="Digite o seu usuário">
      </div>
      <div class="input-container">
        <label for="password">Senha</label>
        <input required type="password" id="password" name="password" v-model="password" placeholder="Digite sua senha">
      </div>
      <div class="input-container">
        <input type="submit" class="submit-btn" value="Login">
      </div>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  
  </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const error = ref(null);

    const authenticate = async () => {
      const auth = getAuth();

      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        // Se não houver erro, redireciona para a tela do adm
        router.push('/TelaAdm');
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error.code, error.message);
        // Atualize a variável de erro para exibir a mensagem
        error.value = error.message;
      }
    };

    return {
      email,
      password,
      authenticate,
      error,
    };
  },
};
</script>

<style scoped>
#dados-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
