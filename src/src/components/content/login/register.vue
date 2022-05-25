<template>
  <div class="register">
      <div class="phoneinput" v-if='shownumber>=3'>
          <el-input placeholder="请输入正确的手机号，错误将收不到验证码" v-model="phone" clearable></el-input>
          <el-button @click="sentcaptcha" size="medium" round>发送验证码</el-button>
      </div>
      
      <div v-else-if='shownumber>=2'>
          <el-input placeholder="请输入验证码" v-model="captcha" clearable></el-input>
          <el-button @click="checkcaptcha" round>验证手机</el-button>
          <el-button @click="back" round>重新绑定手机</el-button>
      </div>

      <div v-else-if='shownumber>=1'>
          <el-input placeholder="请输入您的昵称" v-model="nickname" clearable></el-input>
          <el-input placeholder="请设置您的密码，以便下次登录" v-model="password" show-password></el-input>
          <el-button @click="getregister" round>立即注册</el-button>
      </div>
  </div>
</template>
<script>
import {getcaptcha,verifycaptcha,registeruser} from 'network/index'
import {checkinput} from 'components/common/filters/checkspecialkey' //引入判断是否存在特殊字符的函数
export default {
   name:'',
   data() {
       return {
           shownumber:3,//使用v-if和v-else-if减少路由跳转，本身验证手机就是几个按钮，使用时必须判断>=而不能=3或=2这样判断
           phone:'',
           captcha:'',
           nickname:'',
           password:'',
       }
   },
   methods: {
       sentcaptcha(){
           if(checkinput(this.phone) && this.phone!=''){
                this.shownumber=2
                getcaptcha(this.phone).then(res=>{
                        this.$toast.show('验证码已发送',2000)
                })
           }else(this.$toast.show('请输入正确的手机号',2000))
       },
       checkcaptcha(){
           if(checkinput(this.captcha)){
               this.shownumber=1
                verifycaptcha(this.phone,this.captcha).then(res=>{
                    if(res.data){
                        this.$toast.show('手机验证成功！',2000)
                    }
                })
           }
       },
       getregister(){
           if(checkinput(this.nickname) && checkinput(this.password)){
              registeruser(this.phone,this.password,this.captcha,this.nickname).then(res=>{
                console.log(res)
                this.$store.commit('changeLogin')
                this.$store.commit('changeSide')
                this.move()
                this.$router.replace('/profile')
                this.$store.commit('changeTabIndex',0)
                this.$store.commit('changeUid',res.account)
                // this.$bus.$emit('getuid')
              })
           }
       },
       back(){
           this.ifclick=true
       },
       move(){
	       document.body.style.overflow='';//遮罩层消失后调用，允许页面滚动
       },
   },
   deactivated() {
       this.shownumber=1
   },
}
</script>
<style scoped>
.register{
    padding: 10px;
}
.el-input{
    margin-bottom:10px;
}

</style>
