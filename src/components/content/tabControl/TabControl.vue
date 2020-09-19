<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
       class="tab-control-item" :class="{active: index === currentIndex}" @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
   name:'TabControl',
   data() {
       return {
           currentIndex:0
       }
   },
   props:{
       titles:{
           type:Array,
           default(){
               return []
           }
       }
   },methods: {
       itemclick(index){
           this.currentIndex = index;
           this.$emit('tabclick',index)
       }
   },
}
</script>
<style scoped>
  .tab-control{
      display: flex;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      height: 40px;
      /* background-color: #fff; */
  }
  .tab-control-item{
      flex:1;
      color: #C0C0C0;
  }
  .tab-control-item span{
      padding: 5px;
  }
  .active{
      color:#000000;
  }
</style>
