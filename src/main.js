import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
const axios = require('./backend')

import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: "#scroll-view",
  duration: 700,
  easing: "cubic-bezier(.55,0,.1,1)",
})
Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});

axios.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch('AUTH_LOGOUT')
    this.$router.push('/');
  }

  return Promise.reject(error.response);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
