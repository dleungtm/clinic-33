import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Polyfill for `window.fetch()`
require('whatwg-fetch')

const store = () => new Vuex.Store({

  state: {
    authUser: null,
    isAdmin: false,
    isClinician: false,
    isReceptionist: false,
    isPharmacist: false,
    isPatient: false
  },

  mutations: {
    SET_USER: function (state, user) {
      // state.authUser has user_id and username
      state.authUser = user
    },

    SET_ROLES: function (state, roles) {
      var roleIds = roles.map(function (obj) { return obj.role_id })
      if (roleIds.includes(1)) {
        state.isAdmin = true
      } if (roleIds.includes(2)) {
        state.isClinician = true
      } if (roleIds.includes(3)) {
        state.isReceptionist = true
      } if (roleIds.includes(4)) {
        state.isReceptionist = true
      } if (roleIds.includes(5)) {
        state.isPatient = true
      }
    }
  },

  actions: {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },

    async login ({ commit }, { username, password }) {
      try {
        const { data } = await axios.post('/api/login', { username, password })
        console.log(data)
        commit('SET_USER', data)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },

    async getRoles ({ commit }) {
      try {
        const { data } = await axios.get('/api/user_roles/' + this.state.authUser.user_id)
        console.log(data)
        commit('SET_ROLES', data)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },

    async logout ({ commit }) {
      await axios.post('/api/logout')
      commit('SET_USER', null)
    }
  }

})

export default store
