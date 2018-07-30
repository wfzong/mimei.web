<template>
  <article class="article-main">
    <header class="article-header">
      <div class="article-header-tag">
        <router-link :to="{path:'/list/',query:{categories:tag.id}}" v-for="(tag,index) in info.categories" :key="index">{{tag.title}}</router-link>
      </div>
      <h2>{{info.title}}</h2>
      <div class="article-header-description">
        {{info.description}}
        <hr>
      </div>
      <div class="article-header-attention">
        <span class="by">by</span>
        <span class="name">{{info.user.nickname}}</span>
        <span class="time"> - {{info.update_time}}</span>
      </div>
    </header>
    <section class="article-photos">
      <div class="list" v-for="(imgItem,index) in JSON.parse(info.imgContent)" :key="index">

        <img :src="outUri(imgItem.imgHash)" :alt="imgItem.title">
        <span v-if="imgItem.title">{{imgItem.title}}</span>
      </div>
    </section>
    <section class="article-content" v-html="info.content"></section>

  </article>
</template>
<script>
import * as config from '@/config/config'
export default {
  props: {
    info: [Array, Object]
  },
  methods: {
    outUri(urlHash) {
      return config.baseImgUri + urlHash + '?imageView2/0/w/1200'
    }
  },
  computed: {}
}
</script>

<style lang="scss">
@import "~@/scss/reset";
.article-main {
  @include min-screen($SECTION_WIDTH_MAXIMUM) {
    padding: $PADDING_LARGE;
  }
  @include screen($SECTION_WIDTH_LARGE, $SECTION_WIDTH_MAXIMUM) {
    padding: $PADDING_MEDIUM;
  }
  @include screen($SECTION_WIDTH_MEDIUM, $SECTION_WIDTH_LARGE) {
    padding: $PADDING_SMALL;
  }
  @include max-screen($SECTION_WIDTH_MEDIUM) {
    padding: $PADDING_X_SMALL;
  }
  .article-header {
    @include min-screen($SECTION_WIDTH_MAXIMUM) {
      margin-bottom: $MARGIN_LARGE;
    }
    @include screen($SECTION_WIDTH_MEDIUM, $SECTION_WIDTH_MAXIMUM) {
      margin-bottom: $MARGIN_SMALL;
    }
    @include max-screen($SECTION_WIDTH_MEDIUM) {
      margin-bottom: $MARGIN_XX_SMALL;
    }

    h2 {
      @include min-screen($SECTION_WIDTH_MAXIMUM) {
        margin: $MARGIN_LARGE 0;
      }
      @include screen($SECTION_WIDTH_MEDIUM, $SECTION_WIDTH_MAXIMUM) {
        margin: $MARGIN_SMALL 0;
      }
      @include max-screen($SECTION_WIDTH_MEDIUM) {
        margin: $MARGIN_XX_SMALL 0;
      }
    }

    .article-header-tag {
      a {
        color: #c00000;
        font-weight: bold;
        font-size: 14px;
        padding-left: $MARGIN_XX_SMALL;
      }
    }
    .article-header-description {
      color: #666;
      //border-bottom: dashed 1px #CCC;
      //padding-bottom: $PADDING_SMALL;
      //margin-bottom: $MARGIN_SMALL;
      hr {
        background-size: 3px 1px;
        height: 1px;
        background-position: center top;
        background-repeat: repeat-x;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        margin: 25px 0px 20px;

        background-color: #666;
        background-image: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 1px,
          white 1px,
          white 3px
        );
      }
    }
    .article-header-attention {
      font-size: 12px;
      .by {
        font-style: italic;
        color: #999;
      }
      .time {
        color: #666;
      }
    }
  }
  .article-content {
    color: #666;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .article-photos {
    .list {
      background-color: #efefef;
      padding: 8px;
      margin: 8px 0;
      display: inline-block;
      img {
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }
      span {
        margin-top: $MARGIN_XXX_SMALL;
        display: inline-block;
      }
    }
  }
}
// SECTION_WIDTH_MEDIUM
</style>


