<template>
    <div class="vplaza">
        <!--头部组件-->
        <shop-header v-bind:Classification="Classification"></shop-header>
        <shop-advertise v-bind="{Actives:Actives,desenoActives:desenoActives}"></shop-advertise>
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
                },
            }
        },
        computed:{
            Actives(){
                return this.$store.state.Actives;
            },
            desenoActives(){
                return this.$store.state.desenoActives;
            }
        }
    }
</script>
<style scoped>

</style>