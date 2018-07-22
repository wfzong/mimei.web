import { getArticleList, getArticleDetails } from '@/api/article'

export default {
  FETCH_LIST_DATA: ({ commit, dispatch, state }, data) => {
    console.log('FETCH_LIST_DATA executed...')
    let res = getArticleList(data).then(list => {
      console.log('list: ', list)
      return commit('SET_LIST', list)
    })
    return res
  },
  FETCH_ITEM: ({ commit }, data) => {
    console.log('FETCH_ITEM executed...')
    return getArticleDetails(data).then(item => {
      console.log('#######', item)
      commit('SET_ITEM', { id: data.id, item })
    })
  },
  FETCH_INDEX_DATA: ({ commit }) => {
    console.log('FETCH_INDEX_DATA executed...')
    return true
  }
}
