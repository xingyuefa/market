<template>
    <div class="classify">
        <ul>
            <li v-for="(item,index) in classify" v-bind:key="index">
                <a>
                    <img v-bind:src="item.imgSrc">
                    <span>{{item.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:{
            classify:{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                mark:0
            }
        }
    }
</script>
<style scoped>
    .classify{
        width:100%;
        margin-top: 3.85rem;
    }
    .classify ul{
        height: 3.23rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .classify ul li{
        width: 1.86rem;
    }
    .classify ul li a{
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .classify ul li a span{
        font-size: 0.3rem;
        margin-top: 0.1rem;
    }
    .classify ul li a img{
        width: 0.9rem;
        height: 0.9rem;
    }
</style>