<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/Header.vue'; 

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
:root{
  --white:#FFF;

  --black-800:#202124;
  --black-600:#5f6368;
  --black-400:#707070;
  --black-200:#c0c0c0;
  --black-100:#ececec;

  --blue-800:#072a54;
  --blue-400:#3898ec;
  --blue-200:#bfddff;
}
*{ padding:0; margin:0; box-sizing: border-box; }
input, select, textarea, button,
html {
  font-family: 'Open Sans', sans-serif;
  font-size:62.5%;
}
body{
  line-height: 120%;
  background:var(--white);
  color:var(--black-400);
  display:flex;
  width:100%;
  min-height:100vh;
  font-size:1.8rem;
}
#app{
  width:100%;
  display:flex;
  flex-direction: column;
}
main{
  flex:1;
}
h1, h2, h3{
  color:var(--blue-800);
}
h1{
  padding:1.5rem 1.5rem; 
  font-size:3.5rem;
  line-height:120%;
}
h2{
  font-size:2.0rem;
}


</style>
