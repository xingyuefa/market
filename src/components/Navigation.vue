<template>
    <nav>
        <router-link to="/vplaza" tag="div" v-for="(btn,index) in navBtn" v-bind:key="index" exact>
            <img v-bind:src="btn.navBtnSrc">
            <span>{{btn.navBtnName}}</span>
        </router-link>
    </nav>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        computed:{
            navBtn(){
                return this.$store.state.navBtn;
            }
        }
    }
</script>
<style scoped>
    nav{
        position: fixed;
        width:100%;
        height: 1rem;
        background-color: #ffffff;
        bottom:0;
        display: flex;
        justify-content: space-around;
        align-items:center;
        font-size: 0.25rem;
        box-sizing: border-box;
        border-top: 1px #eee solid;
    }
    nav div{
        display: flex;
        flex:1;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        width: 1.2rem;
        height: 100%;
    }
    nav div img{
        height: 0.45rem;
        margin-bottom: 0.1rem;
    }
</style>