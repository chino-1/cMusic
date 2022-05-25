<template>
  <div>
      <div class="login">
        <div class="logo-pic">
          <img src="../../../assets/images/logo.png" alt="" >
        </div>
        <div class="flex-content">
            <el-row class="phone-item">
               <el-button round @click="phoneclick1">手机号登录</el-button>
            </el-row>
            <el-row>
              <el-button round @click="phoneclick2">注册或者换绑手机号</el-button>
            </el-row>
          </div>
      </div>
  </div>
</template>
<script>
export default {
   name:'Login',
   data() {
     return {
       
     }
   },
   methods: {
     phoneclick1(){
       this.$router.push('/phonelogin')
     },
     phoneclick2(){
       this.$router.push('/register')
     }
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
.flex-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 65vh;
}
.phone-item{
    margin-bottom:8px;
}
</style>
