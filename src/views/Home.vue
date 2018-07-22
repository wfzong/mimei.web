<template>
    <section>
        <HeaderEle></HeaderEle>
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
    }
}
</script>
