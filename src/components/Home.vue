<template>
    <div id="homePage">
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
        <div class="banner">
            <img src="../assets/banner@2x.png">
        </div>
        <!--分类-->
        <div class="classify">

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
    #homePage{
        height: 50rem;
        padding-top: 0.88rem;
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
        height:100%;
    }
    .scan img{
        width: 0.48rem;
        height: 0.44rem;
    }

    .banner img{
        width: 7.5rem;
    }
</style>