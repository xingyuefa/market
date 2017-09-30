<template>
    <header>
        <slot name="scan"></slot>
        <slot name="search"></slot>
        <slot name="message"></slot>
    </header>
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
    header{
        position: fixed;
        top:0;
        width:100%;
        display: flex;
        height: 0.88rem;
        background: black;
    }
</style>