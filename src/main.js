import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
