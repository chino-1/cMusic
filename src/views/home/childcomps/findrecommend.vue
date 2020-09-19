<template>
  <div class="find-recommend">
      <div v-for="(item,index) in recommend" :key="index" class="finditem" @click="findclick(index)">
          <div class="icon">
             <i class="iconitem" :class="item.class"></i>
          </div>
          <div class="text">{{item.text}}</div>
      </div>
  </div>
</template>
<script>
export default {
   name:'FindRecommend',
   data() {
       return {
           recommend:[
               {
                class:'el-icon-date',
                text:'每日推荐'
               },
               {
                class:'el-icon-s-unfold',
                text:'歌单'
               },
               {
                class:'el-icon-s-data',
                text:'排行榜'
               },
               {
                class:'el-icon-s-finance',
                text:'电台'
               },
               {
                class:'el-icon-bank-card',
                text:'私人FM'
               }
           ]
       }
   },
   methods: {
       findclick(index){
           switch(index){
               case 0:
                   console.log('等待开发')
                   break;
               case 1:
                   this.$router.push('/playlistsquare')
                   break;
           }
       }
   },
}
</script>
<style scoped>
.find-recommend{
    padding: 8px 0;
    display: flex;
}
.finditem{
    flex: 1;
    display: flex;  /* 这个flex设置为了使flex-direction生效，使图标和文字上下排列 */
    flex-direction: column;
    align-items: center;
}
.icon{
    display: flex;  /* 这个flex设置为了justify  align这些产生效果，使图标居中 */
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
.text{
    padding: 8px 0;
    font-size: 8px;
}
</style>
