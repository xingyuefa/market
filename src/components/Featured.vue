<template>
    <div class="featured">
        <div class="title">
            <img v-bind:src="'../src/assets/featured@2x.png'">
        </div>
        <div class="bazaar">
            <div class="main-bazaar"></div>
            <div class="deputy-bazaar"></div>
        </div>
        <div class="bazaar"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                mark:0
            }
        }
    }
</script>
<style scoped>
    .title{
        height: 0.63rem;
        background: #f1eff2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title img{
        width: 3.18rem;
        vertical-align: middle;
    }
</style>