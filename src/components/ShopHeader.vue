<template>
    <!--用时传参-->
    <header>
        <div class="back">
            <img v-bind:src="'../src/assets/back@2x.png'">
        </div>
        <span>{{Classification.name}}</span>
        <div class="message">
            <img v-bind:src="'../src/assets/shop-message@2x.png'">
        </div>
    </header>
</template>
<script>
    export default{
        props:{
            Classification:{
                type:Object,
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
    header{
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items:center;
        top:0;
        width:100%;
        height: 0.9rem;
        box-sizing: border-box;
        border-bottom: 1px #eee solid;
        z-index: 1;
    }
    header span{
        font-size: 0.35rem;
    }
    .back{
        margin-left: 0.2rem;
    }
    .message{
        margin-right: 0.2rem;
    }
    .back,.message{
        display: flex;
    }
    .back img,.message img{
        height: 0.4rem;
    }
</style>