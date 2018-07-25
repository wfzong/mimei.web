<template>
    <section-fream section-title="推荐图集">
        <image-list :imgList="list"></image-list>
        <magic-button title="查看更多图集" :link="{path:'/list',query:{arttype:'photos'}}"></magic-button>
    </section-fream>
</template>

<script>
/* 
* 这里处理所有数据，并传递给子组件
* 子组件接收数据、显示
*/
import SectionFream from '@/components/common/SectionFream.vue'
import ImageList from "@/components/common/ImageList"
import MagicButton from "@/components/common/MagicButton"

// import axios from 'axios'
// import * as config from '../../config'

export default {
    data() {
        return {
            imgList:null
        }
    },
    props:['list'],
    components: {
        SectionFream,
        ImageList,
        MagicButton
    },
    created() {

    }
}
</script>
<style lang="scss">

</style>
