<template>
    <section-fream section-title="文章推荐">
        <div class="section_content">
            <article-list :artList="list"></article-list>
            <list-more :artList="artList" :imgList="imgList"></list-more>
        </div>
    </section-fream>
</template>
<script>
import SectionFream from '@/components/common/SectionFream.vue'
import ArticleList from '@/components/common/ArticleList.vue'
import ListMore from '@/components/common/ListMore.vue'

export default {
  props: ['list', 'artList', 'imgList'],
  data() {
    return {
    //   loading: true,
    //   error: false,
    //   list: null
    }
  },
  components: {
    SectionFream,
    ArticleList,
    ListMore
  }
}
</script>

<style lang="scss">
@import "~@/scss/common/variable";
@import "~@/scss/common/mixin";

.section_content {
  max-width: $SECTION_WIDTH_MAXIMUM;
  margin: 0 auto;
  display: table;
}
</style>