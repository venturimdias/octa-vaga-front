<template>
  <div class="aplicacao">
    <div class="els-default">
        <h2>Toolbox</h2>
        <draggable
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'toolbox', pull: 'clone', put: false }"
          :clone="cloneItems"      
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="index"
          >
            <Cards
              :id="element.id" 
              :name="element.name"
              :type="element.type"
              :values="element.values"
              />
          </div>
        </draggable>
    </div>
    <div class="els-clone">
      <h2></h2>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="toolbox"
      >
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="index"
        >
          <!-- {{ element.name }} -->
          <Cards 
              :id="element.id" 
              :name="element.name"
              :type="element.type"
              :values="element.values"
              :indice="index"
              />
        </div>
      </draggable>

      <router-link to="/" class="link">Veja como esta ficando</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable'
import Cards from '@/components/Cards/Cards.vue'
import { templateCard } from './templateCard.js'

type storeProps = {
  id: number,
  name: string, 
  type: string,
  values: Array<string>
}

let idGlobal = templateCard.length

export default Vue.extend({
  name: 'Aplicacao',
  components:{
    draggable,
    Cards,
  },
  computed:{
    list1: {
      get() :  Array<storeProps>{
          return  templateCard
      }
    },
    list2: {
      get() :  Array<storeProps>{
        return this.$store.state.listDefault
      }
    }
  },
  methods:{
    // altera o id
    cloneItems({id, name, type, values}) {
      
      return {
        id: idGlobal++,
        name,
        type,
        values
      };
    }
  } 
})
</script>

<style lang="scss" scoped>
.aplicacao{
  min-height:100%;
  display:grid; 
  grid-template-columns:400px 1fr;
  grid-gap:3rem;

  h2{
    min-height:81px;
    padding:3rem;
  }


  /* Elementos Default */
  .els-default{
    background:var(--black-100);

    .list-group-item + .list-group-item{
      border-top:1px dashed var(--black-400);
    }
    .list-group-item{
      padding:2rem 3rem;
    }

  }

  .link{
    display:flex;
    align-items:center;
    justify-content: center; 

    color:var(--black-800);
    max-width:600px;
    height:40px;
    margin-bottom:20px;
  }
  .list-group{
    min-height:calc(100% - 150px);
  }
}


@media(max-width:768px){
    .aplicacao{
      grid-template-columns: 250px 1fr;
    }

}
@media(max-width:540px){
  .aplicacao{
      grid-template-columns:1fr;

      .els-default{
        position:fixed;
        min-height:100vh;
        width:100%;
        z-index:99;
      }
      .els-default:after{
        content:'Ops! Não funciona abaixo da resolução 540px';
        display:flex;
        align-items:center;
        justify-content:center;
        height:calc(100vh - 60px);
        width:calc(100% - 40px);
        padding:20px;
        text-align:center;
      }
      .els-default *{
        display:none;
      }
    }
}
</style>
