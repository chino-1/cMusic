<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
   name:'Scroll',
   props:{
      probeType:{
       type:Number,
       default:0
     },
   },
   data() {
     return {
       scroll:null
     }
   },
   mounted() {
     this.scroll = new BScroll(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
     })
     this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
     })
   },
   methods: {
     scrollTo(x,y,time){
       this.scroll && this.scroll.scrollTo(x,y,time)
     },
     refresh(){
       this.scroll && this.scroll.refresh()
      //  console.log('111')
     },
   },
}

</script>
<style scoped>

</style>
