<template>

<full-screen-message>
        <h3>关于我们</h3>
        <p>文档整理中...</p>
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
    return '关于我们'
  }
}
</script>
<style lang="scss">
h3 {
    color: white;
}
</style>

