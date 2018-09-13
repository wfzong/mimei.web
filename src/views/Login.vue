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
      <router-link :to="{ path: '/user' }">user</router-link>
    </p>
  </div>
</template>
<script>
// import auth from '../../auth'
import { loginRequest } from '@/api/auth'

export default {
  data () {
    return {
      accounts: '',
      pass: '',
      error: false,
      errorInfo: 'Bad login information'
    }
  },
  methods: {
    login () {
      loginRequest({
        accounts: this.accounts,
        password: this.pass
      })
        .then(res => {
          console.log('ress', res)
          if (res.token) {
            this.$cookies.set('token', res.token, res.expiration)
            this.$cookies.set('userinfo', JSON.stringify(res.userinfo), res.expiration)
            this.$store.commit('initToken', {
              userinfo: res.userinfo,
              token: res.token
            })
            this.$router.replace(this.$route.query.redirect || '/')
          } else {
            this.error = true
            this.errorInfo = res.error
          }
        })
        .catch(err => {
          console.log(err)
          this.error = true
          this.errorInfo = err
        })
    }
  },
  computed: {
    token: function () {
      return this.$store.state.token
    },
    userinfo: function () {
      return this.$store.state.userinfo
    }
  },
  mounted () {
    console.log(this.$store)
    console.log(this.$cookies.isKey('token'))
  },
  title () {
    return '用户登录'
  }
}
</script>
<style lang="scss">
@import '~@/scss/reset';

.login-area {
  padding: 12px;
}
.error {
  color: red;
}
</style>
