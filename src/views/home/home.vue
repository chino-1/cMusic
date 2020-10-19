<template>
  <div id="home" >
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <find-recommend></find-recommend>
    <recommend-playlist v-if="!islogin"></recommend-playlist>
    <recommend-song v-if="!islogin"></recommend-song>
    
    <song-sheet :songsheet="showsheet"></song-sheet>
  </div>
</template>
<script>
import HomeSwiper from './childcomps/homeswiper'
import FindRecommend from './childcomps/findrecommend'
import RecommendPlaylist from './childcomps/recommendplaylist'
import RecommendSong from './childcomps/recommendsong'
import SongSheet from './childcomps/songsheet'

import {mapGetters} from 'vuex'

import {getSwiper,getSongSheet} from 'network/index'
export default {
   name:'Home',
   components:{
       HomeSwiper,
       FindRecommend,
       RecommendPlaylist,
       RecommendSong,
       SongSheet,
   },
   computed: {
       ...mapGetters(['showside','islogin']),
       showsheet(){
           if(!this.$store.state.ifLogin) return{}
           return this.songsheetlist   
       },
       uid(){
           return this.$store.state.uid
       }
   },
   data() {
       return {
           swiperlist:[],
           songsheetlist:[],
       }
   },
   mounted() {
       this.getHomeSwiper()
       this.$bus.$on('getuid',()=>{
        getSongSheet(this.uid).then(res=>{
        //   console.log(res)
          this.songsheetlist = res.playlist  
        })
    })
   },
   methods: {
       getHomeSwiper(){
          getSwiper().then(res=>{
            this.swiperlist = res.banners
        })
       },
       menuclick(){
           this.$store.commit('changeSide')
           this.stop()
       },
       notshowside(){
           this.$store.commit('changeSide')
           this.move()
       },
       stop(){
	       document.body.style.overflow='hidden';//禁止页面划动
	   },
	   move(){
	       document.body.style.overflow='';//遮罩层消失后调用，允许页面滚动
	   },
   },
}
</script>
<style scoped>
#home{
    height: 100vh;
}
</style>
