<template>
  <div>
      <main-tab-bar></main-tab-bar>
      <div class="top-text">
         <span>数字专辑</span>
      </div>
      <grid-view :col="2" :lineSpace="5" :v-margin="5">
         <div v-for="(item,index) in Albumdata" :key="index">
            <div class="album-item">
                <img :src="item.picUrl" alt="">
                <div class="name">{{item.name}}</div>
                <div class="creator">{{item.artist.name}}</div>
            </div>
         </div>
      </grid-view>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/maintabbar'
import GridView from 'components/common/gridView/GridView'
import {getAlbum} from 'network/index'
export default {
   name:'Topic',
   components:{
       MainTabBar,
       GridView
   },
   data() {
     return {
       Albumdata:[],
     }
   },
   created() {
       getAlbum().then(res=>{
        //  console.log(res)
         this.Albumdata = res.albums
       })
       
   },
}
</script>
<style scoped>
.top-text{
  padding-top: 10px;
  font-size: 15px;
  font-weight: 600;
}
.album-item{
    width: 7rem;
    height: 10rem;
    margin: 0 auto;
}
.album-item img{
    width: 100%;
    border-radius: 5px;
}
.name{
    font-size: 8px;
    font-weight: 700;
}
.creator{
    padding-top: 6px;
    font-size: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
