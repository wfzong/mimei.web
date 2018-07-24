<template>
  <div>
    <h1>{{item.title}}</h1>
    <div v-html="item.content"></div>
    details: {{item}} -
    <input v-model="msg"> {{msg}}
    <router-link to="/details/5">GOOOO</router-link>
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
    let item = store.dispatch('FETCH_ITEM', { id: route.params.id })
    return Promise.all([item])
    // return false
  },
  computed: {
    item () {
      console.log('#######this.$store.state: ')
      return this.$store.state.items[this.$route.params.id]
      // return this.$store.state
    }
  }
}
</script>
