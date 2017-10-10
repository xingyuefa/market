<template>
    <div class="active">
        <!--主活动-->
        <div class="main-active" v-bind:style="{'background':'url(../src/assets/flash-sale@2x.png) no-repeat right top', 'background-size':'cover'}">
            <h1>限时抢购</h1>
            <span>每日好货 抢到手软</span>
            <img src="../assets/hot@2x.png">
            <!--倒计时-->
            <div class="countdown">
                <div>00</div>
                :
                <div>40</div>
                :
                <div>15</div>
            </div>
        </div>
        <!--副活动-->
        <div class="dupety-active">
            <div v-bind:style="{'background':'url(../src/assets/SALE@2x.png) no-repeat','background-size':'cover'}">
                <!--<h1 class="dupetyTheme">天天特价</h1>-->
                <!--<span>全场特价 八折起</span>-->
            </div>
            <div v-bind:style="{'background':'url(../src/assets/New@2x.png) no-repeat','background-size':'cover'}">
                <!--<h1 class="dupetyTheme">每日上新</h1>-->
                <!--<span>你想要的 应有尽有</span>-->
            </div>
        </div>
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
    .active{
        display: flex;
    }
    div.main-active{
        width: 4.2rem;
        height: 2.45rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-right: 1px #eeeeee solid;
        position: relative;
    }
    .main-active h1{
        font-size: 0.4rem;
        font-weight: normal;
        margin-top: 0.18rem;
        margin-left: 0.4rem;
        color: #ff5c5c;
    }
    .main-active span{
        display: block;
        font-size: 0.25rem;
        margin-left: 0.4rem;
    }
    .main-active img{
        position: absolute;
        right:0;
        top:0;
    }
    h1.dupetyTheme{
        font-size: 0.3rem;
        font-weight:normal;
        color: #000;
    }
    .countdown{
        font-size: 0.27rem;
        margin-left: 0.4rem;
        margin-top: 0.13rem;
    }
    .countdown div{
        text-align: center;
        display: inline-block;
        box-sizing: border-box;
        width: 0.4rem;
        height: 0.36rem;
        border: 1px #cccccc solid;
    }
    .dupety-active{
        display: flex;
        flex-direction:column;
        flex:1;
    }
    .dupety-active>div{
        flex:1;
    }
    .dupety-active>div:first-child{
        width:100%;
        border-bottom: 1px #eee solid;
    }
    .dupety-active span{
        font-size: 0.16rem;
        display: block;
    }
</style>