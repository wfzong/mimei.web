<template>
    <div :class="{'has-open-menu':MobileMenuOpened}">
        <header-ele @MenuTrigger="MenuTrigger"></header-ele>

        <image-section :list="bigImgList"></image-section>
        <!-- <article-and-more-section></article-and-more-section> -->

        <footer-ele/>
    </div>
</template>
<script>
import HeaderEle from "@/components/Header.vue";
import FooterEle from "@/components/Footer.vue";
import ImageSection from "@/components/accessories/ImageSection.vue"

export default {
    data() {
        return {
        MobileMenuOpened: false
        };
    },
    methods:{
        MenuTrigger: function(status) {
        this.MobileMenuOpened = status;
        }
    },
    components:{FooterEle, HeaderEle,ImageSection},
    asyncData({store}){
        return store.dispatch('FETCH_INDEX_DATA')
    },
    computed:{
        bigImgList: function() {
            return this.$store.state.indexBigImgList
        }
    }
}
</script>
