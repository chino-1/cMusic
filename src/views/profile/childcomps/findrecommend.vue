<template>
  <div>
      <div class="container1">
          <div class="usr"><i class="el-icon-user"></i></div>
          <div class="text1" @click="loginclick">立即登录  ></div>
      </div>

      <div class="container2">
           <div class="find-recommend">
                <div v-for="(item,index) in recommend" :key="index" class="finditem">
                    <div class="icon">
                    <i class="iconitem" :class="item.class"></i>
                    </div>
                    <div class="text2">{{item.text}}</div>
                </div>
           </div>
      </div>
  </div>
</template>
<script>
export default {
   name:'FindRecommend',
   methods: {
       loginclick(){
           this.$toast.show('此处只写了样式，可从侧边栏登录',2000)
       }
   },
   data() {
       return {
           recommend:[
               {
                class:'el-icon-download',
                text:'本地音乐'
               },
               {
                class:'el-icon-upload',
                text:'云盘'
               },
               {
                class:'el-icon-check',
                text:'已购'
               },
               {
                class:'el-icon-caret-right',
                text:'最近播放'
               },
               {
                class:'el-icon-s-custom',
                text:'我的好友'
               },
               {
                class:'el-icon-star-on',
                text:'收藏和赞'
               },
               {
                class:'el-icon-s-finance',
                text:'我的电台'
               },
               {
                class:'el-icon-circle-plus-outline',
                text:'音乐应用'
               }
           ]
       }
   },
}
</script>
<style scoped>
.container1{
    padding: 25px;
    display: flex;
    align-items: center;
}
.usr{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:#FFF5EE;
}
.usr i{
    font-size: 35px;
    color: #FFB6C1 !important;
}
.text1{
    padding-left: 15px;
    font-size: 14px;
    font-weight: 600;
}

.container2{
    border-radius: 8px;
    background-color: #fff;
    margin:0 10px;
}
.find-recommend{
    padding: 8px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.finditem{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    padding: 6px 0;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    background-image: linear-gradient(to right, #ff8686 0%, #ef2c2c 63%, #e80000 85%);
}
.iconitem{
    color: white;
}
.text2{
    padding: 8px 0;
    font-size: 6px;
}
</style>
