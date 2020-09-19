<template>
  <div>
    <div class="tab-bar">
        <nav-bar :barwidth="50">
            <div slot="left" @click="mclick"><i class="el-icon-notebook-2"></i></div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="title-item" @click="tabclick(index)"
                :class="{active: index === currentIndex}"
                >{{item}}</div>
            </div>
            <div slot="right" @click="sclick"><i class="el-icon-search"></i></div>
        </nav-bar>
    </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
   name:'MainTabBar',
   components:{
     NavBar
   },
   data() {
       return {
          titles:['我的','发现','云村','视频'],
          currentIndex:1
       }
   },methods: {
     mclick(){
       this.$emit('menuclick')
     },
     tabclick(index){
       this.currentIndex = index;
       switch(index){
         case 0:
           this.$router.replace('/profile')
           break;
         case 1:
           this.$router.replace('/home')
           break;
         case 3:
           this.$router.replace('/viedo')
           break;
       }
     },
     sclick(){
       this.$router.push('/search')
     }
   },
}
</script>
<style scoped>
.title{
     display: flex;
     font-size: 12px;
 }
 .title-item{
     flex:1;
 }
 .active{
   color:black;
   font-weight: 700;
   font-size: 14px;
 }
</style>
