<template>
  <div id="home" :class="{'isside':showside}">
    <main-tab-bar></main-tab-bar>
    
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <find-recommend></find-recommend>
    <recommend-playlist v-if="!islogin"></recommend-playlist>
    <recommend-song v-if="!islogin"></recommend-song>
    <song-sheet :songsheet="showsheet"></song-sheet>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/maintabbar'
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
       MainTabBar,
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
   },
}
</script>
<style scoped>
@import "../../assets/css/usetabbar.css";
#home{
    height: 100vh;
}
</style>
