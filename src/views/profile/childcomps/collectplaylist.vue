<template>
    <div class="collect-playlist">
        <nav-bar class="collect1" :barwidth="80"> 
          <div slot="left">收藏歌单</div>
          <div slot="right">
            <i class="el-icon-more"></i>
          </div>
        </nav-bar>

        <div class="collect2" v-if="!islogin">暂无收藏的歌单</div><!-- 未登录显示 -->
        <div v-if="userCollect" v-for="(item,index) in userCollect" :key="index" @click="itemclick(index)"><!-- 登录后显示 -->
            <div class="playlist-item">
                <div class="item-img"><img :src="item.coverImgUrl" alt="" @load="imgLoad"></div>
                <div class="text">
                    <span>{{item.name}}</span>
                    <div class="text1">
                        <span>{{item.trackCount}}首</span>
                        <span>by{{item.creator.nickname}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
   name:'CollectPlaylist',
   props:{
     userCollect:{
       type:Array,
       default(){
         return []
       }
     }
   },
   computed: {
     ...mapGetters(['islogin']),
   },
   components:{
       NavBar
   },
   data() {
     return {
       userCollectLength:0,
       counter:0
     }
   },
   methods: {
     itemclick(index){
           this.$router.push('/playlist/'+this.userCollect[index].id)
     },
     imgLoad(){
           if(++this.counter === this.userCollectLength){
               this.$emit('cimageLoad')
           }
       }
   },
   watch: {
       userCollect(){
           this.userCollectLength = this.userCollect.length
       }
   },
}
</script>
<style scoped>
.collect-playlist{
    border-radius: 8px;
    background-color: #fff;
    margin:15px 10px;
 }
 .collect1{
   font-size: 8px;
   color:gray;
 }
 .collect2{
   font-size: 8px;
   color: gray;
   text-align: center;
   height: 40px;
   line-height: 40px;
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
