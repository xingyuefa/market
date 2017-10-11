<template>
    <div class="featured">
        <div class="title">
            <img v-bind:src="'../src/assets/featured@2x.png'">
        </div>
        <div class="bazaar">
            <div class="bazaar-left bazaar-item" v-for="(bazaar,index) in featuredBazaar" v-bind:key="index">
                <div class="main-bazaar" v-bind:style="{'background':'url(' + bazaar.mainBazaar.imgUrl+ ') no-repeat center top','background-size':'cover'}">
                    <!--<h1>家饰家纺</h1>-->
                    <!--<span>品牌秋冬床品</span>-->
                </div>
                <div class="deputy-bazaar">
                    <div class="deputy-bazaar-item" v-for='(item,index) in bazaar.eputyBazaar' v-bind:style="{'background':'url(' + item.imgUrl + ') no-repeat left bottom','background-size':'contain'}">
                        <!--<h1>中外名酒</h1>-->
                        <!--<span>拒绝假酒 喝出健康</span>-->
                    </div>
                    <!--<div class="deputy-bazaar-item" v-bind:style="{'background':'url(' + bazaar.eputyBazaar[index].imgUrl + ') no-repeat left bottom','background-size':'contain'}">-->
                        <!--&lt;!&ndash;<h1>优雅绅士</h1>&ndash;&gt;-->
                        <!--&lt;!&ndash;<span>穿出你帅的一面</span>&ndash;&gt;-->
                    <!--</div>-->
                </div>
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
        },
        computed:{
            featuredBazaar(){
                return this.$store.state.featuredBazaar;
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
    .bazaar{
        display: flex;
    }
    .bazaar-item{
        display: flex;
        flex-direction:column;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        flex:1;
    }
    .bazaar-item:first-child,.deputy-bazaar-item:first-child{
        border-right: 1px #eee solid;
        box-sizing: border-box;
    }
    .main-bazaar{
        height: 2.16rem;
        flex:1;
        border-bottom: 1px #eee solid;
    }
    .main-bazaar h1,.deputy-bazaar-item h1{
        font-size: 0.28rem;
    }
    .main-bazaar span,.deputy-bazaar-item span{
        font-size: 0.2rem;
        display: block;
    }
    .deputy-bazaar{
        display: flex;
        flex:1;
        border-bottom: 1px #eee solid;
        height: 2.88rem;
    }
    .deputy-bazaar-item{
        flex:1;
    }
</style>