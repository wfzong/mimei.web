import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      indexBigImgList: [],
      indexRecArticleList: [],
      indexNewArticlesList: [],
      indexNewImagesList: [],
      activeType: null,
      itemsPerPage: 20,
      items: {},
      lists: [],
      // 原有的数据
      token: null,
      userInfo: null
    },
    actions,
    mutations,
    getters
  })
}
