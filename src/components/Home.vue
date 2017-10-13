<template>
    <div id="homePage">
        <!--头部-->
        <market-header>
            <div slot="scan" class="scan">
                <img src="./../assets/scan@3x.png"/>
            </div>
            <div slot="search" class="search">
                <div class="search-box">
                    <i class="iconfont">&#xe6ac;</i>
                    <input type="search" placeholder="汽车后视镜"/>
                </div>
            </div>
            <div slot="message" class="message">
                <img src="../assets/message@2x.png">
            </div>
        </market-header>
        <!--轮播-->
        <market-banner v-bind:banners="banners"></market-banner>
        <!--分类-->
        <market-classify v-bind:classify="classify"></market-classify>
        <!--活动-->
        <market-active></market-active>
        <!--精选市场-->
        <market-feature></market-feature>
        <market-productList></market-productList>
        <!--导航栏-->
        <market-navigation></market-navigation>
    </div>
</template>
<script>
    //Import
    import Banner from './Banner.vue';
    import Classify from './Classify.vue';
    import Active from './Active.vue';
    import Feature from './Featured.vue';
    import ProductList from './ProductList.vue';
    import Navigation from './Navigation.vue';
    export default{
        components:{
            'market-banner':Banner,
            'market-classify':Classify,
            'market-active':Active,
            'market-feature':Feature,
            'market-productList':ProductList,
            'market-navigation':Navigation,
        },
        data(){
            return{
                banners:[
                    {name:'cosmetics',src:'src/assets/banner@2x.png'},
                    {name:'cosmetics',src:'src/assets/banner@2x.png'},
                    {name:'cosmetics',src:'src/assets/banner@2x.png'}
                ],
                classify:[
                    {name:'全球购',imgSrc:'src/assets/global-shopping@2x.png'},
                    {name:'电器城',imgSrc:'src/assets/circuit-city@2x.png'},
                    {name:'生活超市',imgSrc:'src/assets/life-supermarket@2x.png'},
                    {name:'鞋品专柜',imgSrc:'src/assets/shoes-shoppe@2x.png'},
                    {name:'服装城',imgSrc:'src/assets/clothing-city@2x.png'},
                    {name:'包包馆',imgSrc:'src/assets/bags@2x.png'},
                    {name:'奢侈品',imgSrc:'src/assets/luxury@2x.png'},
                    {name:'分类',imgSrc:'src/assets/classification@2x.png'}
                ]
            }
        }
    }
</script>
<style scoped>
    #homePage{
        padding-top: 0.88rem;
        padding-bottom: 1rem;
    }
    @font-face {
        font-family: 'iconfont';
        src: url('../icon/iconfont.eot');
        src: url('../icon/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../icon/iconfont.woff') format('woff'),
        url('../icon/iconfont.ttf') format('truetype'),
        url('../icon/iconfont.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .scan,.search-box,.message{
        display: flex;
        align-items: center;
    }
    .scan{
        float: left;
        justify-content: center;
        margin-left: 0.18rem;
    }
    .message{
        float: right;
        margin-right: 0.2rem;
    }
    .message img{
        width: 0.52rem;
        height: 0.44rem;
    }
    .search{
        width:auto;
        display: flex;
        flex:auto;
        align-items: center;
        margin: 0 0.16rem 0 0.1rem;
        /*padding:0 0.64rem 0 0.62rem;*/
        height: 0.88rem;
    }
    .search-box input{
        height: 0.44rem;
        outline: none;
        border: 0;
        width:80%;
        font-size: 0.24rem;
        padding-left: 0.15rem;
    }
    .search-box i{
        margin-left:0.14rem;
    }
    .search .search-box{
        width: 100%;
        height: 0.52rem;
        background: #ffffff;
        -webkit-border-radius: 0.25rem;
        -moz-border-radius: 0.25rem;
        border-radius: 0.25rem;
    }
    div{
        /*height:100%;*/
    }
    .scan img{
        width: 0.48rem;
        height: 0.44rem;
    }

    .banner img{
        width: 7.5rem;
    }
</style>