import Vue from 'vue'

export default {
  SET_INDEX_BIG_IMG_LIST: (state, list) => {
    // console.log('SET_INDEX_BIG_IMG_LIST exec', list)
    state.indexBigImgList = list
  },
  SET_INDEX_REC_ARTICLE_LIST: (state, list) => {
    state.indexRecArticleList = list
  },
  SET_INDEX_NEW_ARTICLES_LIST: (state, list) => {
    state.indexNewArticlesList = list
  },
  SET_INDEX_NEW_IMAGES_LIST: (state, list) => {
    state.indexNewImagesList = list
  },
  SET_LIST: (state, list) => {
    // Vue.set(state.lists, key, list)
    state.lists = list
  },
  SET_ITEM(state, { id, item }) {
    Vue.set(state.items, id, item)
  },
  // 返回token值
  setMyToken: (state, token) => {
    state.token = token
  },
  // 返回用户信息
  setUserInfo: (state, userinfo) => {
    state.userInfo = userinfo
  },
  // 初始化用户信息
  initToken: state => {
    // state.token = window.$cookies.get('think_token')
    // state.userinfo = JSON.parse(window.$cookies.get('userinfo'))
    state.initLogin = true
  }
}
