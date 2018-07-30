<template>
<div class="magic-button"
    v-bind:class="{
        'align-left':align=='left',
        'align-right':align=='right',
    }"
>
    <router-link :to="link" class="core">{{title}}</router-link>
</div>
</template>


<script>

export default {
  props: {
    link: {
      type: [String, Object]
    },
    title: {
      type: String,
      default: 'MORE'
    },
    align: {
      type: String,
      default: 'center'
    }
  }
}
</script>


<style lang="scss">
@import "~@/scss/common/variable";
@import "~@/scss/common/mixin";


.magic-button {
    text-align:center;
    &.align-left{text-align:left;}
    &.align-right{text-align:right;}

    .core{
        color: #C00000;
        border: solid 1px #C00000;
        @include font-size(12px);
        padding: $PADDING_XX_SMALL $PADDING_X_SMALL;
        margin: $MARGIN_SMALL auto;
        display: inline-block;
        &:hover {
            color: white;
            background: #C00000;
        }
    }
}


</style>