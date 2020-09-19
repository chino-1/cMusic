<template>
  <div>
      <div @click="back" class="top">
          <i class="el-icon-back"></i>
          <div class="text1">歌单广场</div>
      </div>

      <div>
          <swiper :options="swiperOption" v-if="playlistswiper.length">
             <swiper-slide v-for="(item,index) in playlistswiper" class="swiper-content" :key="index">
                <div class="swiper-item" @click="toplistclick(index)">
                    <img :src="item.coverImgUrl" alt="">
                    <div class="count1">{{item.playCount | formatcount1}}</div>
                    <div class="play"><i class="el-icon-video-play"></i></div>
                    <div class="swiper-text">{{item.name}}</div>
                </div>
             </swiper-slide>
          </swiper>
      </div>

      <grid-view :cols="3" :lineSpace="5" :v-margin="5">
        <div v-for="(item,index) in playlist" :key="index">
            <div class="playlist-item" @click="highlistclick(index)">
                <img :src="item.coverImgUrl" alt="">
                <div class="count2">{{item.playCount | formatcount1}}</div>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
      </grid-view>
  </div>
</template>
<script>
import GridView from 'components/common/gridView/GridView'
import {getTopPlaylist,getHighPlaylist} from 'network/index'
export default {
   name:'PlayListSquare',
   components:{
       GridView
   },
   data() {
       return {
           playlistswiper:[],
           swiperOption:{
                centeredSlides: true,
                loop:true,
                slidesPerView: 'auto',
           },
           playlist:[],
           limit:21,
       }
   },
   methods: {
     back(){
         this.$router.back()
     },
     toplistclick(index){
         this.$router.push('/playlist/'+this.playlistswiper[index].id)
     },
     highlistclick(index){
         this.$router.push('/playlist/'+this.playlist[index].id)
     }
   },
   created() {
       getTopPlaylist().then(res=>{
        //  console.log(res)
         this.playlistswiper = res.playlists
       })
       getHighPlaylist(this.limit).then(res=>{
        //    console.log(res)
           this.playlist = res.playlists
       })
   },
}
</script>
<style scoped>
.top{
    display: flex;
    padding: 8px 8px;
}
.top i{
    font-size: 20px;
}
.text1{
    padding-left: 8px;
}

.swiper-content{
    width: 160px;
}
.swiper-item{
    width: 160px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 1px 1px rgba(128,128,128,.4);
    border-radius: 4px;
}
.swiper-item img{
    position: relative;
    width: 100%;
}
.swiper-slide{
    transition: 300ms;
    transform: scale(0.8);
}
.swiper-slide-active{
    transform: scale(1);
}
.count1{
    position: absolute;
    right: 4px;
    top: 4px;
    color: white;
    font-size: 12px;
    font-weight: 500;
}
.play{
    position: absolute;
    right: 4px;
    bottom: 40px;
    font-size: 25px;
}
.swiper-text{
    padding-top: 5px;
    font-size: 12px;
    height: 30px;
}

.playlist-item{
    position: relative;
    width: 80px;
    height: 120px;
}
.playlist-item img{
    width: 100%;
    border-radius: 5px;
}
.count2{
    position: absolute;
    right: 4px;
    top: 2px;
    color: white;
    font-size: 10px;
    font-weight: 500;
}
.name{
    padding-top: 3px;
    font-size: 10px;
    height: 27px;
    line-height: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;   /* 将对象作为弹性伸缩盒子 */
    -webkit-box-orient: vertical;  /* 设置伸缩盒子的子元素排列方式 */
    -webkit-line-clamp: 2;  /* 文本显示两行 */
}
</style>
