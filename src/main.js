import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import '@/assets/style/base.scss'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/icon/header-logo.png'),
  loading: require('./assets/icon/loading.gif'),
  attempt: 5
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
