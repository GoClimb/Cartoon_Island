import Vue from 'vue'
import Vuex from 'vuex'

import cityModule from './cityModule/'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city: cityModule
  }
})
