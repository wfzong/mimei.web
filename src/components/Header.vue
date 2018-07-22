<template>
  <header class="navigation">
    <div class="content">
        <router-link to="/" class="logo">
          <logo-canvas/>
        </router-link>
    <nav class="big">
                <ul>
                    <li>
                        <router-link :to="{path:'/list',query:{'arttype':'normal'}}">最新文章</router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/list',query:{'arttype':'photos'}}">最新图集</router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/list',query:{'categories':4}}">写真</router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/about'}">关于我们</router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/contact'}">@联系我</router-link>
                    </li>
                    <li><login-trigger></login-trigger></li>
                </ul>
            </nav>
            <div class="more">
                <a href="#">Follow</a>
                <div class="follow">
                    <ol>
                        <li class="wb"><a href="#">wb</a></li>
                        <li class="fb"><a href="#">fb</a></li>
                        <li class="tw"><a href="#">tw</a></li>
                        <li class="ins"><a href="#">ins</a></li>
                    </ol>
                </div>
            </div>

            <div class="small">
                <a class="trigger" :class="{close:MobileMenuOpened}" @click="MenuTrigger"><span>打开/关闭</span></a>

                <nav v-if="MobileMenuOpened" class="mobile_nav">
                    <ul>
                        <li>
                            <router-link @click.native="CloseMenu" :to="{path:'/list',query:{'arttype':'normal'}}">最新文章</router-link>
                        </li>
                        <li>
                            <router-link @click.native="CloseMenu" :to="{path:'/list',query:{'arttype':'photos'}}">最新图集</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/list',query:{'categories':4}}">写真</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/about'}">关于我们</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/contact'}">@联系我</router-link>
                        </li>
                        <li><login-trigger></login-trigger></li>
                    </ul>

                    <aside class="sns">
                        <span>Follow</span>
                        <ol>
                            <li class="wb"><a href="#">wb</a></li>
                            <li class="fb"><a href="#">fb</a></li>
                            <li class="tw"><a href="#">tw</a></li>
                            <li class="ins"><a href="#">ins</a></li>
                        </ol>
                        <a 
                        class="mail_to_me" 
                        href="mailto:wfz123@126.com"
                        >给我邮件，得到最新反馈</a>
                    </aside>
                </nav>
            </div>            

        </div>
    </header>
</template>


<script>
import LoginTrigger from "@/components/common/LoginTrigger.vue";
import LogoCanvas from "@/components/common/LogoCanvas.vue";

export default {
  data() {
    return {
      MobileMenuOpened: false
    };
  },
  methods: {
    MenuTrigger: function() {
      this.MobileMenuOpened = !this.MobileMenuOpened;
      this.$emit("MenuTrigger", this.MobileMenuOpened); //通知父级，改变了menu状态
    },
    CloseMenu() {
      this.MobileMenuOpened = false;
      this.$emit("MenuTrigger", this.MobileMenuOpened); //通知父级，改变了menu状态
    }
  },
  components: {
    LoginTrigger,
    LogoCanvas
  }
};
</script>

<style lang="scss">
@import "../scss/reset";
.navigation {
  height: $MAIN_NAVIGATION_HEIGHT;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0px 2px 5px 0 rgba(102, 102, 102, 0.06);

  .content {
    max-width: $NAVIGATION_BREAKPOINT_MAX;
    height: $MAIN_NAVIGATION_HEIGHT;
    position: relative;
    margin: 0 auto;

    .logo {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: block;
      height: $MAIN_NAVIGATION_HEIGHT;
      line-height: $MAIN_NAVIGATION_HEIGHT;
      padding-left: $PADDING_SMALL;
      width: 50px;
      canvas {
        width: 100%;
        vertical-align: middle;
      }
      img {
        width: 100%;
        // width: 50px;
        // height: auto;
         vertical-align: middle;
      }
    }

    .big {
      @include max-screen($NAVIGATION_BREAKPOINT_LARGE) {
        display: none;
      }
      ul {
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        width: 100%;
        list-style: none;
        font-size: 0;

        li {
          display: inline-block;
          padding: 0 15px;
          height: 60px;
          line-height: 60px;

          a {
            &.router-link-exact-active {
              color: #c00000;
            }
            color: #111;
            @include font-size(14px);
            @include font-weight(700);

            &:hover {
              color: red;
            }
          }
        }
      }
    }

    .more {
      @include max-screen($NAVIGATION_BREAKPOINT_LARGE) {
        display: none;
      }
      border-left: solid 1px #eaeaea;
      height: $MAIN_NAVIGATION_HEIGHT;
      line-height: $MAIN_NAVIGATION_HEIGHT;
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 20px;
      cursor: pointer;
      a {
        color: #666;
        @include font-size(14px);
        @include font-family("adobe-caslon-pro");
        font-style: italic;
      }
      &:after {
        content: "";
        display: inline-block;
        border-top: 5px solid #000;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        top: -2px;
        position: relative;
      }
      &:hover {
        border-bottom: solid 1px #fff;
      }
      &:hover:after {
        border-top: 5px solid #c00;
      }

      .follow {
        @include sns_icons();
        display: none;
        padding: 0 8px;
        position: absolute;
        top: 100%;
        right: 0;
        width: 218px;
        margin-top: 1px;
        border: solid 1px #eaeaea;
        border-top: none;

        @include max-screen($NAVIGATION_BREAKPOINT_MEDIUM) {
          border-right: none;
        }
        background: #fff;
        text-align: center;
        cursor: default;
      }

      &:hover .follow {
        display: block;
      }
    }

    .small {
      @include min-screen($NAVIGATION_BREAKPOINT_LARGE+1) {
        display: none;
      }
      .trigger {
        border-left: solid 1px #eaeaea;
        height: $MAIN_NAVIGATION_HEIGHT;
        line-height: $MAIN_NAVIGATION_HEIGHT;

        position: absolute;
        top: 0;
        right: 0;
        padding: 0 20px;
        cursor: pointer;
        span {
          display: inline-block;
          height: 20px;
          width: 20px;
          vertical-align: middle;
          overflow: hidden;
          text-indent: 100em;
          background: url(~@/images/elements/nav_icon.png) 0 0 no-repeat;
          background-size: 40px;
        }
        &.close {
          span {
            background-position: -20px 0;
          }
        }
      }
      .mobile_nav {
        background: #fff;
        z-index: 20;
        position: fixed;
        width: 100%;
        top: 62px;
        bottom: 0;
        overflow: auto;

        ul {
          margin: 0 20px;
          padding: 0;

          li {
            border-bottom: 1px solid #eaeaea;
            @include font-size(15px);
            @include font-weight("BOLD");
            line-height: $MAIN_NAVIGATION_HEIGHT;
            a {
              &.router-link-exact-active {
                color: #c00000;
              }
              color: #111;
              &:hover {
                color: red;
              }
            }
          }
        }
        .sns {
          @include sns_icons();
          text-align: center;
          background: #f4f4f4;
          margin-top: 30px;
          padding-top: 30px;
          span {
            color: #666;
            @include font-size(14px);
            @include font-family("adobe-caslon-pro");
            font-style: italic;
          }
          .mail_to_me {
            border: 1px solid #c00000;
            display: inline-block;
            color: #c00000;
            padding: 10px 15px;
            margin: 15px auto 30px auto;
            &:hover {
              color: white;
              background: #c00000;
            }
          }
        }
      }
    }
  }
}
</style>

