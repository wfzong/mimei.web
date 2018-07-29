import { getArticleList, getArticleDetails } from '@/api/article'

export default {
  FETCH_LIST_DATA: ({ commit, dispatch, state }, data) => {
    console.log('FETCH_LIST_DATA executed...', data)
    return getArticleList(data).then(res => {
      // console.log('##', res.list)
      commit('SET_LIST', res)
    })
  },
  FETCH_ITEM: ({ commit }, data) => {
    console.log('FETCH_ITEM executed...')
    return getArticleDetails(data).then(item => {
      // console.log('#######', item)
      commit('SET_ITEM', { id: data.id, item })
    })
  },
  FETCH_INDEX_DATA: ({ commit }) => {
    console.log('FETCH_INDEX_DATA executed...')
    let recArticle = getArticleList({
      'artType': 'normal',
      'recommend': 1,
      'limit': 4
    }).then(res => {
      commit('SET_INDEX_REC_ARTICLE_LIST', res.list)
    })
    let bigImgList = getArticleList({
      artType: 'photos',
      recommend: 1,
      limit: 4
    }).then(res => {
      commit('SET_INDEX_BIG_IMG_LIST', res.list)
    })
    let newArticles = getArticleList({
      artType: 'normal',
      limit: 5
    }).then(res => {
      commit('SET_INDEX_NEW_ARTICLES_LIST', res.list)
    })
    let newImages = getArticleList({
      artType: 'photos',
      limit: 5
    }).then(res => {
      commit('SET_INDEX_NEW_IMAGES_LIST', res.list)
    })
    return Promise.all([bigImgList, recArticle, newArticles, newImages])
  }
}
