<template>
  <div>
    {{list}} 列表页
    <div>{{msg}}
    </div>
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
      return this.$store.state.list
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
