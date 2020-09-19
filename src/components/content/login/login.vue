<template>
  <div>
      <div v-if="isphoneLogin">   
        <phone-login></phone-login>
      </div>
      
      <div class="login" v-else="!isphoneLogin">
        <div class="logo-pic">
          <img src="../../../assets/images/logo.png" alt="" >
        </div>
        <el-row class="phone">
        <el-button round class="phone-item" @click="phoneclick">手机号登录</el-button>
        </el-row>
      </div>
  </div>
</template>
<script>
import PhoneLogin from './phonelogin'
export default {
   name:'Login',
   data() {
     return {
       isphoneLogin:false
     }
   },
   components:{
     PhoneLogin
   },methods: {
     phoneclick(){
       this.isphoneLogin = true
     }
   },
   deactivated() {
     this.isphoneLogin = false  //解决反复登录时前一个页面不显示
   },
}
</script>
<style scoped>
.login{
    width: 100%;
    height: 100%;
    position: fixed;    /* 这一行跟网上学习，据评论说内容多会无法滚动，如果没有这行，红色不会显示 */
    background: red;
} 
.logo-pic {
      display: flex;
      justify-content: center;
      /* flex: 1 0 auto; */
}
.logo-pic  img {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 50%;
        align-self: flex-end;
        position: fixed;
        top: 70px; 
}
.phone{
    position: absolute;
    bottom: 100px;
    left: 18vh;
    text-align: center;
}
</style>
