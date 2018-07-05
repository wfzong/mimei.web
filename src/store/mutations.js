import Vue from 'vue'

export default {
  SET_LIST: (state, key, list) => {
    Vue.set(state.lists, key, list)
  },
  SET_ITEM(state, { id, item }) {
    Vue.set(state.items, id, item)
  }
}
