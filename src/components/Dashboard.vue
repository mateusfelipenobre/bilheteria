<template>
    <div id="tabela">
        <div>
            <div id="tabela-head">
                <div class="order-id">#:</div>
                <div>Cidade</div>
                <div>Setor</div>
                <div>Categoria</div>
                <div>Ações</div>
            </div>    
        </div>
            <div id="tabela-rows"> 
                <div class="tabela-row" v-for="ticket in ticket" :key="ticket.id">
                        <div class="order-number"> {{ ticket.id }}</div>
                        <div> {{ ticket.cidade }} </div>
                        <div> {{ ticket.setor }} </div>
                        <div> {{ ticket.categoria }} </div>

                    <div>
                        <button class="imprimir-btn"> <a href = "https://drive.google.com/file/d/1nyvhp6yyVj1ayJX47PqMBaLa9XM468IC/view?usp=sharing" target="_blank">Imprimir</a></button>
                        <button class="delete-btn" @click="deleteTicket(ticket.id)">Cancelar</button>
                    </div>
                </div>     
            </div>             
    </div>
</template>

<script>

export default {
   name: "Dashboard",

   
   data (){
        return {
            ticket: null,
            ticket_id: null,
            status: []
        }
   },
    methods: {
        async getIngressos() {

            const req = await fetch("http://localhost:3000/ticket");
            
            const data = await req.json();

            this.ticket = data;

            console.log(this.ticket);

            

        },

        
      async deleteTicket(id) {

        const req = await fetch(`http://localhost:3000/ticket/${id}`, {
          method: "DELETE"
        });

        const res = await req.json();

        this.getIngressos();

      },



    },

    mounted(){
        this.getIngressos();
    }
}
</script>

<style scoped>
  
    #tabela {
        max-width: 1100px;
        margin: 0 auto;
    }

    #tabela-head,
    #tabela-rows,
    .tabela-row {
        display: flex;
        flex-wrap: wrap;
    }
    #tabela-head {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }
    #tabela-head div, 
    .tabela-row div {
        width: 19%;
    }
    .tabela-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }
    #tabela-head .order-id,
    .tabela-row .order-number {
        width: 5%;
    }
   .imprimir-btn {
        background-color: #222;
        color: white;
        font-weight: bold;
        border: 2px solid #222;
        padding: 5px;
        font-size: 12px;
        margin: 0 10px;
        cursor: pointer;
        transition: .5s
   }
   .imprimir-btn:hover {
        background-color: transparent;
        color: #222;
    }
    .delete-btn {
        background-color: #831010;
        color: white;
        font-weight: bold;
        border: 2px solid #831010;
        padding: 5px;
        font-size: 12px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s
    }
    .delete-btn:hover {
        background-color: transparent;
        color: #222;
    }
    h2{
        font-family: "Sequel 100 Wide 95";
    }


</style>