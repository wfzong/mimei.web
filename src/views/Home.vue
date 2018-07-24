<template>
    <section>
        <HeaderEle></HeaderEle>
        {{bigImgList}}
        <FooterEle></FooterEle>
    </section>
</template>
<script>
import HeaderEle from "@/components/Header.vue";
import FooterEle from "@/components/Footer.vue";
export default {
    components:{FooterEle, HeaderEle},
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
