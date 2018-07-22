import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {
        /* [id: number]: Item */
      },
      lists: [],
      // 原有的数据
      initLogin: false,
      token: null,
      userInfo: null
    },
    actions,
    mutations,
    getters
  })
}
