<template>
    <!--商品列表-->
    <div class="productList">
        <div class="listTitle">
            <img v-bind:src="'../src/assets/day-new@2x.png'">
        </div>
        <div class="list">
            <div v-for="(product,index) in products">
                <!--主图-->
                <div class="productImg">
                    <img v-bind:src="product.productImgSrc">
                </div>
                <!--logo-->
                <div class="productLogo">
                    <img v-bind:src="product.productLogoSrc">
                </div>
                <!--Info-->
                <div class="productInfo">
                    <div class="productName">
                        <div class="label">
                            <span>正品</span>
                            <span>包邮</span>
                        </div>
                        <span>{{product.productName}}</span>
                    </div>
                    <!--price-->
                    <div class="price">
                        <div>¥<span>{{product.productPrice}}</span></div>
                        <div><span>{{product.purchases}}</span>人已付款</div>
                    </div>
                </div>
                <div class="flag" v-if="product.isRegularChain">
                    <img v-bind:src="'../src/assets/flag@2x.png'">
                    <span>官方直营</span>
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
            products(){
                return this.$store.state.products;
            }
        }
    }
</script>
<style scoped>
    .listTitle{
        height: 0.65rem;
        display: flex;
        align-items:center;
        justify-content: center;
        background: #f1eff2;
    }
    .listTitle img{
        width: 3.2rem;
    }
    .list{
        background: #f0eef1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list>div{
        width: 3.7rem;
        height: 4.0rem;
        position: relative;
        background: #fff;
        margin-bottom: 0.1rem;
    }
    .productImg{
        width: 3.7rem;
        height: 2.9rem;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .productImg img{
        width: 2.92rem;
    }
    .productLogo{
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
    }
    .productLogo img{
        width: 1.07rem;
    }
    .productInfo{
        display: flex;
        flex-direction:column;
        width: 3.3rem;
        margin:0 auto;
    }
    .productInfo .productName span{
        font-size: 0.25rem;
        display: block;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow: hidden;
        margin-left: 0.1rem;
    }
    .productInfo .label span{
        font-size: 0.2rem;
        background: #ba0000;
        color: #fff;
        border-radius: 0.05rem;
    }
    .productInfo .label span:nth-child(2){
        margin-top: 0.1rem;
        background: black;
    }
    .productName{
        display: flex;
    }
    .price{
        font-size: 0.2rem;
        display: flex;
        width:100%;
        justify-content: space-between;
        align-items:center;
        margin-top: 0.1rem;
    }
    .price div,.price div span{
        display: inline-block;
    }
    .price div:first-child{
        color: #e50000;
    }
    .price div:first-child span{
        font-size:0.3rem;
    }
    .price>div:nth-of-type(2){
        color: #999999;
    }
    .flag{
        position: absolute;
        top:0;
        right: 0.2rem;
    }
    .flag span{
        font-size: 0.26rem;
        letter-spacing: 0.01rem;
        position: absolute;
        top:0;
        text-align: center;
        color: #fff;
    }
    .flag img{
        height: 0.75rem;
    }
</style>