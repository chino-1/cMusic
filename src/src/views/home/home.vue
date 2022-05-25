<template>
  <div id="home" :class="{'isside':showside}">
    <main-tab-bar></main-tab-bar>
    
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <find-recommend></find-recommend>
    <recommend-playlist></recommend-playlist>
    <recommend-song></recommend-song>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/maintabbar'
import HomeSwiper from './childcomps/homeswiper'
import FindRecommend from './childcomps/findrecommend'
import RecommendPlaylist from './childcomps/recommendplaylist'
import RecommendSong from './childcomps/recommendsong'

import {mapGetters} from 'vuex'
import {getSwiper} from 'network/index'
export default {
   name:'Home',
   components:{
       MainTabBar,
       HomeSwiper,
       FindRecommend,
       RecommendPlaylist,
       RecommendSong,
   },
   computed: {
       ...mapGetters(['showside']),
   },
   data() {
       return {
           swiperlist:[],
       }
   },
   mounted() {
       this.getHomeSwiper()
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
