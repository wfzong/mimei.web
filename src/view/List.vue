<template>
  <div>
    {{list}} 列表页
    <ul>
      <!-- <li v-for="(item,key) in list" :key="key">{{item.title}}</li> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: 'listarticle',
  data: () => {
    return {
      msg: 'hello~'
    }
  },
  computed: {
    list () {
      return this.$store.state.lists
      // return 'text'
    }
  },
  asyncData ({ store }) {
    // console.log('store: ', store)
    return store.dispatch('FETCH_LIST_DATA', { limit: 5 })
    // console.log('YESSS')
  },
  beforeMount () {
    this.fetchList()
  },
  methods: {
    fetchList () {

    }
  }
}
</script>
