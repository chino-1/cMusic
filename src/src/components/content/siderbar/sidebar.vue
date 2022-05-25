<template>
  <div class="side">
      <div class="cvip">黑胶会员</div>

      <div>
          <div class="login">
              <span>手机电脑多端同步，尽享海量高品质音乐</span>
              <div class="login-btn" @click="loginclick"><el-button type="danger" round>立即登录</el-button></div>
          </div>
          
          <side-common></side-common>
      </div>
  </div>
</template>
<script>
import SideCommon from './sidecommon'
export default {
   name:'SideBar',
   components:{
      SideCommon
   },
   methods: {
       loginclick(){
           this.$router.push('/login')
       },
   },
}
</script>
<style scoped>
@import "../../../assets/css/sidebar.css";
</style>
