<template>
  <div :class="{'has-open-menu':MobileMenuOpened}">
    <header-ele @MenuTrigger="MenuTrigger"></header-ele>
    <div class="list-title">
      <h2 v-if="!this.catInfo">图片及文章列表</h2>
      <h2 v-if="this.catInfo">{{this.catInfo.title}}</h2>
    </div>
    <list-element :list="listData"></list-element>

    <footer-ele></footer-ele>
  </div>
</template>


<script>
import HeaderEle from '@/components/Header.vue'
import FooterEle from '@/components/Footer.vue'
import ListElement from '@/components/common/ListArticleAndImage.vue'

export default {
  data () {
    return {
      MobileMenuOpened: false
    }
  },
  methods: {
    MenuTrigger: function (status) {
      this.MobileMenuOpened = status
    }
  },
  components: {
    HeaderEle,
    FooterEle,
    ListElement
  },
  computed: {
    catInfo: function() {
      return this.$store.state.lists.categoryInfo
    },
    listData: function () {
      return this.$store.state.lists.list
    }
  },
  title () {
    return this.catInfo && this.catInfo.title ? this.catInfo.title : '图片及文章'
  },
  created () {
  },
  watch: {
  },
  asyncData ({ store, route }) {
    // console.log('asyncData route ###', route)
    return store.dispatch('FETCH_LIST_DATA', route.query)
  }
}
</script>

<style lang="scss">
@import "~@/scss/reset";
.list-title {
  max-width: $SECTION_WIDTH_MAXIMUM;
  margin: 0 auto;

  @include min-screen($SECTION_WIDTH_LARGE) {
    padding: $PADDING_X_LARGE $PADDING_X_LARGE 0 $PADDING_X_LARGE;
  }
  @include screen($SECTION_WIDTH_MEDIUM, $SECTION_WIDTH_LARGE) {
    padding: $PADDING_MEDIUM $PADDING_MEDIUM 0 $PADDING_MEDIUM;
  }
  @include max-screen($SECTION_WIDTH_MEDIUM) {
    padding: $PADDING_X_SMALL $PADDING_X_SMALL 0 $PADDING_X_SMALL;
  }
}
</style>
