import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from "./../apis/users"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:{
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser){
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser ({commit}) {
      try{  
        const { data, statusText } = await usersAPI.getCurrentUser()
        if(statusText !== "OK"){
          throw new Error(statusText)
        }

        commit("setCurrentUser", {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          isAdmin: data.isAdmin
        })
      }catch(error){
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
