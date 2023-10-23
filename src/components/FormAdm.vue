<template>
    <div>
        <form id="adm-form" @submit="inserirDados">
            <div class="input-container">
              <label for="cidade">Cidades que o show está disponível:</label>
              <input type="text" id="cidade" name="cidade" v-model="cidade" placeholder="Digite a cidade que vão ocorrer os shows">
            </div>
            <div class="input-container">
              <label for="setor">Que setores estarão disponíveis?</label>
              <input type="text" id="setor" name="setor" v-model="setor" placeholder="Digite os setores que estão disponíveis">
            </div>
            <div class="input-container">
              <label for="categoria">Que setores estarão disponíveis?</label>
              <input type="categoria" id="categoria" name="categoria" v-model="categoria" placeholder="Digite que categorias estão disponíveis">
            </div>

            <div class="input-container">
                <input  class="submit-btn" type="submit" value= "Inserir dados">
            </div> 
        </form>
    </div>
</template>

<script>

export default {
    name: "FormAdm",
    data() {
        return {
            cidade: null,
            cidades: null
        }
    },


methods: {
  async inserirDados(e){
    e.preventDefault();

    const data = {
      cidade: this.cidade,
      //setor: this.setor,
      //categoria: this.categoria
    }

    const dataJson =JSON.stringify(data);

    const req = await fetch('http://localhost:3000/ingresso/categorias', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: dataJson
    });

    const res = await req.json();
    console.log(res);

    }
  }
}

</script>

<style scoped>
    #adm-form {
    max-width: 400px;
    margin: 0 auto;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #222;
  }
  input {
    padding: 5px 10px;
    width: 300px;
    }
</style>