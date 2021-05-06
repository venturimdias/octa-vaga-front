<template>
<div class="cards">

    <div  class="card-title">    
        {{type === 'button' ? '' : name +":"}}
    </div>

    <label v-if="type == 'input' " class="item">
        <input type='text' :id="name" />
    </label>
    
    <div v-if="type == 'radio'" class="list rd">
        <label v-for="(val, index) in values" :key="index">
            <input type='radio' :name="name" :value="val" />
            <div></div>
            {{val}}
        </label>
    </div>

    <div v-if="type == 'checkbox'" class="list ckb">
        <label v-for="(val, index) in values" :key="index">
            <input type='checkbox' :name="name" :value="val" />
            <div><i class="fas fa-check"></i></div>
            {{val}}
        </label>
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
})
</script>


<style lang="scss" scoped>
.cards + .cards {
    margin-top:15px;
}
.cards{ 

    .card-title{
        font-size:1.5rem;
        font-weight:bold;
        line-height: 120%;
        padding:5px 0;
    }
    .list{
        input{
            display:none;
        }
        label + label{
            margin-top:6px;
        }
        label{
            display:flex;
            align-items:center;

            div{
                display:flex;
                align-items:center;
                justify-content:center;

                border:1px solid var(--black-400);
                width:24px; 
                height:24px;
                margin-right:10px;
                position:relative; 

                i{
                    display: none;
                    color:var(--blue-400);
                }
            }

            input[type="radio"]:checked + div:after{
                content:'';
                position:absolute;
                border-radius:50%;
                top:2px;
                left:2px;
                right:2px;
                bottom:2px;
                background:var(--blue-400);
            }

            input[type="checkbox"]:checked + div i{
                display:flex;
            }
        }

        &.rd{
            label{
                div{
                    border-radius:50%;
                }
            }

        }
    } 
    
    input[type="text"],
    input[type="tel"],
    input[type="mail"],
    textarea{
        border-radius:5px;
        width:100%; 
        padding:10px;
        font-size:1.9rem;
        border:1px solid var(--black-400);
        outline:0;        
    }
    
    button{
        display:flex;
        align-items: center;
        justify-content: center;

        color:var(--white);
        background: var(--blue-800);
        border:0;
        outline:0;
        border-radius:5px;
        height:40px;
        padding:0 35px;
        cursor: pointer;

        font-size:1.8rem;
        transition:.2s;

        &:hover{
            background: var(--blue-400);
        }
    }

}
/* theme Black */
.theme-black{
    input[type="text"],
    input[type="tel"],
    input[type="mail"],
    textarea{
        background:rgba(255,255,255,0);
        color:var(--black-200);
        border:0px;
        border-radius:0;
        border-bottom:1px solid var(--black-200);
    }
}


</style>