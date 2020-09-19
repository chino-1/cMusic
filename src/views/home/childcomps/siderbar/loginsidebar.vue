<template>
  <div class="side">
      <div class="cvip">黑胶会员</div>
      
      <div class="side-content">
         <img :src="avatarurl" alt="">
         <span>{{usernickname}}</span>
         <div @click="outlogin"><i class="el-icon-switch-button">退出登录</i></div>
      </div>

      <side-common></side-common>
  </div>
</template>
<script>
import {getUserDetail} from 'network/index'
import SideCommon from './sidecommon'
export default {
   name:'LoginSideBar',
   components:{
      SideCommon
   },
   computed: {
       uid(){
           return this.$store.state.uid
       }
   },
   data() {
       return {
           avatarurl:'',
           usernickname:''
       }
   },
   methods: {
       outlogin(){
           this.$store.commit('changeLogin')
           this.$store.commit('changeSide')
           this.$store.commit('changeUid','')  //退出后将uid置空，解决反复登录后用户头像昵称不显示,置空后watch会被重复触发
           this.move()
       },
       move(){
	       document.body.style.overflow='';//遮罩层消失后调用，允许页面滚动
       },
   },
   watch: {
       uid(newValue,oldValue){
           getUserDetail(newValue).then(res=>{
                // console.log(res)
                this.avatarurl = res.profile.avatarUrl
                this.usernickname = res.profile.nickname
           })
       }
   },
}
</script>
<style scoped>
@import "../../../../assets/css/sidebar.css";
</style>
