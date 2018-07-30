<template>
<div class="login-trigger">
    <div v-if="loggedIn">
        <router-link to="/user/">个人中心</router-link>
        <span>|</span>
        <router-link to="/auth/logout">退出</router-link>
    </div>
    <div v-if="!loggedIn">
        <router-link  :to="{path:'/auth/login',query:{redirect:myPath}}">登录</router-link>
        <span>|</span>
        <router-link  :to="{path:'/auth/register'}">注册</router-link>
    </div>
</div>
</template>

<script>

import auth from '@/tools/auth'
export default {
  data() {
    return {
      myPath: this.$route.fullPath
    }
  },
  computed: {
    loggedIn() {
      return auth.loggedIn()
    }
  }
}
</script>
<style lang="scss">
.login-trigger {
    font-size:14px;
}
</style>