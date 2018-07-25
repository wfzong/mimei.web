<template>
<section class="article-and-more">
	<h2 class="section-title"><span>{{SectionTitle}}</span></h2>
    <slot>这里是默认内容</slot>
</section>
</template>
<script>

export default {
    props:['SectionTitle']
}
</script>


<style lang="scss">
@import "~@/scss/common/variable";
@import "~@/scss/common/mixin";

.article-and-more {
    @include min-screen($SECTION_WIDTH_LARGE){
        padding: 0 $DESKTOP_SIDE_GUTTER $DESKTOP_SIDE_GUTTER $DESKTOP_SIDE_GUTTER;
    }
    @include max-screen($SECTION_WIDTH_LARGE){
        padding: 0 $TABLET_SIDE_GUTTER $TABLET_SIDE_GUTTER $TABLET_SIDE_GUTTER;
    }
    @include max-screen($SECTION_WIDTH_MEDIUM){
        padding: 0 $MOBILE_SIDE_GUTTER $MOBILE_SIDE_GUTTER $MOBILE_SIDE_GUTTER;
    }
    .section-title {
        font-size: 32px;
        text-align: center;
        position: relative;
        margin: $MARGIN_SMALL  auto;
        max-width: $SECTION_WIDTH_MAXIMUM;
        @include max-screen($SECTION_WIDTH_MAXIMUM) {
            margin: $MARGIN_SMALL 0;
        }
        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            width: 100%;
            height: 1px;
            z-index: 0;
            background-color: black;
            background-image: repeating-linear-gradient(
                    90deg, 
                    transparent, 
                    transparent 1px, 
                    rgba(255,255,255,1) 1px, 
                    rgba(255,255,255,1) 3px);
        }
        span {
            background: #FFF;
            padding: 0 $PADDING_MEDIUM;
            position: relative;
        }
    }

}
</style>