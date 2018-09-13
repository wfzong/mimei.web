<template>

<full-screen-message>
        <h3>@联系我</h3>
        <p>微信：icewfz</p>
        <p>手机：132 6010 6117</p>
        <p>
            <router-link to="/">返回首页</router-link>&nbsp;|&nbsp;
            <router-link :to="{path:'list',query:{'arttype':'normal'}}">最新文章</router-link>&nbsp;|&nbsp;
            <router-link :to="{path:'list',query:{'arttype':'photos'}}">最新图集</router-link>
        </p>
</full-screen-message>

</template>
<script>
import FullScreenMessage from '@/components/common/FullScreenMessage.vue'
export default {
  components: {
    FullScreenMessage
  },
  title () {
    return '联系我们'
  }
}
</script>
<style lang="scss">

</style>