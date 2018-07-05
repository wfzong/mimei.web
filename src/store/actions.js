import { getArticleList, getArticleDetails } from '@/api/article'

export default {
  FETCH_LIST_DATA: ({ commit, dispatch, state }, data) => {
    let res = getArticleList(data).then(list => {
      console.log('list: ', list)
      return commit('SET_LIST', 'info', list)
    })
    return res
  },
  FETCH_ITEM: ({ commit }, data) => {
    return getArticleDetails(data).then(item => {
      console.log('#######', item)
      commit('SET_ITEM', { id: data.id, item })
    })
  }
}
