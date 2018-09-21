<template>
  <div class="card_content">
    <ul class="image_card_list">

      <li v-for="(item,index) in imgList" :key="index" :class="{card_item:true, card_item_switcher:index!=0}">
        <article>
          <div class="card_item_image">
            <router-link :to="{path:'/item/'+item.id}">
              <img :src="baseUrl+(JSON.parse(item.imgShow)).imgHash+'?imageView2/1/w/500/h/500'" />
            </router-link>
          </div>
          <div class="card_item_info">
            <h3>
              <router-link :to="{path:'/item/'+item.id}">{{item.title}}</router-link>
            </h3>
            <aside>
              <p class="auth">
                <span>by</span>{{item.user.nickname}}</p>
              <p class="parts">
                <router-link :to="{path:'/list/',query:{'categories':citem.id}}" v-for="(citem,cindex) in item.categories" :key="cindex">
                  {{citem.title}}
                </router-link>
                <span class="times">{{item.update_time}}</span>
              </p>
            </aside>
          </div>
        </article>
      </li>

    </ul>
  </div>
</template>
<script>
import * as config from '@/config/config.js'

export default {
  props: {
    imgList: {
      type: Array
    }
  },
  computed: {
    baseUrl () {
      return config.baseImgUri
    }
  }
}
</script>


<style lang="scss">
@import '~@/scss/common/variable';
@import '~@/scss/common/mixin';

.card_content {
  max-width: $SECTION_WIDTH_MAXIMUM;
  margin: 0 auto;
  .image_card_list {
    //图集列表开始
    display: block;
    font-size: 0;
    margin: 0 -20px;

    li.card_item {
      display: inline-block;
      vertical-align: top;
      padding: 0 20px;
      margin-bottom: 30px;
      box-sizing: border-box;

      @include transition(all 0.3s ease);
      &:hover {
        @include opacity(0.9);
        //transform: translateY(-10px);
        //transform: scale(1.03);
        //transform: rotate(-5deg);
      }

      article {
        @include font-size(16px);
        position: relative;

        .card_item_image {
          position: relative;
          background: #EEE;
          &::before {
            content: '';
            display: block;
            padding-top: 100%;
          }
          a {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
        }

        .card_item_info {
          margin-top: 10px;
          h3 {
            @include font-size(20px);
            @include line-height(25px);
            a {
              color: black;
              &:hover {
                color: #c00000;
              }
            }
          }
          aside {
            p {
              margin: 0;
            }
            p.auth {
              margin: 6px 0 10px 0;
              @include font-size(12px);
              @include line-height(14px);
              color: #111;
              span {
                font-style: italic;
                padding-right: 4px;
              }
            }
            p.parts {
              border-top: dashed 1px #ccc;
              @include font-size(12px);
              @include line-height(14px);
              padding-top: 6px;
              a {
                color: #c00000;
                padding-right: $PADDING_XXX_SMALL;
                &:hover {
                  color: #111;
                }
              }
              .times {
                color: #666;
              }
            }
          }
        }
      }
    }

    @include one-column-size() {
      li.card_item {
        width: 100%;
      }
      .card_item_switcher {
        @include card_switcher();
      }
    }
    @include two-column-size() {
      li.card_item {
        width: 50%;
      }
    }
    @include four-column-size() {
      li.card_item {
        width: 25%;
      }
    }
  }
}
</style>