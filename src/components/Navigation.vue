<template>
    <nav>
        <div>
            <img>
            <span>首页</span>
        </div>
        <div>
            <img>
            <span>名品特卖</span>
        </div>
        <div>
            <img>
            <span>发现</span>
        </div>
        <div>
            <img>
            <span>购物车</span>
        </div>
        <div>
            <img>
            <span>我的</span>
        </div>
    </nav>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    nav{
        color: #fff;
        position: fixed;
        width:100%;
        bottom:0;
        display: flex;
        font-size: 0.25rem;
        justify-content: space-around;
        background: black;
    }
</style>