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
    statusPreslist: null,
    isAuthenticated: false,
    performanceMode: false,
    statusBar: {
      color: null,
      scroll: null
    },
    Schedules: null,
    Profile: defaultProfile,
    PresenceList: null,
    PresenceDetail: []
    // PresenceList: [
    //   {"KrsId":2681448,"Kode":"ST013","NamaMk":"LINGKUNGAN BISNIS","NamaMkEn":"BUSINESS ENVIRONMENT","JmlSks":2,"JmlPresensiKuliah":0,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[]},
    //   {"KrsId":2681449,"Kode":"ST014","NamaMk":"KOMUNIKASI DATA","NamaMkEn":"DATA COMMUNICATION","JmlSks":4,"JmlPresensiKuliah":5,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"30 Mar 2020","Jam":"07:57:02","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"24 Mar 2020","Jam":"15:10:32","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"15 Apr 2020","Jam":"11:23:13","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"09 Mar 2020","Jam":"13:34:22","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"02 Mar 2020","Jam":"14:04:25","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"}]},
    //   {"KrsId":2681057,"Kode":"ST015","NamaMk":"STRUKTUR DATA","NamaMkEn":"DATA STRUCTURES","JmlSks":4,"JmlPresensiKuliah":9,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"19 Mar 2020","Jam":"21:21:13","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"19 Mar 2020","Jam":"21:30:08","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"15 Apr 2020","Jam":"23:50:15","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"13 Apr 2020","Jam":"23:56:38","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"12 Mar 2020","Jam":"10:57:46","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"08 Apr 2020","Jam":"20:42:04","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"05 Mar 2020","Jam":"11:04:57","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"02 Apr 2020","Jam":"00:20:05","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"01 Apr 2020","Jam":"17:22:32","Kelas":"19-S1IF-11","JenisKuliah":"Teori"}]},
    //   {"KrsId":2681447,"Kode":"ST016","NamaMk":"BAHASA INGGRIS II","NamaMkEn":"ENGLISH II","JmlSks":2,"JmlPresensiKuliah":3,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"24 Mar 2020","Jam":"14:36:59","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"17 Mar 2020","Jam":"14:32:20","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"03 Mar 2020","Jam":"07:06:43","Kelas":"19-S1IF-11","JenisKuliah":"Teori"}]},
    //   {"KrsId":2681061,"Kode":"ST019","NamaMk":"SISTEM OPERASI","NamaMkEn":"OPERATING SYSTEMS","JmlSks":4,"JmlPresensiKuliah":10,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"26 Mar 2020","Jam":"10:28:34","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"20 Mar 2020","Jam":"09:44:11","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"19 Mar 2020","Jam":"09:07:37","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"13 Mar 2020","Jam":"09:12:19","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"12 Mar 2020","Jam":"09:04:59","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"10 Apr 2020","Jam":"13:39:02","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"06 Mar 2020","Jam":"09:06:03","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"05 Mar 2020","Jam":"08:58:38","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"03 Apr 2020","Jam":"08:47:51","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"02 Apr 2020","Jam":"08:31:36","Kelas":"19-S1IF-11","JenisKuliah":"Teori"}]},
    //   {"KrsId":2681062,"Kode":"ST021","NamaMk":"PEMROGRAMAN","NamaMkEn":"PROGRAMMING","JmlSks":2,"JmlPresensiKuliah":5,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"24 Mar 2020","Jam":"14:45:25","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"17 Mar 2020","Jam":"13:33:07","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"14 Apr 2020","Jam":"13:47:25","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"10 Mar 2020","Jam":"13:32:31","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"03 Mar 2020","Jam":"13:29:21","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"}]},
    //   {"KrsId":2681451,"Kode":"ST094","NamaMk":"ORGANISASI & ARSITEKTUR KOMPUTER","NamaMkEn":"COMPUTER ORGANIZATION & ARCHITECTUR","JmlSks":2,"JmlPresensiKuliah":3,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"15 Apr 2020","Jam":"09:15:09","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"11 Mar 2020","Jam":"09:00:10","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"02 Apr 2020","Jam":"07:39:08","Kelas":"19-S1IF-11","JenisKuliah":"Teori"}]},
    //   {"KrsId":2681444,"Kode":"ST123","NamaMk":"HARDWARE/ SOFTWARE I","NamaMkEn":"HARDWARE/ SOFTWARE I","JmlSks":4,"JmlPresensiKuliah":12,"IsHadirMID":0,"IsHadirUAS":0,"DetailPresensi":[{"Tanggal":"31 Mar 2020","Jam":"10:26:31","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"30 Mar 2020","Jam":"08:58:29","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"24 Mar 2020","Jam":"09:12:00","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"23 Mar 2020","Jam":"09:31:53","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"17 Mar 2020","Jam":"10:07:57","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"16 Mar 2020","Jam":"09:21:54","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"14 Apr 2020","Jam":"02:56:14","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"13 Apr 2020","Jam":"09:14:59","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"09 Mar 2020","Jam":"09:01:17","Kelas":"19-S1IF-11","JenisKuliah":"Teori"},{"Tanggal":"06 Apr 2020","Jam":"09:08:22","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"03 Mar 2020","Jam":"08:56:53","Kelas":"19-S1IF-11","JenisKuliah":"Praktikum"},{"Tanggal":"02 Mar 2020","Jam":"09:04:30","Kelas":"19-S1IF-11","JenisKuliah":"Teori"}]}
    // ]
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
    ['PRESENCE_DETAILS_SUCCESS']: (state, {index, data}) => {
      state.PresenceList[index].PresenceDetail = data
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
    ['ACTIVITY_PRESENCE_REQUEST']: ({commit, dispatch, state}) =>{
      return new Promise((resolve, reject) =>{
        commit('ACTIVITY_PRESENCE_REQUEST')
        const token = localStorage.getItem('user-token')
        const nim = state.Profile.Mhs.Npm
        axios.post('/presensi', qs.stringify({nim, token }))
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
            data.forEach((d, index) => {
              dispatch('PRESENCE_DETAILS_REQUEST', d.KrsId).then(resp => {
                const data = resp.data.data
                commit('PRESENCE_DETAILS_SUCCESS', {index, data})
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
      if(state.statusPresenceDetails == 'success' && state.PresenceList.every((p) => p.PresenceDetail != null)){
          const presenceName = state.PresenceList.filter(p => p.KrsId === krsId)[0] // filter Matkul dg KrsId
          if(presenceName.PresenceDetail.filter(d => d.Tanggal === date && d.JenisKuliah == JenisKuliah).length == 1){
            return true
          }
          else{
            return false
          }
      }
    }
  }
})
