import Vue from 'vue'

export default {
  SET_LIST: (state, list) => {
    // Vue.set(state.lists, key, list)
    state.lists = list
  },
  SET_ITEM(state, { id, item }) {
    Vue.set(state.items, id, item)
  }
}
