<template>
  <div>
    <h1>{{item.title}}</h1>
    <div v-html="item.content"></div>
    details: {{item}} -
    <input v-model="msg"> {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'mmm'
    }
  },
  asyncData ({ store, route }) {
    console.log('################# route.params.id:', route.params.id)
    return store.dispatch('FETCH_ITEM', { id: route.params.id })
  },
  computed: {
    item () {
      console.log('#######this.$store.state: ', this.$store.state)
      return this.$store.state.items[this.$route.params.id]
      // return this.$store.state
    }
  }
}
</script>
