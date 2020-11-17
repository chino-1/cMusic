<template>
  <div class="profile-nav">
      <nav-bar>
         <div slot="center" class="title">
              <div v-for="(item,index) in titles" class="title-item"
              :class="{active:index === currentIndex}"
              @click="titleClick(index)">
              <span>{{item}}</span></div>
          </div>
      </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
   name:'ProfileNavBar',
   components:{
       NavBar
   },
   data() {
     return {
       titles:['创建歌单','收藏歌单','推荐歌单'],
       currentIndex: 0
     }
   },
   methods: {
       titleClick(index){
           this.currentIndex = index
           this.$emit('titleClick',index)
     },
   },
}
</script>
<style scoped>
.profile-nav{
    height: 40px;
}
.title{
     display: flex;
     margin: 10px 0;
     font-size: 14px;
 }
 .title-item{
     flex:1;
 }
 .active{
     color:black;
     font-weight: 700;
     font-size: 14px;
 }
 .active span{
     border-bottom: 2px solid red;
 }

</style>
