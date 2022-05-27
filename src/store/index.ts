import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    payload: {}
  },
  mutations: {

    login(state, login) {
      state.auth = login.autenticado
      state.payload = login.payload
      router.push('/home');
    },

    logout(state) {
      state.auth = false
      state.payload = {}
      router.push('/login');
    }
  },
  actions: {
    login({commit}, login){
      commit('login', login)
    },
    logout({commit}){
      commit('logout')
    }
  },
  modules: {
  },
  getters: {
    isUsuarioAutenticado: state => {
      return state.auth
    }
  },
  plugins: [createPersistedState()]
})
