<template>
  <div>
    <div class="text">
      <div class="textleft">推荐歌曲</div>
      <div class="textright"><el-button icon="el-icon-video-play" size="mini" round>播放全部</el-button></div>
    </div>

    <div class="songs">
      <swiper :options="songSwiperOption">
        <swiper-slide v-for="(item,index) in songlist" :key="index">
          <div v-for="(item1,index1) in item" :key="index1" @click="songclick(index,index1)">
            <div class="recommend-song">
              <div class="recommend-img"><img :src="item1.picUrl" alt=""></div>
              <div class="recommend-author">
                <div class="song-name"><span>{{item1.name}}</span><span class="text1">-{{item1.song.artists[0].name}}</span>
                </div>
                <div class="text1">我是描述</div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import {getRecommendSong,getSongDetail} from 'network/index'
export default {
   name:'RecommendSong',
   data() {
     return {
       songdata:[],
       songSwiperOption: {
          slidesPerView: 1.1,
          direction: 'horizontal',
          // slidesPerColumn : 3, 无效设置，通过computed另一种方法解决三行轮播
          resistanceRatio: 0.3,
          nested: true,
          pagination: {
            el: '.swiper-pagination',
          }
       },
       songdetail:[]
     }
   },
   methods: {
     songclick(index,index1){
       getSongDetail(this.songlist[index][index1].id).then(res=>{
          this.songdetail = res.songs[0]
       })
     }
   },
   created() {
       getRecommendSong().then(res=>{
          //  console.log(res)
           this.songdata = res.result
       })
   },
   watch: {
     songdetail(newValue,oldValue){
        this.$store.commit('changePlayer',newValue)
        this.$router.push('/player/'+newValue.id)
     }
   },
   computed: {
     songlist:function(){
            let index =0;
            let count = 3;
            let arrSongs = [];
            let data = this.songdata;
            for(let i=0;i<this.songdata.length;i++){
              index = parseInt(i/count);
              if (arrSongs.length <= index) {
                  arrSongs.push([]);
              }
              arrSongs[index].push(data[i])
            }
            return arrSongs
          }
   },
}
</script>
<style scoped>
.text{
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 8px;
}
.textleft{
  padding: 0 8px;
  font-weight: 600;
  font-size: 16px;
}
.textright{
  position: absolute;
  right: 10px;
}
.songs{
  padding: 8px 8px;
  display: flex;
}
.recommend-song{
  height: 80px;
  display: flex;
}
.recommend-img{
  height: 60px;
  width: 60px;
}
.recommend-img img{
  width: 100%;
  border-radius: 5px;
}
.recommend-author{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 5px 8px;
  letter-spacing: 1px;
  line-height: 15px;
}
.song-name:first-child{
  font-weight: 700;
  font-size: 12px;
  overflow: hidden;
}
.text1{
  font-size: 4px;
  font-weight: 400;
  color: gray;
  overflow: hidden;
}
</style>
