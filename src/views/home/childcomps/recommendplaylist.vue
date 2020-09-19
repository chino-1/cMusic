<template>
  <div>
    <div class="text">
      <div class="textleft">你的歌单精选站</div>
      <div class="textright" @click="searchmore"><el-button round size="mini">查看更多</el-button></div>
    </div>

    <div class="music-item">
      <swiper :options="songSwiperOption">
        <swiper-slide v-for="(item,index) in musicdata" :key="index">
            <div class="recommend-music-item" @click="itemclick(index)">
              <div class="recommend-music-item-pic">
                  <img :src="item.picUrl" alt="">
              </div>
              <div class="recommend-music-text">
                  {{item.name}}
              </div>
            </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import {getRecommendPlaylist} from 'network/index'
import { swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
   name:'RecommendPlaylist',
   data() {
     return {
       limit:10,
       musicdata:[],
       songSwiperOption: {
          slidesPerView: 3,
          // spaceBetween: '3%',
          resistanceRatio: 0.3,
          nested: true,
       }
     }
   },
   methods: {
     itemclick(index){
       this.$router.push('/playlist/'+this.musicdata[index].id)
     },
     searchmore(){
       this.$router.push('/playlistsquare')
     }
   },
   created() {
     getRecommendPlaylist(this.limit).then(res=>{
       this.musicdata = res.result
     })
   },
}
</script>
<style scoped>
.text{
  display: flex;
  align-items: center;
  position: relative;
}
.textleft{
  padding: 0 8px;
  font-weight: 600;
  font-size: 16px;
}
.textright{
  text-align: center;
  position: absolute;
  right: 20px;
}
.music-item{
  padding: 8px 0 0;
  display: flex;
}
.recommend-music-item{
  width: 100%;
  padding-left: 7px;
  display: flex;
  flex-direction: column;
}
.recommend-music-item-pic {
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 5px;
}
.recommend-music-item-pic img{
  width: 100%;
}
.recommend-music-text{
  width: 90px;
  padding: 5px 0;
  line-height: 12px;
  height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 11px;
  font-weight: 400;
  display: -webkit-box;   /* 将对象作为弹性伸缩盒子 */
  -webkit-box-orient: vertical;  /* 设置伸缩盒子的子元素排列方式 */
  -webkit-line-clamp: 2;  /* 文本显示两行 */
}
</style>
