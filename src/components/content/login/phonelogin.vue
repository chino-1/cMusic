<template>
  <div class="phonelogin">
      <el-input placeholder="请输入手机号" v-model="phone" clearable>
      </el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <el-button @click="addlogin">登录</el-button>
  </div>
</template>
<script>
import {getLogin} from 'network/index'
export default {
   name:'PhoneLogin',
   data() {
       return {
           phone:'',
           password:'',
       }
   },methods: {
       addlogin(){
          this.$store.commit('changeLogin')
          this.$store.commit('changeSide')
          this.$router.push('/home')
          getLogin(this.phone,this.password).then(res=>{
            //   console.log(res)
              this.$store.commit('changeUid',res.account)
              this.$bus.$emit('getuid')
          })
       }
   },
}
</script>
<style scoped>
.phonelogin{
    padding: 10px;
}
.el-input{
    margin-bottom:10px;
}
</style>
