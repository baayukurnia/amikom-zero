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
    statusQr: null,
    statusPreslist: null,
    isAuthenticated: false,
    performanceMode: false,
    errorMsg: null,
    statusBar: {
      color: null,
      scroll: null
    },
    Schedules: null,
    Profile: defaultProfile,
    PresenceList: null,
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
      state.statusPresence = null
      state.isAuthenticated = false
      state.Profile = defaultProfile
      state.Schedules = null
      state.PresenceList = null
      state.token = null
    },
    ['PROFILE_REQUEST']: (state) => {
      state.statusProfile = 'loading'
    },
    ['PROFILE_SUCCESS']: (state, data) => {
      state.Profile = data
      state.isAuthenticated = true
      state.statusProfile = 'success'
    },
    ['SCHEDULE_REQUEST']: (state) => {
      state.statusSchedule = 'loading'
    },
    ['SCHEDULE_SUCCESS']: (state, data) => {
      state.Schedules = data
      state.statusSchedule = 'success'
    },
    ['ACTIVITY_PRESENCE_REQUEST']: (state) => {
      state.statusPresence = 'loading'
    },
    ['ACTIVITY_PRESENCE_SUCCESS']: (state) => {
      state.statusPresence = 'success'
    },
    ['ACTIVITY_PRESENCE_RESET']: (state) => {
      state.statusPresence = null
    },
    ['ACTIVITY_PRESENCE_ERROR']: (state) => {
      state.statusPresence = 'error'
    },
    ['ACTIVITY_QR_REQUEST']: (state) => {
      state.statusQr = 'loading'
    },
    ['ACTIVITY_QR_SUCCESS']: (state) => {
      state.statusQr = 'success'
    },
    ['ACTIVITY_QR_ERROR']: (state) => {
      state.statusQr = 'error'
    },
    ['PRESENCE_LIST_REQUEST']: state => {
      state.statusPreslist = 'loading'
    },
    ['PRESENCE_LIST_SUCCESS']: (state, data) => {
      state.PresenceList = data
      state.statusPreslist = 'success'
    },
    ['PRESENCE_LIST_ERROR']: state => {
      state.statusPreslist = 'error'
    },
    ['PRESENCE_DETAILS_REQUEST']: state => {
      state.statusPresenceDetails = 'loading'
    },
    ['PRESENCE_DETAILS_PARTIAL']: (state, {index, data}) => {
      state.PresenceList[index].PresenceDetail = data
    },
    ['PRESENCE_DETAILS_SUCCESS']: state => {
      state.statusPresenceDetails = 'success'
    },
		initialiseStore(state) {
      // Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
      }
      state.statusAuth=null
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
          commit('AUTH_ERROR')
          console.log(err.response)
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err.response)
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
    ['SCHEDULE_REQUEST']: ({commit, dispatch, state}) =>{
      return new Promise((resolve, reject) =>{
        commit('SCHEDULE_REQUEST')
        const token = localStorage.getItem('user-token')
        const nim = state.Profile.Mhs.Npm
        axios.post('/jadwal', qs.stringify({nim, token }))
        .then(resp => {
          const data = resp.data.data
          commit('SCHEDULE_SUCCESS', data)
          dispatch('PRESENCE_LIST_REQUEST')
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    ['ACTIVITY_PRESENCE_REQUEST']: ({commit, dispatch}, {nim, kode}) =>{
      return new Promise((resolve, reject) =>{
        commit('ACTIVITY_PRESENCE_REQUEST')
        axios.post('/presensi_kode', qs.stringify({nim, kode}))
        .then(resp => {
          const data = resp.data
          const status = data.status
          if(status == true){
            commit('ACTIVITY_PRESENCE_SUCCESS')
            dispatch('PRESENCE_LIST_REQUEST')
          }
          else if(status == false){
            commit('ACTIVITY_PRESENCE_ERROR')
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
    ['ACTIVITY_QR_REQUEST']: ({commit, state}, kodeqr) =>{
      return new Promise((resolve, reject) =>{
        commit('ACTIVITY_QR_REQUEST')
        const nim = state.Profile.Mhs.Npm
        axios.post('/presensi_qr', qs.stringify({nim, kodeqr }))
        .then(resp => {
          const data = resp.data
          const status = data.status
          if(status == true){
            commit('ACTIVITY_QR_SUCCESS')
          }
          else if(status == false){
            commit('ACTIVITY_QR_ERROR')
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
    ['PRESENCE_LIST_REQUEST']: ({commit, dispatch, state}) => {
      return new Promise((resolve, reject) => {
        commit('PRESENCE_LIST_REQUEST')
        const token = localStorage.getItem('user-token')
        const nim = state.Profile.Mhs.Npm
        const semester = state.Profile.PeriodeAkademik.Semester
        const tahunAkademi = state.Profile.PeriodeAkademik.TahunAkademik
        axios.post('/list_presensi', qs.stringify({token, nim, semester, tahunAkademi}))
        .then(resp => {
          const data = resp.data.data
          const status = resp.data.status
          if(status == true){
            commit('PRESENCE_LIST_SUCCESS', data)
            data.forEach((d, index, array) => {
              dispatch('PRESENCE_DETAILS_REQUEST', d.KrsId).then(resp => {
                const data = resp.data.data
                commit('PRESENCE_DETAILS_PARTIAL', {index, data})
                if (index === array.length - 1){
                  commit('PRESENCE_DETAILS_SUCCESS')
                }
              })
            })
          }
          else if(status == false){
            commit('PRESENCE_LIST_ERROR')
          }
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    ['PRESENCE_DETAILS_REQUEST']: ({commit}, krsId) => {
      return new Promise((resolve, reject) => {
        commit('PRESENCE_DETAILS_REQUEST')
        const token = localStorage.getItem('user-token')
        axios.post('/detail_presensi', qs.stringify({token, krsId}))
        .then(resp => {
          resolve(resp)
          return resp.data
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  },
  getters: {
    scheduleDays: (state) => {
      if(state.statusSchedule == "success"){
        const days = state.Schedules.map(schedule => schedule.Hari)
        return new Set(days)
      }
    },
    getScheduleByDay: (state) => (day) => {
      if(state.statusSchedule == "success"){
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
        const todaySchedules = state.Schedules.filter(schedule => schedule.Hari === day)
        if (todaySchedules.length > 0){
          return todaySchedules
        }
        else{
          return "Tidak ada jadwal di hari " + day.toLowerCase() + ". Chill. Sans."
        }
      }
    },
    getKrsId: (state) => (matkul) => {
      if(state.statusPreslist == "success"){
        const krsid = state.PresenceList.filter(mk => mk.NamaMk === matkul)
        return krsid[0].KrsId
      }
    },
    getPresenceStatus: (state) => (krsId, JenisKuliah, date) => {
      if(state.statusPresenceDetails == 'success'){
        if(state.PresenceList.every((p) => p.PresenceDetail != null)){
            const presenceName = state.PresenceList.filter(p => p.KrsId === krsId)[0] // filter Matkul dg KrsId
            if(presenceName.PresenceDetail.filter(d => d.Tanggal === date && d.JenisKuliah == JenisKuliah).length == 1){
              return true
            }
            else{
              return false
            }
        }
      }
    },
    getPresenceTimeline: (state) => (KrsId) => {
      return state.PresenceList.filter(p => p.KrsId === KrsId)[0]
    }
  }
})
