<template>
    <div class="vplaza">
        <!--头部组件-->
        <shop-header v-bind:Classification="Classification"></shop-header>
        <shop-advertise></shop-advertise>
    </div>
</template>
<script>
    import ShopHeader from './ShopHeader.vue';
    import ShopAdvertise from './Advertisement.vue';
    export default{
        components:{
            'shop-header':ShopHeader,
            'shop-advertise':ShopAdvertise
        },
        data(){
            return{
                Classification:{
                    name:'名品特卖'
                }
            }
        }
    }
</script>
<style scoped>

</style>