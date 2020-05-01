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

const defaultschedules = [
  {
     "IdKuliah":41847,
     "Keterangan":"",
     "Hari":"SENIN",
     "Ruang":"L 7.4.1",
     "Waktu":"13.20 - 15.00",
     "Kode":"ST021",
     "MataKuliah":"PEMROGRAMAN",
     "JenisKuliah":"Praktikum",
     "Kelas":"19-S1IF-11",
     "Nik":"190302484",
     "NamaDosen":"Bayu Nadya Kusuma, S.T., M.Eng",
     "Jenjang":"S1"
  },
  {
     "IdKuliah":42694,
     "Keterangan":"",
     "Hari":"SENIN",
     "Ruang":"05.02.01",
     "Waktu":"13.20 - 15.00",
     "Kode":"ST015",
     "MataKuliah":"STRUKTUR DATA",
     "JenisKuliah":"Teori",
     "Kelas":"19-S1IF-11",
     "Nik":"190302037",
     "NamaDosen":"Ema Utami, Prof. Dr., S.Si., M.Kom.",
     "Jenjang":"S1"
  },
  {
     "IdKuliah":42696,
     "Keterangan":"",
     "Hari":"SENIN",
     "Ruang":"04.04.01",
     "Waktu":"07.00 - 08.40",
     "Kode":"ST014",
     "MataKuliah":"KOMUNIKASI DATA",
     "JenisKuliah":"Teori",
     "Kelas":"19-S1IF-11",
     "Nik":"190302484",
     "NamaDosen":"Bayu Nadya Kusuma, S.T., M.Eng",
     "Jenjang":"S1"
  },
]

export default new Vuex.Store({
  state: {
    authStatus: false,
    performanceMode :false,
    statusBar: {
      color: null,
      scroll: null
    },
    schedules: defaultschedules,
    profile: defaultProfile,
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
      state.authStatus = false
    },
    ['AUTH_LOGOUT']: (state) => {
      state.status = 'unauthorized'
      state.authStatus = false
      state.profile = defaultProfile
      state.schedules = defaultschedules
    },
    ['USER_REQUEST']: (state, data) => {
      state.profile = data
      state.authStatus = true
    },
    ['USER_SCHEDULE']: (state, data) => {
      state.schedules = data
    },
		initialiseStore(state) {
      // Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
      state.status = null
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
        const token = localStorage.getItem('user-token')
        axios.post('/profile', qs.stringify({token}))
        .then(resp => {
          const data = resp.data.data
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
        const token = localStorage.getItem('user-token')
        const nim = state.profile.Mhs.Npm
        axios.post('/jadwal', qs.stringify({nim, token }))
        .then(resp => {
          const data = resp.data.data
          commit('USER_SCHEDULE', data)
          resolve(resp)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    ['PRESENCE_POST']: ({commit, state}) =>{
      return new Promise((resolve, reject) =>{
        const token = localStorage.getItem('user-token')
        const nim = state.profile.Mhs.Npm
        axios.post('/presensi', qs.stringify({nim, token }))
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
  },
  getters: {
    todaySchedules: state => {
      var day
      switch (new Date().getDay()) {
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
          day = "SELASA";
      }
      return state.schedules.filter(schedule => schedule.Hari === day)
    }
  }
})
