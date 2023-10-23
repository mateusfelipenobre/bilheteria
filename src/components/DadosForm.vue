<template>
        <div>
            <Mensagem :msg="msg" v-show="msg" />
            <form id="dados-form" @submit="createTicket">
            <div class="input-container">
                <label for="cidade">Para qual cidade da turnê você deseja escolher?</label>
                <select name="cidade" id="cidade" v-model="cidade">
                    <option value="">Selecione a cidade</option>
                    <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.tipo">{{ cidade.tipo }}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="setor">Qual setor deseja assistir ao show?</label>
                <select name="setor" id="setor" v-model="setor">
                    <option value="">Selecione o setor</option>
                    <option v-for="setor in setores" :key="setor.id" :value="setor.tipo">{{ setor.tipo }}</option>
                </select>
            </div> 
             <div class="input-container">
                <label for="categoria">Qual sua categoria de ingresso</label>
                <select name="categoria" id="categoria" v-model="categoria">
                    <option value="">Selecione a categoria</option>
                    <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.tipo">{{ categoria.tipo }}</option>
                </select>
            </div> 
           
            <div class="input-container">
                <input  class="submit-btn" type="submit" value= "Comprar ingresso">
            </div> 
         </form>
        </div>
    
</template>

<script>

import Mensagem from "../components/Mensagem.vue";

export default {
    name: "DadosForm",
    data() {
        return {
            cidades: null,
            setores: null,
            categorias: null,
            cidade: null,
            setor: null,
            categoria: null,
            msg: null
        }
    },
    methods: {
        async getIngresso() {
             const req = await fetch('http://localhost:3000/ingresso');
             const data = await req.json();

             this.cidades = data.cidades;
             this.setores = data.setores;
             this.categorias = data.categorias;
        },

        async createTicket(e){

            e.preventDefault();

            const data = {
                cidade: this.cidade,
                setor: this.setor,
                categoria: this.categoria,
                status: "solicitado"
            }

            const dataJson = JSON.stringify(data);

            const req = await fetch("http://localhost:3000/ticket", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: dataJson
      });

           const res = await req.json();

           this.msg = 'Pedido realizado com sucesso';
           
           this.cidade = "";
           this.setor = "";
           this.categoria = "";

        }
    
       
    },
    mounted() {
        this.getIngresso()
    },
    components: {
        Mensagem
    } 
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

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid black;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }
    #opcionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }
    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px
    }
    .submit-btn {
        background-color: #222;
        color: white;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }
    .submit-btn:hover {
        background-color: transparent;
        color: #222;
    }

</style>