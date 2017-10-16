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
            <div class="mainActive" v-for="(acitve,index) in Actives" v-bind:key="index">
                <img v-bind:src="acitve.mainActiveImg">
                <div>
                    <img v-bind:src="acitve.mainActiveLogo">
                    <span>{{acitve.theme}}</span>
                </div>
            </div>
            <!--限时活动-->
            <div class="deseno" v-for="(desenoActive,index) in desenoActives" v-bind:key="index">
                <img v-bind:src="desenoActive.desenoActivesImg">
                <div class="info">
                    <img v-bind:src="desenoActive.desenoActivesLogo">
                    <div>
                        <div>
                            <span>{{desenoActive.theme}}</span>
                        </div>
                        <div>
                            <img v-bind:src="'../src/assets/Countdown@2x.png'">
                            <span>剩余{{desenoActive.Countdown}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            Actives:{
                type:Array,
                required:true
            },
            desenoActives:{
                type:Array,
                required:true
            }
        },
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
        padding:0 0.2rem;
    }
    .info div div:nth-child(2){
        display: flex;
        margin-top: 0.22rem;
        justify-content: flex-end;
        align-items: center;
    }
    .info img{
        height: 0.83rem;
        margin-right: 0.1rem;
    }
    .info div img{
        height: 0.27rem;
    }
</style>