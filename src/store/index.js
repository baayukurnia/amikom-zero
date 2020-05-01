import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios')
const qs = require('querystring')

Vue.use(Vuex)

const API_URL = 'https://api.febridk.id'

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
    schedules: [{"IdKuliah":42696,"Keterangan":"","Hari":"SENIN","Ruang":"04.04.01","Waktu":"07.00 - 08.40","Kode":"ST014","MataKuliah":"KOMUNIKASI DATA","JenisKuliah":"Teori","Kelas":"19-S1IF-11","Nik":"190302484","NamaDosen":"Bayu Nadya Kusuma, S.T., M.Eng","Jenjang":"S1"},{"IdKuliah":41886,"Keterangan":"","Hari":"SENIN","Ruang":"05.04.03","Waktu":"08.50 - 10.30","Kode":"ST123","MataKuliah":"HARDWARE/ SOFTWARE I","JenisKuliah":"Teori","Kelas":"19-S1IF-11","Nik":"190302248","NamaDosen":"Mulia Sulistiyono, M.Kom","Jenjang":"S1"},{"IdKuliah":42695,"Keterangan":"","Hari":"SENIN","Ruang":"L 7.4.3","Waktu":"13.20 - 15.00","Kode":"ST014","MataKuliah":"KOMUNIKASI DATA","JenisKuliah":"Praktikum","Kelas":"19-S1IF-11","Nik":"190302484","NamaDosen":"Bayu Nadya Kusuma, S.T., M.Eng","Jenjang":"S1"},{"IdKuliah":41755,"Keterangan":"","Hari":"SELASA","Ruang":"05.02.08","Waktu":"07.00 - 08.40","Kode":"ST016","MataKuliah":"BAHASA INGGRIS II","JenisKuliah":"Teori","Kelas":"19-S1IF-11","Nik":"190302266","NamaDosen":"Rosyidah Jayanti Vijaya, SE, M.Hum","Jenjang":"S1"},{"IdKuliah":41887,"Keterangan":"","Hari":"SELASA","Ruang":"L 7.4.3","Waktu":"08.50 - 10.30","Kode":"ST123","MataKuliah":"HARDWARE/ SOFTWARE I","JenisKuliah":"Praktikum","Kelas":"19-S1IF-11","Nik":"190302248","NamaDosen":"Mulia Sulistiyono, M.Kom","Jenjang":"S1"},{"IdKuliah":41847,"Keterangan":"","Hari":"SELASA","Ruang":"L 7.4.1","Waktu":"13.20 - 15.00","Kode":"ST021","MataKuliah":"PEMROGRAMAN","JenisKuliah":"Praktikum","Kelas":"19-S1IF-11","Nik":"190302484","NamaDosen":"Bayu Nadya Kusuma, S.T., M.Eng","Jenjang":"S1"},{"IdKuliah":41871,"Keterangan":"","Hari":"RABU","Ruang":"05.04.02","Waktu":"08.50 - 10.30","Kode":"ST094","MataKuliah":"ORGANISASI & ARSITEKTUR KOMPUTER","JenisKuliah":"Teori","Kelas":"19-S1IF-11","Nik":"190302039","NamaDosen":"Yudi Sutanto, M. Kom","Jenjang":"S1"},{"IdKuliah":42694,"Keterangan":"","Hari":"RABU","Ruang":"05.02.01","Waktu":"13.20 - 15.00","Kode":"ST015","MataKuliah":"STRUKTUR DATA","JenisKuliah":"Teori","Kelas":"19-S1IF-11","Nik":"190302037","NamaDosen":"Ema Utami, Prof. Dr., S.Si., M.Kom.","Jenjang":"S1"},{"IdKuliah":41776,"Keterangan":"","Hari":"KAMIS","Ruang":"05.04.05","Waktu":"08.50 - 10.30","Kode":"ST019","MataKuliah":"SISTEM OPERASI","JenisKuliah":"Teori","Kelas":"19-S1IF-11","Nik":"190302276","NamaDosen":"Ferian Fauzi Abdulloh, M.Kom","Jenjang":"S1"},{"IdKuliah":41734,"Keterangan":"","Hari":"KAMIS","Ruang":"L 2.4.2","Waktu":"10.40 - 12.20","Kode":"ST015","MataKuliah":"STRUKTUR DATA","JenisKuliah":"Praktikum","Kelas":"19-S1IF-11","Nik":"190302037","NamaDosen":"Ema Utami, Prof. Dr., S.Si., M.Kom.","Jenjang":"S1"},{"IdKuliah":41777,"Keterangan":"","Hari":"JUMAT","Ruang":"L 7.4.2","Waktu":"08.50 - 10.30","Kode":"ST019","MataKuliah":"SISTEM OPERASI","JenisKuliah":"Praktikum","Kelas":"19-S1IF-11","Nik":"190302276","NamaDosen":"Ferian Fauzi Abdulloh, M.Kom","Jenjang":"S1"}]
    ,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    authStatus: false,
    performanceMode :false,
    statusBar: {
      color: null,
      scroll: null
    },
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
        axios({ method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(user),
                url: API_URL+'/amikom'})
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
          url: API_URL+'/profile'
        })
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
        axios({
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded'},
          data: qs.stringify({nim: state.profile.Mhs.Npm, token: localStorage.getItem('user-token')}),
          url: API_URL+'/jadwal'
        })
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
        axios({
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded'},
          data: qs.stringify({nim: state.profile.data.Mhs.Npm, token: localStorage.getItem('user-token')}),
          url: API_URL+'/presensi'
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
  },
  getters: {
    todaySchedules: state => {
      return state.schedules.filter(schedule => schedule.Hari === 'SENIN')
    }
  }
})
