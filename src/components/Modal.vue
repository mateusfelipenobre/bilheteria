<template>
    <div id="fade" class="hide"></div>
    <div id="modal" class="hide">
        <div class="modal-header">
            <h2>Este é o modal</h2>
            <button id="close-modal">Fechar</button>
        </div>
        <div class="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis veniam, architecto repudiandae quia nesciunt nihil corrupti repellendus, expedita eaque cum? Aperiam eligendi expedita excepturi ducimus doloribus ullam reprehenderit fugiat?</p>
        </div>
    </div>
</template>


<script>
export default {
   name: "Modal"
   
}
    

</script>


<style scoped>
    #fade{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.589);
            z-index: 5;
        }
        #modal {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            z-index: 10;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #modal.hide, #fade.hide {
            opacity: 0;
            pointer-events: none;
        }
</style>