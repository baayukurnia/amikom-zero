import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('../backend')
const qs = require('querystring')

Vue.use(Vuex)

const defaultProfile = {
  Mhs:{
    Npm: "",
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

export default new Vuex.Store({
  state: {
    statusAuth: null,
    statusSchedule: null,
    statusProfile: null,
    statusPresence: null,
    isAuthenticated: false,
    performanceMode: false,
    statusBar: {
      color: null,
      scroll: null
    },
    schedules: null,
    profile: defaultProfile,
  },
  modules: {
    token: localStorage.getItem('user-token') || '',
  },
  mutations: {
    ['AUTH_REQUEST']: (state) => {
      state.statusAuth = 'loading'
    },
    ['AUTH_SUCCESS']: (state, token) => {
      state.statusAuth = 'success'
      state.token = token
    },
    ['AUTH_ERROR']: (state) => {
      state.statusAuth = 'error'
      state.isAuthenticated = false
    },
    ['AUTH_LOGOUT']: (state) => {
      state.statusAuth = 'unauthorized'
      state.statusSchedule = null
      state.statusProfile = null
      state.isAuthenticated = false
      state.profile = defaultProfile
      state.schedules = null
    },
    ['PROFILE_REQUEST']: (state) => {
      state.statusProfile = 'loading'
    },
    'PROFILE_SUCCESS': (state, data) => {
      state.profile = data
      state.isAuthenticated = true
      state.statusProfile = 'success'
    },
    'SCHEDULE_REQUEST': (state) => {
      state.statusSchedule = 'loading'
    },
    'SCHEDULE_SUCCESS': (state, data) => {
      state.schedules = data
      state.statusSchedule = 'success'
    },
    'PRESENCE_REQUEST': (state) => {
      state.statusPresence = 'loading'
    },
    'PRESENCE_SUCCESS': (state) => {
      state.statusPresence = 'success'
    },
    'PRESENCE_RESET': (state) => {
      state.statusPresence = null
    },
    'PRESENCE_ERROR': (state) => {
      state.statusPresence = 'error'
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
        axios.post('/amikom', qs.stringify(user))
          .then(resp => {
            const token = resp.data.access_token
            localStorage.setItem('user-token', token) // store the token in localstorage
            commit('AUTH_SUCCESS', token)
            // you have your token, now log in your user :)
            dispatch('PROFILE_REQUEST')
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
    ['PROFILE_REQUEST']: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit('PROFILE_REQUEST')
        const token = localStorage.getItem('user-token')
        axios.post('/profile', qs.stringify({token}))
        .then(resp => {
          const data = resp.data.data
          commit('PROFILE_SUCCESS', data)
          dispatch('SCHEDULE_REQUEST')
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }, 
    ['SCHEDULE_REQUEST']: ({commit, state}) =>{
      return new Promise((resolve, reject) =>{
        commit('SCHEDULE_REQUEST')
        const token = localStorage.getItem('user-token')
        const nim = state.profile.Mhs.Npm
        axios.post('/jadwal', qs.stringify({nim, token }))
        .then(resp => {
          const data = resp.data.data
          commit('SCHEDULE_SUCCESS', data)
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    ['PRESENCE_REQUEST']: ({commit, dispatch, state}) =>{
      return new Promise((resolve, reject) =>{
        commit('PRESENCE_REQUEST')
        const token = localStorage.getItem('user-token')
        const nim = state.profile.Mhs.Npm
        axios.post('/presensi', qs.stringify({nim, token }))
        .then(resp => {
          const data = resp.data
          const status = data.status
          if(status == true){
            commit('PRESENCE_SUCCESS')
            dispatch('SCHEDULE_REQUEST')
          }
          else if(status == false){
            commit('PRESENCE_ERROR')
          }
          resolve(resp)
          console.log(data.status)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
  },
  getters: {
    scheduleDays: (state) => {
      if(state.schedules != null){
        const days = state.schedules.map(schedule => schedule.Hari)
        return new Set(days)
      }
    },
    getScheduleByDay: (state) => (day) => {
      if(state.schedules != null){
        switch (day) {
          case 0:
            day = "MINGGU";
            break;
          case 1:
            day = "SENIN";
            break;
          case 2:
             day = "SELASA";
            break;
          case 3:
            day = "RABU";
            break;
          case 4:
            day = "KAMIS";
            break;
          case 5:
            day = "JUMAT";
            break;
          case 6:
            day = "SABTU";
        }
        const todaySchedules = state.schedules.filter(schedule => schedule.Hari === day)
        if (todaySchedules.length > 0){
          return todaySchedules
        }
        else{
          return "Tidak ada jadwal di hari " + day.toLowerCase() + ". Chill. Sans."
        }
      }
    }
  }
})
