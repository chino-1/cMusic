<template>
  <div>
      <div class="side-recommend">
              <div v-for="(item,index) in recommends" :key="index" class="recommend-flex">
                    <i :class="item.class"></i>
                    <span>{{item.text}}</span>
              </div>
          </div>

          <div class="side-item">
              <div v-for="(item,index) in items1" :key="index">
                  <div class="items">
                      <i :class="item.class"></i>
                      <span>{{item.text}}</span>
                  </div>
              </div>
          </div>

          <div class="side-item">
              <div v-for="(item,index) in items2" :key="index">
                  <div class="items">
                      <i :class="item.class"></i>
                      <span>{{item.text}}</span>
                  </div>
              </div>
          </div>
  </div>
</template>
<script>
export default {
   name:'SideCommon',
   data() {
       return {
           recommends:[
               {
                class:'el-icon-message',
                text:'我的消息'
               },
               {
                class:'el-icon-user',
                text:'我的好友'
               },
               {
                class:'el-icon-house',
                text:'个人主页'
               },
               {
                class:'el-icon-shopping-bag-1',
                text:'个性装扮'
               },
           ],
           items1:[
               {
                class:'el-icon-microphone',
                text:'听歌识曲'
               },
               {
                class:'el-icon-video-camera',
                text:'演出'
               },
               {
                class:'el-icon-shopping-cart-2',
                text:'商城'
               },
               {
                class:'el-icon-turn-off',
                text:'游戏推荐'
               },
               {
                class:'el-icon-location-outline',
                text:'附近的人'
               },
               {
                class:'el-icon-wallet',
                text:'口袋彩铃'
               },
           ],
           items2:[
               {
                class:'el-icon-document',
                text:'我的订单'
               },
               {
                class:'el-icon-pie-chart',
                text:'定时停止播放'
               },
               {
                class:'el-icon-full-screen',
                text:'扫一扫'
               },
               {
                class:'el-icon-time',
                text:'音乐闹钟'
               },
               {
                class:'el-icon-cloudy',
                text:'音乐云盘'
               }
           ]
       }
   },
}
</script>
<style scoped>
@import "../../../assets/css/sidebar.css";
</style>
