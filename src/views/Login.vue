<template>
    <div class="login-area">
        <h3>用户登录</h3>
        <p v-if="$route.query.redirect">
            您需要先登录！
        </p>
        <form @submit.prevent="login">
            <p>
                用户名：
                <label><input v-model="accounts" placeholder="请输入邮箱或者昵称"></label>
            </p>

            <p>
                密&nbsp;&nbsp;&nbsp;码：
                <label><input v-model="pass" placeholder="请输入密码" type="password"></label>
            </p>

            <button type="submit">登录</button>
            <p v-if="error" class="error">{{errorInfo}}</p>
        </form>
        <p>
            还没有帐号？请先
            <router-link :to="{ path: 'register' }">注册</router-link>
        </p>
    </div>
</template>
<script>
// import auth from '../../auth'
export default {
  data() {
    return {
      accounts: '',
      pass: '',
      error: false,
      errorInfo: 'Bad login information'
    }
  },
  methods: {
    login() {
    //   auth.login(this.accounts, this.pass, (loggedIn, info) => {
    //     if (!loggedIn) {
    //       this.error = true
    //       this.errorInfo = info
    //     } else {
    //       this.$router.replace(this.$route.query.redirect || '/')
    //     }
    //   })
    }
  }
}
</script>
<style lang="scss">
@import "~@/scss/reset";

.login-area {
  padding: 12px;
}
.error {
  color: red;
}
</style>
