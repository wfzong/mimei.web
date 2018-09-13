<template>

<full-screen-message>
        <h3>使用条款</h3>
        <p>部分内容来源于网络，有版权问题请联系删除，手机：132 6010 6117</p>
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
    return '使用条款'
  }
}
</script>
<style lang="scss">
h3 {
    color: white;
}
</style>