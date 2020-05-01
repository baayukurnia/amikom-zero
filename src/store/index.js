import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios')
const qs = require('querystring')

Vue.use(Vuex)

const defaultProfile = {
  data: {
    Mhs:{
      Npm: null,
      Nama:"",
      Angkatan:"2019",
      EmailAmikom:"masha.raymers@students.amikom.ac.id",
      PassEmail:"******",
      NpmImg:""
    },
    PeriodeAkademik:{
      TahunAkademik:"2019/2020",
      Semester:2
    }
  }
}

export default new Vuex.Store({
  state: {
    auth: false,
    performanceMode :false,
    statusBar: {
      color: null,
      scroll: null
    },
    profile: defaultProfile,
    schedule: null,
  },
  mutations: {
    ['AUTH_REQUEST']: (state) => {
      state.status = 'loading'
    },
    ['AUTH_SUCCESS']: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    ['AUTH_ERROR']: (state) => {
      state.status = 'error'
      state.auth = false
    },
    ['AUTH_LOGOUT']: (state) => {
      state.auth = false
      state.profile = defaultProfile
    },
    ['USER_REQUEST']: (state, data) => {
      state.profile = data
      state.status = 'success'
      state.auth = true
    },
    ['USER_SCHEDULE']: (state, data) => {
      state.schedule = data
    },
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		}
  },
  actions: {
    ['AUTH_REQUEST']: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit('AUTH_REQUEST')
        axios({ method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(user),
                url: 'https://api.febridk.id/amikom'})
          .then(resp => {
            const token = resp.data.access_token
            localStorage.setItem('user-token', token) // store the token in localstorage
            commit('AUTH_SUCCESS', token)
            // you have your token, now log in your user :)
            dispatch('USER_REQUEST')
            dispatch('USER_SCHEDULE')
            resolve(resp) 
          })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err)
        })
      })
    },
    ['AUTH_LOGOUT']: ({commit}) => {
      return new Promise((resolve) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('user-token') // clear your user's token from localstorage
        resolve()
      })
    },
    ['USER_REQUEST']: ({commit}) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        // commit('AUTH_REQUEST')
        axios({
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify({token: localStorage.getItem('user-token')}),
          url: 'https://api.febridk.id/profile'
        })
        .then(resp => {
          const data = resp.data
          commit('USER_REQUEST', data)
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    ['USER_SCHEDULE']: ({commit, state}) =>{
      return new Promise((resolve, reject) =>{
        axios({
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded'},
          data: qs.stringify({nim: state.profile.data.Mhs.Npm, token: localStorage.getItem('user-token')}),
          url: 'https://api.febridk.id/jadwal'
        })
        .then(resp => {
          const data = resp.data
          commit('USER_SCHEDULE', data)
          resolve(resp)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  },
  modules: {
    token: localStorage.getItem('user-token') || '',
    status: '',
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  }
})
