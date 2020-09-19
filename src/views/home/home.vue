<template>
  <div id="home" :class="{'isside':showside}">
    <main-tab-bar @menuclick="menuclick"></main-tab-bar>
    <div class="side-child" v-show="showside" @click="notshowside"></div>
    <div class="side-bar" v-if="!islogin">
        <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
            <side-bar v-show="showside"></side-bar>
        </transition>
    </div>
    <div class="side-bar" v-else="islogin">
        <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
            <login-side-bar v-show="showside"></login-side-bar>
        </transition>
    </div>

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
import SideBar from './childcomps/siderbar/sidebar'
import LoginSideBar from './childcomps/siderbar/loginsidebar'
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
       SideBar,
       LoginSideBar,
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
.isside{
   animation: bgcolor 2s forwards;
}
@keyframes bgcolor{
    0%{
        background-color: #fff;
    }
    100%{
        background-color: #969696;
    }
}
.side-child{
    position: absolute;
    height: 100vh;
    width: 11vh;
    right: 0;
    top: 0;
    z-index: 20;
}
.side-bar{
    position: absolute;
    left: 0;
    top: 0;
}
</style>
