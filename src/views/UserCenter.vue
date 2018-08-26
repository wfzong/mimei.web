<template>
  <full-screen-message>
    <p>功能开发中...</p>
    <p v-if="getUserinfo && getUserinfo.type==1">
      <router-link to="/">返回首页</router-link>
    </p>
    <p v-if="getUserinfo && getUserinfo.type==2">
      <router-link to="/">返回首页</router-link> |
      <router-link to="/user/posts">发表文章去~</router-link>
    </p>
    <div class="listHistory" v-if="listHistory">
      <h3>浏览记录</h3>
      <ul>
        <li v-for="(item,key) in listHistory" :key="key">
          <router-link :to="{path:'item/'+item.id}">{{item.title}}</router-link><br>
          <span>共看了 {{item.times}} 次，最后一次浏览时间是：{{(new Date(item.timestamp)).toLocaleString()}}</span>
        </li>
      </ul>
    </div>
  </full-screen-message>

</template>
<script>
// import * as unity from "../unity";
// import myStorage from '../Storage'

import FullScreenMessage from '@/components/common/FullScreenMessage.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
    getUserinfo () {
      return JSON.parse(this.$store.state.userinfo)
    },
    getToken () {
      return this.$store.state.token
    },
    listHistory () {
      // return myStorage.getStorage('artList')

    }
  },
  title () {
    return '用户中心'
  },
  methods: {

  },
  components: {
    FullScreenMessage
  },
  mounted () {
    // unity.setWebTitle("用户中心 - memei.net");
    // new Date()
  },
  beforeDestroy () {
  }
  /*
    beforeCreate(){console.log("------------beforeCreate")},
    created(){console.log("------------created")},
    beforeMount(){console.log("------------beforeMount")},
    mounted(){console.log("------------mounted")},
    beforeUpdate(){console.log("------------beforeUpdate")},
    updated(){console.log("------------updated")},
    activated(){console.log("------------activated")},
    deactivated(){console.log("------------deactivated")},
    beforeDestroy(){console.log("------------beforeDestroy")},
    destroyed(){console.log("------------destroyed")}
 */
}
</script>
<style lang="scss">
.listHistory {
  padding: 8px 0;
  text-align: left;
  ul {
    li {
      border: 1px dashed #666;
      padding: 3px;
      margin: 3px 0;
      span {
        color: #444;
      }
    }
  }
}
</style>
