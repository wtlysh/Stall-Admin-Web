import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './assets/scss/style.scss'
import './assets/scss/reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
