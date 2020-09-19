<template>
  <div>
      <div v-for="(item,index) in recommendMvdata" :key="index">
          <div class="video-item">
            <div class="video-img" :class="{active: index === currentIndex}">
                <img :src="item.picUrl" alt="">
                <div class="count"><i class="el-icon-caret-right"></i>{{item.playCount | formatcount}}</div>
                <div class="duration"><i class="el-icon-s-data"></i>{{item.duration | timeFormat}}</div>
                <div class="play" @click="playclick(index)"><i class="el-icon-caret-right"></i></div>
            </div>
            <div class="text1">{{item.copywriter}}</div>
            <div class="text2">
                <div class="artist">(作者头像){{item.artistName}}</div>
                <div class="icon">
                    <i class="el-icon-thumb"></i>
                    <i class="el-icon-chat-line-round"></i>
                    <i class="el-icon-more"></i>
                </div>
            </div>
          </div>
      </div>
      
      <video-play :recommendMvdata="MvId" v-if="vshow"></video-play>
  </div>
</template>
<script>
import {getRecommendMv} from 'network/index'
import VideoPlay from './videoplay'
export default {
   name:'Video',
   components:{
       VideoPlay
   },
   computed: {
       MvId(){
          return this.recommendMvdata[this.currentIndex].id
       }
   },
   data() {
       return {
           recommendMvdata:[],
           vshow:false,
           currentIndex:10000
       }
   },
   methods: {
       playclick(index){
          this.vshow = true
          this.currentIndex = index
       }
   },
   created() {
       getRecommendMv().then(res=>{
        //    console.log(res)
           this.recommendMvdata = res.result
       })
   },
   filters:{
       timeFormat(time) {
        let minu = 0;
        let sec = 0;
        time = Math.floor(time % 3600);
        minu = Math.floor(time / 60);
        sec = Math.floor(time % 60);
        sec = sec < 10 ? '0' + sec : sec + '';
        minu = minu < 10 ? '0' + minu : minu + '';
        return minu + ':' + sec;
      },
      formatcount(count){
          if(count < 30000){
              return count
          }else{
              let ct = count.toString()
              let str = ct.slice(0,ct.length-4)
              return `${str}万`
          }
       }
   }
}
</script>
<style scoped>
.video-item{
    width: 300px;
    margin: 0 auto;
    padding-top: 5px;
}
.video-img{
    position: relative;
    width: 100%;
}
.video-img img{
    width: 100%;
    border-radius: 8px;
}
.count{
    position: absolute;
    left: 3px;
    bottom: 6px;
    color: white;
    font-size: 10px;
    font-weight: 500;
}
.count i{
    padding-right: 2px;
    color:white !important;
}
.duration{
    position: absolute;
    right: 5px;
    bottom: 6px;
    color:white;
    font-size: 10px;
    font-weight: 500;
}
.duration i{
    padding-right: 2px;
    color: white !important;
}
.play{
    position: absolute;
    left: 40%;
    top: 40%;
    font-size: 45px;
    color:rgba(248,248,248,.6) !important;
}
.active{
    display: none;
}
.text1{
    padding: 8px 0;
    font-size: 14px;
    box-shadow: 0 1px 0 0 rgba(128,128,128,.3);
}
.text2{
    display: flex;
    padding: 8px 0;
}
.artist{
    font-size: 12px;
    width: 200px;
}
.icon i{
    width: 30px;
}
</style>
