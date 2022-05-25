<template>
    <div class="nav-bar">
        <div class="left" :style="Activestyle"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right" :style="Activestyle"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:"NavBar",
    props:['barwidth'],
    computed: {
        Activestyle(){
           return {width:this.barwidth+'px'}
        }
    },
}
</script>
<style scoped>
    .nav-bar{
        display: flex;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    /* .left,.right{
        width: 80px;
    } */
    .center{
        flex:1;
    }
</style>