<template>
  <div>
     列表页
    <ul>
      <li v-for="(item, index) in list.list">
        <router-link :to="'/details/'+item.id">{{item.title}}</router-link>
      </li>
    </ul>
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
    console.log('asyncData执行--------------')
    return store.dispatch('FETCH_LIST_DATA', { limit: 5 })
    // console.log('YESSS')
  },
  beforeMount () {
    // this.fetchList()
    console.log('this.$root._isMounted: ', this.$root._isMounted)
    if(this.$root._isMounted){

    } else {
      
    }
  },
  methods: {
    // fetchList () {

    // }
  }
}
</script>
