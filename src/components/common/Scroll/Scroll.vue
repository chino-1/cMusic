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
   data() {
     return {
       scroll:null
     }
   },
   mounted() {
     this.scroll = new BScroll(this.$refs.wrapper,{
       click:true,
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
