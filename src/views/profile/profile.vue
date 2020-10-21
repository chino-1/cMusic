<template>
  <div id="profile" :class="{'isside':showside}">
      <main-tab-bar></main-tab-bar>
      <div @click="itemclick">点击进入歌单广场</div>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/maintabbar'
import {mapGetters} from 'vuex'
export default {
   name:'Profile',
   components:{
     MainTabBar
   },
   computed: {
     ...mapGetters(['showside']),
   },
   methods: {
     itemclick(){
       this.$router.push('/playlistsquare')
     }
   },
}
</script>
<style scoped>
@import "../../assets/css/usetabbar.css";
#profile{
  height: 100vh;
}
</style>
