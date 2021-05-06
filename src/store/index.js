import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const template = []

export default new Vuex.Store({
  state: {
    listDefault: template,
  },
  mutations: {
    
    setRemoveCard(state, setState){
      state.listDefault.splice(setState,1)
    },
    setRemoveCardItem(state, setState){
      let indice = setState.indice
      let index = setState.index

      let { values } = state.listDefault[indice]

      // quebro o observe
      values = JSON.parse(JSON.stringify(values))
      values.splice(index,1)

      // atualizar a lista
      state.listDefault[indice].values = values
    },
    setUpdateCardTitle(state, setState){
      state.listDefault[setState.index].name = setState.title
    },
    setAddValue(state, setState){
      let indice = setState.indice
      let title = setState.title

      let { values } = state.listDefault[indice]

      // quebro o observe
      values = JSON.parse(JSON.stringify(values))
      values.push(title)
      
      // atualizar a lista
      state.listDefault[indice].values = values
    },
  },
  actions: {
  },
  modules: {
  }
}) 
