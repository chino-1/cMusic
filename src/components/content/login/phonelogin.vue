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
import {checkSpecialKey,checkinput} from 'components/common/filters/checkspecialkey' //引入判断是否存在特殊字符的函数
export default {
   name:'PhoneLogin',
   data() {
       return {
           phone:'',
           password:'',
       }
   },
   methods: {
       addlogin(){
          if(checkinput(this.phone) && checkinput(this.password)){
            this.$store.commit('changeLogin')
            this.$store.commit('changeSide')
            this.$router.push('/home')
            getLogin(this.phone,this.password).then(res=>{
                //   console.log(res)
                this.$store.commit('changeUid',res.account)
                this.$bus.$emit('getuid')
            })
          }else{
              alert('禁止输入特殊字符或者使用跨站脚本攻击')
          }
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
