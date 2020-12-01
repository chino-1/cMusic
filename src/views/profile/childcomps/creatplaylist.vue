<template>
  <div>
     <div class="create-playlist">
         <div>
            <nav-bar class="create1" :barwidth="80"> 
              <div slot="left">创建歌单</div>
              <div slot="right" class="create1-icon">
                <i class="el-icon-plus"></i>
                <i class="el-icon-more"></i>
              </div>
            </nav-bar>
            <div v-if="userCreat" v-show="ifLogin" v-for="(item,index) in userCreat" :key="index" @click="itemclick(index)">
                <div class="playlist-item">
                    <div class="item-img"><img :src="item.coverImgUrl" alt=""></div>
                    <div class="text">
                        <span>{{item.name}}</span>
                        <span class="text1">{{item.trackCount}}首</span>
                    </div>
                </div>
            </div>
            <div class="create2">
              <div class="create2-icon"><i class="el-icon-s-fold"></i></div>
              <span>导入外部歌单</span>
            </div>
         </div>
     </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
   name:'CreatPlaylist',
   components:{
       NavBar
   },
   props:{
     userCreat:{
       type:Array,
       default(){
         return []
       }
     }
   },
   computed: {
     ifLogin(){
       return this.$store.state.ifLogin
     }
   },
   methods: {
     itemclick(index){
           this.$router.push('/playlist/'+this.userCreat[index].id)
     }
   },
}
</script>
<style scoped>
 .create-playlist{
    border-radius: 8px;
    background-color: #fff;
    margin:15px 10px;
 }
 .create1{
   font-size: 8px;
   color: gray;
 }
 .create1-icon i{
   padding:0 10px;
 }
 .create2{
   display: flex;
   align-items: center;
   padding: 6px;
 }
 .create2-icon{
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   height: 40px;
   width: 40px;
   background-color:#EBEBEB;
 }
 .create2 span{
   padding-left: 10px;
   font-size: 13px;
 }

.playlist-item{
    display: flex;
}
.item-img{
    width: 40px;
    height: 40px;
    padding: 6px;
}
.item-img img{
    border-radius: 5px;
    height: 100%;
    width: 100%;
}
.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    line-height: 16px;
}
.text1{
    font-size: 6px;
    color: gray;
}
</style>
