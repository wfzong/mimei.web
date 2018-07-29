<template>
  <div class="list-container">
    <ul class="list-wrapper">
      <li class="element" v-for="(item,index) in list" :key="index">
        <article class="article">

          <div class="info">
            <div v-if="!!(JSON.parse(item.imgShow)).imgHash" class="img-show">
              <router-link :to="{path:'item/'+item.id}">
                <img :src="baseUrl+(JSON.parse(item.imgShow)).imgHash+'?imageView2/1/w/500/h/500'" />
              </router-link>
            </div>
            <div class="details">
              <h3>
                <router-link :to="{path:'item/'+item.id}">{{item.title}}</router-link>
              </h3>
              <div class="copyright">
                <span>by</span>{{item.user.nickname}}
              </div>
              <div class="accessories">
                <router-link :to="{path:'list',query:{'categories':tag.id}}" v-for="(tag,index) in item.categories" :key="index">
                  {{tag.title}}
                </router-link>
                <span>
                  {{item.update_time}}
                </span>
              </div>
            </div>
          </div>
        </article>

      </li>
    </ul>

    <div class="alert" v-if="alert">没有更多</div>

  </div>

</template>
<script>
import * as config from '@/config/config'

export default {
  props: {
    list: {
      type: Array
    },
    alert: {
      default: true
    }
  },
  computed: {
    baseUrl() {
      return config.baseImgUri
    }
  }
}
</script>
<style lang="scss">
@import "~@/scss/reset";
.list-container {
  /* 定义不同尺寸的间隙 */
  @include min-screen($SECTION_WIDTH_LARGE) {
    margin: $MARGIN_X_LARGE 0;
    padding: 0 $PADDING_X_LARGE;
  }
  @include screen($SECTION_WIDTH_MEDIUM, $SECTION_WIDTH_LARGE) {
    margin: $MARGIN_MEDIUM 0;
    padding: 0 $PADDING_MEDIUM;
  }
  @include max-screen($SECTION_WIDTH_MEDIUM) {
    margin: $MARGIN_X_SMALL 0;
    padding: 0 $PADDING_X_SMALL;
  }

  .list-wrapper {
    &:after {
      content: "";
      clear: both;
      display: block;
    }
    max-width: $SECTION_WIDTH_MAXIMUM;
    margin: 0 auto;
    .element {
      @include min-screen($SECTION_WIDTH_LARGE) {
        display: block;
        width: 50%;
        float: left;
      }
      margin-top: 20px;
      .article {
        border-top: solid 1px #eaeaea;
        padding-top: 20px;
        .info {
          display: table;
          width: 100%;
          .img-show {
            padding-right: $PADDING_XX_SMALL;
            display: table-cell;
            width: 33%;
            img {
              width: 100%;
            }
          }
          .details {
            padding-left: $PADDING_XX_SMALL;
            display: table-cell;
            vertical-align: middle;
            h3 {
              a {
                color: #000;
                &:hover {
                  color: #c00000;
                }
              }
              font-size: 20px;
              line-height: 1.4em;
              margin-bottom: $MARGIN_XX_SMALL;
              @include max-screen($SECTION_WIDTH_LARGE) {
                font-size: 16px;
              }
            }
            .copyright {
              span {
                color: #666;
                //font-family: "adobe-caslon-pro",serif;
                font-style: italic;
                text-transform: lowercase;
                padding-right: 6px;
              }
              font-size: 12px;
              color: #333;
              text-transform: uppercase;
              margin: 6px 0 8px 0;
            }
            .accessories {
              a {
                color: #c00000;
                margin-right: 6px;
              }
              color: #666;
              font-size: 12px;
              display: inline-block;
              border-top: solid 1px #eaeaea;
              padding-top: 8px;
            }
          }
        }
      }
    }
  }
  .alert {
    max-width: $SECTION_WIDTH_MAXIMUM;
    margin: 12px auto;
    clear: both;
    text-align: center;
    padding: 12px;
    background: #fafafa;
  }
}
</style>

