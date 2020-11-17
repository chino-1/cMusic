<template>
  <div id="profile" :class="{'isside':showside}">
      <main-tab-bar></main-tab-bar>
      
      <profile-nav-bar @titleClick="titleClick" v-show="isBarFixed" class="nav1" ref="nav1"></profile-nav-bar>
      <scroll ref="toscroll" @scroll="contentScroll" :probe-type="3" class="content">
         <find-recommend></find-recommend>
         <profile-nav-bar @titleClick="titleClick" ref="nav2"></profile-nav-bar>
         <creat-playlist :userCreat="userCreat" ref="creat"></creat-playlist>
         <collect-playlist :userCollect="userCollect" ref="collect" @cimageLoad="cimageLoad"></collect-playlist>
         <recommend-playlist @rimageLoad="rimageLoad" ref="recommend"></recommend-playlist>
      </scroll>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/maintabbar'
import Scroll from 'components/common/Scroll/Scroll'
import FindRecommend from './childcomps/findrecommend'
import ProfileNavBar from './childcomps/profilenavbar'
import CreatPlaylist from './childcomps/creatplaylist'
import CollectPlaylist from './childcomps/collectplaylist'
import RecommendPlaylist from './childcomps/recommendplaylist'

import {getSongSheet} from 'network/index'
import {mapGetters} from 'vuex'
export default {
   name:'Profile',
   components:{
     MainTabBar,
     Scroll,
     FindRecommend,
     ProfileNavBar,
     CreatPlaylist,
     CollectPlaylist,
     RecommendPlaylist
   },
   computed: {
     ...mapGetters(['showside','islogin']),
     uid(){
        return this.$store.state.uid
     },
   },
   data() {
     return {
       userCreat:[],
       userCollect:[],
       scrollTop:[],
       isBarFixed:false,
       navTop:0,
     }
   },
   methods: {
     contentScroll(position){//判断profile-nav是否吸顶
         this.isBarFixed = (-position.y) > this.navTop
     },
     titleClick(index){
        this.$refs.toscroll.scrollTo(0,-this.scrollTop[index],300)
        this.$refs.nav1.currentIndex = index //使两个profilenav的currentIndex值都修改
        this.$refs.nav2.currentIndex = index
     },
     selectlist(list){
          for(var i=0;i<list.length;i++){
              if(list[i].userId == this.uid){
                this.userCreat.push(list[i])
              }else{
                this.userCollect.push(list[i])
              }
          }
      },
      rimageLoad(){ // 当组件内图片加载完后再让better-scroll判断滚动高度，才能使滚动区域和获取到的offsetTop值正常
        if(!this.islogin){
          this.$refs.toscroll.refresh()
        }
      },
      cimageLoad(){ //此处cimageLoad如果从发现页进betterscroll死活获取不到正确的高度，只好登录过后直接跳到我的页面来，不让走发现页
        this.$refs.toscroll.refresh()
        this.getscrollY()
      },
      getscrollY(){
        this.scrollTop = []
        //减去顶部的tabbar为30，减去profilenavbar设置的40px比navbar组件的30多出10px
        this.scrollTop.push(this.$refs.creat.$el.offsetTop-40)
        this.scrollTop.push(this.$refs.collect.$el.offsetTop-40)
        this.scrollTop.push(this.$refs.recommend.$el.offsetTop-40)
      },
   },
   mounted(){
      this.$bus.$on('getuid',() =>{  //练习总线这种方法，在另一处则直接保存在了vuex中
          getSongSheet(this.uid).then(res=>{
            this.selectlist(res.playlist)
         })
      })
      this.navTop = this.$refs.nav2.$el.offsetTop
    },
    activated() {
      this.getscrollY()
    },
}

</script>
<style scoped>
@import "../../assets/css/usetabbar.css";
#profile{
  background-color:#F7F7F7;
  height: 100vh;
}
.nav1{
  position: relative;
  z-index: 6;
  background-color: #fff;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
