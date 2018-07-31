<template>
<div>
    <router-view></router-view>
    <h5 class="auth-footer">
        <router-link  :to="{path:'/auth/register'}">注册</router-link> / 
        <router-link  :to="{path:'/auth/login'}">登录</router-link> / 
        <router-link  :to="{path:'/'}">首页</router-link>
    </h5>
</div>
</template>
<script>
export default {
  mounted() { }
}
</script>

<style lang="scss">
.auth-footer {
    position:absolute;
    bottom:0;
    width:100%;
    box-sizing:border-box;
    text-align:right;
    background:#222;
    color:white;
    padding:6px;
    font-size:14px;
    border-top:solid 6px #666;
    a {
        color:white;
        &:hover {
            text-decoration:underline;
        }
    }
}
</style>