<template>
<div class="article_list">
    
    <article class="film_review" v-for="(item,index) in artList" :key="index">
        <header><h3><router-link :to="{path:'item/'+item.id}">{{item.title}}</router-link></h3></header>
        <section class="main_review" ><p v-html="item.description"></p></section>
        <footer>
            <p>
                Posted on <time>{{item.update_time}}</time>
                by {{item.user.nickname}}
            </p>
        </footer>
    </article>
    
</div>
</template>
<script>
export default {
  props: {
    artList: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import "~@/scss/common/variable";
@import "~@/scss/common/mixin";

.article_list {
  display: table-cell;
  vertical-align: top;
  width: 70%;
  padding: $PADDING_LARGE 0;
  .film_review {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: $MARGIN_LARGE;
    @include max-screen($SECTION_WIDTH_MEDIUM) {
      margin-bottom: $MARGIN_MEDIUM;
    }
    a {
      color: #000;
      &:hover {
        color: #c00000;
      }
    }

    footer {
      font-style: italic;
      p {
        color: #666;
      }
    }
  }
  @include max-screen($SECTION_WIDTH_LARGE - 1) {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>