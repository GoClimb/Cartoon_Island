const city = window.sessionStorage.getItem('city')
const state = {
  curCity: city ? JSON.parse(city) : null
}

const getters = {
  cityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

const mutations = {
  set_cityName (state, payload) {
    state.curCity = payload
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
