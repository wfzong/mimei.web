<template>

    <div :class="{'has-open-menu':MobileMenuOpened}">
        <header-ele @MenuTrigger="MenuTrigger"></header-ele>
        <div class="details-content" v-if="post">
            <item-photo v-if="post.artType === 'photos'" :info="post"></item-photo>
            <item-article v-if="post.artType === 'normal'" :info="post"></item-article>
        </div>
        <footer-ele></footer-ele>
    </div>
</template>
<script>

import HeaderEle from '@/components/Header.vue'
import FooterEle from '@/components/Footer.vue'
import ItemPhoto from '@/components/common/ItemPhoto.vue'
import ItemArticle from '@/components/common/ItemArticle.vue'
// import myStorage from '../Storage'

export default {
  components: { HeaderEle, FooterEle, ItemPhoto, ItemArticle },
  data() {
    return {
      MobileMenuOpened: false
    }
  },
  methods: {
    MenuTrigger: function(status) {
      this.MobileMenuOpened = status
    }
  },
  computed: {
    post() {
      return this.$store.state.items[this.$route.params.id]
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    // '$route': 'fetchData'
  },
  mounted() {
    console.log(this.$route)
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_ITEM_DATA', route.params)
  },
  title() {
    console.log('this.post', this.post)
    return this.post.title
  }
}
</script>
<style lang="scss">
@import "~@/scss/reset";
.details-content {
  max-width: $SECTION_WIDTH_MAXIMUM;
  margin:0 auto;
}
</style>


