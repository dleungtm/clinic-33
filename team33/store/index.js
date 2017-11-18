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
      // state.authUser has user_id, username and full_name
      state.authUser = user
    },

    SET_ROLES: function (state, roleIds) {
      // save roles onto state
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
    },

    CLEAR_ROLES: function (state) {
      // save roles onto state
      state.isAdmin = false
      state.isClinician = false
      state.isReceptionist = false
      state.isReceptionist = false
      state.isPatient = false
    }
  },

  actions: {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      } if (req.session && req.session.roleIds) {
        commit('SET_ROLES', req.session.roleIds)
      }
    },

    async login ({ commit }, { username, password }) {
      try {
        const { data } = await axios.post('/api/login', { username, password })
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
      commit('CLEAR_ROLES', null)
    }
  }

})

export default store
