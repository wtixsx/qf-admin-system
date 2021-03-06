import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import setTimeout from './modules/setTimeout'
import questionnaire from './modules/questionnaire'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    tagsView,
    setTimeout,
    questionnaire
  },
  getters
})

export default store
