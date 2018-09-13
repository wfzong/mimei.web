<template>
  <div :class="{'has-open-menu':MobileMenuOpened}">
    <header-ele @MenuTrigger="MenuTrigger"></header-ele>

    <image-section :list="bigImgList"></image-section>
    <article-and-more-section :list="recArticleList" :artList="indexNewArticles" :imgList="indexNewImages"></article-and-more-section>

    <footer-ele/>
  </div>
</template>
<script>
import HeaderEle from '@/components/Header.vue'
import FooterEle from '@/components/Footer.vue'
import ImageSection from '@/components/accessories/ImageSection.vue'
import ArticleAndMoreSection from '@/components/accessories/ArticleAndMoreSection.vue'

export default {
  components: { FooterEle, HeaderEle, ImageSection, ArticleAndMoreSection },
  data () {
    return {
      MobileMenuOpened: false
    }
  },
  computed: {
    bigImgList: function () {
      return this.$store.state.indexBigImgList
    },
    recArticleList: function () {
      return this.$store.state.indexRecArticleList
    },
    indexNewArticles: function() {
      return this.$store.state.indexNewArticlesList
    },
    indexNewImages: function() {
      return this.$store.state.indexNewImagesList
    }
  },
  methods: {
    MenuTrigger: function (status) {
      this.MobileMenuOpened = status
    }
  },
  asyncData ({ store }) {
    return store.dispatch('FETCH_INDEX_DATA')
  },
  title () {
    return '网站首页'
  }
}
</script>
