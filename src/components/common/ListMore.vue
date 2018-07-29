<template>
<aside class="article_more">
    <list-element v-if="artList" title="最新文章" :list="artList"></list-element>
    <list-element v-if="imgList" title="最新图集" :list="imgList"></list-element>
</aside>
</template>
<script>
import listElement from '@/components/common/ListElement.vue'

export default {
  props: ['artList', 'imgList'],
  components: {
    listElement
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "~@/scss/common/variable";
@import "~@/scss/common/mixin";

.article_more {
  display: table-cell;
  vertical-align: top;
  width: 30%;
  padding: $PADDING_LARGE 0 $PADDING_LARGE $PADDING_LARGE;
  ul {
    padding: $PADDING_XXX_SMALL 0;
    margin-bottom: $MARGIN_MEDIUM;
    li {
      list-style-type: square;
      list-style-position: inside;
      margin: 0;
      padding: 0;

      a {
        color: #333;
        &:hover {
          color: #c00000;
        }
      }
    }
  }
  @include max-screen($SECTION_WIDTH_LARGE - 1) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 $PADDING_LARGE 0;
  }
}
</style>