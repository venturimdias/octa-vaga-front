<template>
  <div class="home" >
    <h1>Apresentação</h1>

    <div class="cont-form" :class="[cardItens != '' ? '' : 'hide', theme]">
      <h3>
        Simulação do formulário

        <div class="cont-themes">
          Personalize: 
          <button @click="themeColor('')" class="th1">1</button>
          <button @click="themeColor('theme-black')" class="th2">2</button>
          <button @click="themeColor('theme-blue')" class="th3">3</button>
        </div>
      </h3>
      
      <Cards-template 
        v-for="(card, index) in cardItens" :key="index"
        :id="card.id"
        :name="card.name"
        :type="card.type"
        :values="card.values"
      />
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import CardsTemplate from '@/components/Cards/CardsTemplate.vue'

export default Vue.extend({
  name: 'Home',
  components:{
    CardsTemplate
  },
  data(){
    return{
      cardItens: this.$store.state.listDefault,
      theme: '',
    }
  },
  methods:{
    themeColor(color: string){
      this.theme = color
    }
  }
})
</script>

<style lang="scss" scoped>
.cont-form{
  max-width:600px;
  width:95%;
  margin:20px auto;
  padding:30px;
  box-shadow:0 0 5px rgba(0,0,0,.2);
  border-radius:10px;

  /* Thema black */
  &.theme-black{
    background:var(--black-800);
    color:var(--black-200);

    h3{
      color:var(--black-200);
    }
  }
  /* Thema blue */
  &.theme-blue{
    background:var(--blue-200);
    color:var(--blue-800);

    h3{
      color:var(--blue-800);
    }
  }

  &.hide{
    display:none;
  }

  h3{
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:20px;

    .cont-themes{
      font-weight:400;
      font-size:1.4rem;

      button{
        border-radius:50%;
        width:24px;
        height: 24px;
        outline: 0;
        border:1px solid var(--white);
        text-indent:-9999px;
        margin-left:3px;

        &.th1{
          background:var(--white);
          border-color:var(--black-200);
        }
        &.th2{
          background:var(--black-800);
        }
        &.th3{
          background:var(--blue-200);
        }
      }
      
    }
  }
}
</style>