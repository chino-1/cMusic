<template>
  <div id="player">
      <audio :src="url" ref="audio" @canplay="getDuration" @timeupdate="updateTime"></audio>
      <div class="topbar">
            <i class="el-icon-back" @click="back"></i>
            <div class="text">
                <span class="name">{{playList.name}}</span>
                <span class="user">{{playList.ar[0].name}}</span>
            </div>
           <i class="el-icon-share"></i>
      </div>
      
      <div class="middle" @click="lyricClick">
         <div class="cd-wrapper" ref="rotateimage" v-if="!showlyric">
           <img :src="playList.al.picUrl" alt="">
         </div>
         <lyric v-else="showlyric" :currentTime="currentTime"></lyric>
      </div>
      
      <div class="bottom">
         <div class="icon1">
          <i class="el-icon-star-off"></i>
          <i class="el-icon-download"></i>
          <i class="el-icon-message-solid"></i>
          <div class="comment" @click="commentclick">
            <i class="el-icon-chat-line-round"></i>
            <span>{{commentCount | formatcount2}}</span>
          </div>
          <i class="el-icon-more"></i>
        </div>

        <div class="progress">
          <span class="song-time">{{currentTime | timeFormat}}</span>
          <div class="progress-item">
            <el-slider v-model="currentValue" 
              :show-tooltip="false" :max="durationValue">
            </el-slider>
          </div>
          <span class="song-time">{{songDuration | timeFormat}}</span>
        </div>

        <div class="icon2">
          <i class="el-icon-refresh-right"></i>
          <i class="el-icon-caret-left"></i>
          <i class="el-icon-video-play bofan" @click="play" v-show="icon"></i>
          <i class="el-icon-video-pause bofan" @click="stop" v-show="!icon"></i>
          <i class="el-icon-caret-right"></i>
          <i class="el-icon-s-unfold"></i>
        </div>
      </div>
  </div>
</template>
<script>
import {getSongUrl,getMusicComment} from 'network/index'
import Lyric from '../lyric/lyric'
export default {
   name:'Player',
   data() {
     return {
       url:'',
       limit:20,
       commentCount:0,
       icon:true,
       showlyric:false,
       currentValue:0,
       durationValue:0,
       songDuration: 0,
       currentTime: 0,
     }
   },
   components:{
      Lyric
   },
   computed: {
      playList(){
        return this.$store.getters.playsong
      }
   },
   methods: {
      back(){
        this.$router.back()
      },
      commentclick(){
        this.$router.push('/comment')
      },
      lyricClick(){
        this.showlyric = !this.showlyric
      },
      play(){
        this.icon = false
        this.isrotate = true
        this.$refs.audio.play()
        if(!this.showlyric){ //解决图片旋转与显示歌词二者的bug
           this.$refs.rotateimage.style.animationPlayState = 'running'
        }
      },
      stop(){
        this.icon = true
        this.isrotate = false
        this.$refs.audio.pause()
        if(!this.showlyric){
           this.$refs.rotateimage.style.animationPlayState = 'paused'
        }
      },
      getSongId(){
         getSongUrl(this.$route.params.id).then(res=>{
          //  console.log(res)
           this.url = res.data[0].url
        })
      },
      getComment(){
         getMusicComment(this.$route.params.id,this.limit).then(res=>{
            // console.log(res) 
            this.commentCount = res.total    // 这次请求等于只用到了total
         })
      },
      getDuration() {
        this.durationValue = this.$refs.audio.duration // 获取的duration就是秒数级，可以直接给silder的max赋值
        this.songDuration = this.$refs.audio.duration //此时可以获取到duration
      },
      updateTime(e) {
        this.currentValue = e.target.currentTime //进度条使用的时间不能格式化，格式化后是字符串形式
        this.currentTime = e.target.currentTime;  //获取audio当前播放时间
      },
   },
   deactivated() {
      this.url = ''
      this.icon = true
      this.showlyric = false
   },
   activated() {
      this.getSongId()
      this.getComment()
      this.$store.commit('changeSongId',this.$route.params.id) //保存歌曲id，在comments组件中再请求一遍数据
      if(!this.showlyric){
        this.$refs.rotateimage.style.animationPlayState = 'paused'
      }
   },
   created() {
       this.getSongId()
       this.getComment()
   },
}
</script>
<style scoped>
@import "../../../assets/css/player.css";
</style>
<style>
.el-slider__button{
    width: 10px !important;
    height: 10px !important;
    border: 1px solid gray !important;
    margin-bottom: 3px;
    background-color: #fff;
    border-radius: 50%;
}
.el-slider__runway{
  height: 2px !important;
}
.el-slider__bar{
  height: 2px !important;
}
</style>