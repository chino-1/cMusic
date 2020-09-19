<template>
     <scroll  ref="toscroll" v-if="haveLyric">
       <div class="lyric" ref="lyric">
          <div class="lyric-content"></div> <!-- 歌词初始位置在中间偏上，用此div将歌词撑下去 -->
            <p v-for="(item,index) in Lyrics" 
            ref="lyricitem"
            :key="index"  
            :data-index="index"
            class="lyric-item"
            :class="{active: index === currentIndex }">
              {{item.content | lyriccontent}}
            </p>
          <div class="lyric-content"></div>  <!-- 最后补上此div让歌词可以向上滚动 -->
       </div>
     </scroll>
</template>
<script>
import Scroll from 'components/common/Scroll/Scroll'
import {getLyric} from 'network/index'
import {parseLyric,parseTime} from './parselyric'
export default {
   name:'Lyric',
   data() {
       return {
           Lyrics:'',
           currentIndex:0,
           haveLyric:false,
       }
   },
   components:{
      Scroll
   },
   props:{
      currentTime:{
        type:Number,
        default:0
      }
   },
   computed: {
      songId(){
        return this.$store.getters.songId
      },
   },
   filters:{
      lyriccontent:function(value){
         if(!value){
           return '---------'
         }else{
           return value
         }
      }
   },
   created() {
       getLyric(this.songId).then(res=>{
           const lrcString = res.lrc.lyric
           this.Lyrics = parseLyric(lrcString)
           this.haveLyric = true
          //  console.log(this.Lyrics) //time为number类型
       })
   },
   watch: {
     currentTime(newValue,oldValue){
       for(let i=0;i<this.Lyrics.length;i++){  //由于audio和接口返回时间的精确度问题，研究过后直接用parseInt
          if(parseInt(newValue) > parseTime(this.Lyrics[i].time)){ //这样歌词的滚动以秒为单位，不够精确
             const index = this.$refs.lyricitem[i].dataset.index //  但暂时只能如此
             if(i === parseInt(index)){
               this.currentIndex = i
               this.$refs.toscroll.scrollTo(0,-i*44,800)
             }
          }
       }
     }
   },
}
</script>
<style scoped>
.wrapper{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 119px;
}
.lyric{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lyric-content{
  height: 180px;
}
.lyric-item{
  height: 20px;
  font-size: 12px;
  color:#989898;
}
.active{
  color:#fff;
}
</style>
