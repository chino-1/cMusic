<template>
  <div>

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

    <div class="tab-bar">
        <nav-bar :barwidth="50">
            <div slot="left" @click="mclick"><i class="el-icon-notebook-2"></i></div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="title-item" @click="tabclick(index)"
                :class="{active: index === currentIndex}"
                >{{item}}</div>
            </div>
            <div slot="right" @click="sclick"><i class="el-icon-search"></i></div>
        </nav-bar>
    </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import SideBar from 'views/home/childcomps/siderbar/sidebar'
import LoginSideBar from 'views/home/childcomps/siderbar/loginsidebar'
import {mapGetters} from 'vuex'

export default {
   name:'MainTabBar',
   components:{
     NavBar,
     SideBar,
     LoginSideBar
   },
   data() {
       return {
          titles:['我的','发现','云村','视频'],
          currentIndex:1
       }
   },
   computed: {
     ...mapGetters(['showside','islogin']),
   },
   methods: {
     stop(){
	       document.body.style.overflow='hidden';//禁止页面划动
     },
     move(){
	       document.body.style.overflow='';//遮罩层消失后调用，允许页面滚动
	   },
     mclick(){
          this.$store.commit('changeSide')
          this.stop()
     },
     notshowside(){
           this.$store.commit('changeSide')
           this.move()
      },
     tabclick(index){
       this.currentIndex = index;
       switch(index){
         case 0:
           this.$router.replace('/profile')
           break;
         case 1:
           this.$router.replace('/home')
           break;
         case 3:
           this.$router.replace('/viedo')
           break;
       }
     },
     sclick(){
       this.$router.push('/search')
     }
   },
}
</script>
<style scoped>
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

.title{
     display: flex;
     font-size: 12px;
 }
 .title-item{
     flex:1;
 }
 .active{
   color:black;
   font-weight: 700;
   font-size: 14px;
 }
</style>
