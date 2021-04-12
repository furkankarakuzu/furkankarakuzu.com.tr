import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    projects : [],
    posts : [],
    education : [],
    apiID : "606f5a169bac99b28a35bde0",
    baseURL : 'https://dummyapi.io/data/api'
  },
  getters : {
    getProjects(state){
      return state.projects
    },
    getApiID(state){
      return state.apiID
    },
    getBaseURL(state){
      return state.baseURL
    },
    getPost : state => id =>{
      return state.posts.find(post => {return post.id==id})
    }
  },
  mutations : {
    setProjects(state, payload){
      state.projects = payload
    },
    setPosts(state, payload){
      state.posts = payload
    }    
  },
  actions : {
    fetchProjects({commit}){
      axios.get('https://api.github.com/users/furkankarakuzu/repos')
      .then(response=>commit('setProjects', response.data))
    },
    fetchPosts({commit,state}){
      axios.get(`${state.baseURL}/post`, { headers: { 'app-id': state.apiID } })
      .then(response=>commit('setPosts',response.data.data))
    }
  }
})

export default store;