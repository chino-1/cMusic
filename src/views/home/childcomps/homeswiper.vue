<template>
  <div>
      <swiper class="swiper-border">
          <swiper-item v-for="(item,index) in swiperlist" :key="index">
            <img :src="item.imageUrl" alt="" class="image">
          </swiper-item>
      </swiper>
  </div>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
   name:'HomeSwiper',
   components:{
       Swiper,
       SwiperItem
   },
   props:{
       swiperlist:{
           type:Array,
           default(){
               return []
           }
       }
   }
}
</script>
<style scoped>
.swiper-border{
    width:90%;
    margin: 0 auto;
    border-radius: 5px;
}
</style>
