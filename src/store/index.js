import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    projects : [],
    posts : [],
    education : [],
  },
  getters : {
    getProjects(state){
      return state.projects
    }
  },
  mutations : {
    setProjects(state, payload){
      state.projects = payload
    }    
  },
  actions : {
    fetchProjects({commit}){
      axios.get('https://api.github.com/users/furkankarakuzu/repos')
      .then(response=>commit('setProjects', response.data))
    }
  }
})

export default store;