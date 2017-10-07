import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'This is local app data.'
  },
  mutations: {
    updateMessage (state, value) {
      state.message = value
    }
  }
})
