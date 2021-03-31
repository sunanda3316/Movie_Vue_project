import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d4aad4d8341ffc22815084ec2e55fa11&language=en-US&page=1&Content-Type=application/json'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
