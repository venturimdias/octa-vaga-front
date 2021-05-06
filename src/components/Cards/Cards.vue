<template>
<div class="cards">

    <div  class="card-title">    
        {{type === 'button' ? '' : name}}

        <div class="edit edit-title">
            <div v-if="isEditName" >
                <input id="edit-name" v-model="editTitleCard"/>
                <button @click="editCardTitle(indice)" type="button">ok</button>
            </div>
            <button @click="openEdit()" type="button"><i class="fas fa-pen"></i></button>
            <button @click="remove(indice)" type="button"><i class="fas fa-times"></i></button>
        </div>
    </div>

    <label v-if="type == 'input' " class="item">
        <input type='text' :id="name" />
    </label>
    
    <div v-if="type == 'radio'" class="list">
        <label v-for="(val, index) in values" :key="index">
            <input type='radio' :name="name" :value="val" />
            {{val}}
            <div class="edit">
                <button @click="removeCardItem(id, indice, index)" type="button"><i class="fas fa-times"></i></button>
            </div>
        </label>

        <div class="edit add-list">
            <button @click="openAddItem()" >Adicionar</button>
            <div v-if="isAddItem" >
                <input id="edit-name" v-model="addItem"/>
                <button @click="addItemList(indice)" type="button">ok</button>
            </div>
        </div>
    </div>

    <div v-if="type == 'checkbox'" class="list">
        <label v-for="(val, index) in values" :key="index">
            <input type='checkbox' :name="name" :value="val" />
            {{val}}
            <div class="edit">
                <button @click="removeCardItem(id, indice, index)" type="button"><i class="fas fa-times"></i></button>
            </div>
        </label>

        <div class="edit add-list">
            <button @click="openAddItem()" >Adicionar</button>
            <div v-if="isAddItem" >
                <input id="edit-name" v-model="addItem"/>
                <button @click="addItemList(indice)" type="button">ok</button>
            </div>
        </div>
    </div>

    <div v-if="type == 'button' " :class="'item cont-'+ type">
        <button :id="name" type="button">{{name}}</button>
    </div>

</div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props:{
        indice: Number,
        id: String,
        name: String,
        type: String,
        values: Array
    },
    data(){
        return{
            editTitleCard: '',
            isEditName: false,
            addItem: '',
            isAddItem: false,
        }
    },
    methods:{
        openEdit(){
            this.isEditName = !this.isEditName
        },
        openAddItem(){
            this.isAddItem = !this.isAddItem
        },
        editCardTitle(index: number){
            const title = this.editTitleCard

            if(title != null && title != ' ' && title != ''){
                this.$store.commit('setUpdateCardTitle', { index, title } )
                this.editTitleCard = ''
            }

            this.isEditName = false
        },
        remove(index: number){
            this.$store.commit('setRemoveCard', index)
        },
        removeCardItem(id: number, indice: number,  index: number){
            this.$store.commit('setRemoveCardItem', { id, indice, index })
        },
        addItemList(indice: number){
            const title = this.addItem

            if(title != null && title != ' ' && title != ''){
                this.$store.commit('setAddValue', { title, indice })
                this.addItem = ''
            }
            
            this.isAddItem = false
        }

    }
})
</script>

<style lang="scss" scoped>
.els-default {
    .edit{ display:none !important; }
}

.els-clone{

    .cards{ 
        max-width:600px;
        margin:10px 20px 10px 0;
        border-radius:10px;
        border:1px dashed var(--black-200);
        padding:20px;
    }

}

.cards{

    .card-title{
        display:flex;
        align-items:center;
        font-weight:bold;
        padding:0 0 10px;

    }
    .edit{
        display:flex;
        margin-left:auto;

        button{
            display:flex;
            align-items:center; 
            justify-content: center;
            font-size:1.2rem;
            border:0;
            background:rgba(255,255,255,0);
            color:var(--black-800);
            width:20px;
            height:20px;

            &:last-child{
                font-size:1.6rem;
            }
        }

        &.edit-title{
            display:flex;
            align-items: center;
            height:38px;
            position:relative;

            div{
                display:flex;    
                align-items: center;
                position:absolute;
                right:-20px;

                input{
                    width:120px;
                    padding: 5px;
                }
                button{
                    background:var(--black-800);
                    color:var(--white);
                    width:auto;
                    height:38px;
                    padding:0 10px;
                    margin-left:5px;
                }
            }
        }

        &.add-list{
            display:flex;
            align-items:center;
            margin:10px 0;
            height:40px;
            position:relative;

            button{
                font-size:1.6rem;
                margin:0 15px 0 0;
                width:auto;
                text-decoration:underline;
            }

            div{
                display:flex;
                align-items:center;
                position:absolute;

                input{
                    width:120px;
                    margin-right:5px;
                    padding:5px;
                }
                button{
                    display:flex;
                    align-items:center;
                    height:38px;
                    padding:3px 10px;

                    text-decoration: none;
                    background:var(--black-800);
                    color:var(--white);
                }
            }
            
        }

    }

    input, 
    select, 
    textarea,
    button{
        outline:0;
        font-size:1.8rem;
    }
    input[type="text"],
    input[type="tel"],
    input[type="mail"] {
        border-radius:5px;
        border:1px solid var(--black-200);
        padding:10px; 
        width:100%;
    }
    .cont-button{

        button{
            font-size:1.4rem;
            border-radius:5px;
            width:150px;
            height:40px;
            background:var(--black-800);
            color:var(--white);
            border:0;
        }
    }
    
    label{
        display:flex;
        flex-direction:column;
        padding:3px;

        &:hover{
            background:var(--black-100);
        }
    }   

    .list label{
        align-items:center;
        flex-direction: initial;
        grid-gap:10px;
    }

    

} 
</style>