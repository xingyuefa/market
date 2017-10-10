<template>
    <div class="banner">
        <transition-group name="banner" tag="ul">
            <li v-for="(banner,index) in banners" :key="index" v-show="index === mark" @click="bannerClick">
                <a>
                    <img v-bind:src=banner.src>
                </a>
            </li>
        </transition-group>
    </div>
</template>
<script>
    export default{
        props:{
            banners:{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                mark:0
            }
        },
        methods:{
            autoPlay(){
                this.mark++;
                if(this.mark + 1 > this.banners.length){
                    this.mark = 0;
                }
            },
            bannerClick(){
                console.log(this.mark)
            }
        },
        created(){
        },
        mounted(){
            let timer = setInterval(this.autoPlay,5000);
        }
    }
</script>
<style scoped>
    .banner{
        position: absolute;
        width: 7.5rem;
        height: 3.85rem;
        overflow: hidden;
    }
    img{
        width: 7.5rem;
        height: 3.85rem;
    }
    a{
        display: block;
    }
    li{
        position: absolute;
    }
    .banner-enter-active,.banner-leave-active{
        transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .banner-enter{
        -webkit-transform: translate(100%);
        -moz-transform: translate(100%);
        -ms-transform: translate(100%);
        -o-transform: translate(100%);
        transform: translate(100%);
    }
    .banner-enter-to,.banner-leave{
        -webkit-transform: translate(0);
        -moz-transform: translate(0);
        -ms-transform: translate(0);
        -o-transform: translate(0);
        transform: translate(0);
    }
    .banner-leave-to{
        -webkit-transform: translate(-100%);
        -moz-transform: translate(-100%);
        -ms-transform: translate(-100%);
        -o-transform: translate(-100%);
        transform: translate(-100%);
    }
</style>