<template>
    <!--广告-->
    <div class="advertisement">
        <div class="options">
            <div class="active">
                <span>精选特卖</span>
                <span></span>
            </div>
            <div>
                <span>服饰美妆</span>
                <span></span>
            </div>
            <div>
                <span>箱包配饰</span>
                <span></span>
            </div>
            <div>
                <span>数码电器</span>
                <span></span>
            </div>
        </div>
        <div class="advertise">
            <!--主活动-->
            <div class="mainActive">
                <img v-bind:src="'../src/assets/vplaza-adv_01.png'">
                <div>
                    <img v-bind:src="'../src/assets/special-offer@2x.png'">
                    <span>今日特卖</span>
                </div>
            </div>
            <!--限时活动-->
            <div class="deseno">
                <img v-bind:src="'../src/assets/langqingShop.png'">
                <div class="info">
                    <img v-bind:src="'../src/assets/langqingLogo@2x.png'">
                    <div>
                        <div>
                            <span>浪琴专卖店情人节特惠</span>
                        </div>
                        <div>
                            <img v-bind:src="'../src/assets/Countdown@2x.png'">
                            <span>剩余2天6时2分</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    .advertisement{
        padding-top: 0.9rem;
    }
    .options{
        font-size: 0.35rem;
        display: flex;
        justify-content: space-around;
        align-items:center;
        height: 0.82rem;
    }
    .options>div{
        text-align: center;
    }
    .options div span:nth-child(2){
        height:0.05rem;
        display: block;
        margin: 0.2rem auto 0;
    }
    .options .active span:nth-child(2){
        background: #8600d3;
    }
    .advertise>div{
        height: 4.3rem;
    }
    .advertise>div>img{
        height: 3.5rem;
    }
    .advertise div.mainActive div{
        font-size: 0.32rem;
        height: 0.8rem;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .advertise div.mainActive div img{
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.2rem;
    }
    .info{
        display: flex;
        justify-content: space-between;
        align-items:center;
        height: 1.1rem;
        font-size: 0.3rem;
    }
    .info div div:nth-child(2){
        margin-top: 0.22rem;
    }
    .info img{
        height: 0.83rem;
    }
    .info div img{
        height: 0.27rem;
    }
</style>