<template>
  <div>
     <div class="text1">单曲</div>
     <div v-for="(item,index) in searchsongs" :key="index" @click="playclick(index)">
       <div class="item-detail">
            <div class="search-name">{{item.name}}</div>
            <div class="search-content">{{item.artists[0].name}}-{{item.album.name}}</div>
        </div>
     </div>
  </div>
</template>
<script>
import {getSongDetail} from 'network/index'
export default {
   name:'SearchSongs',
   props:{
       searchsongs:{
           type:Array,
           default(){
               return []
           }
       }
   },
   data() {
     return {
       songdetail:[]
     }
   },
   methods: {
     playclick(index){
       getSongDetail(this.searchsongs[index].id).then(res=>{
        //  console.log(res)
         this.songdetail = res.songs
       }) 
     }
   },
   watch: {
     songdetail(newValue,oldValue){
        this.$store.commit('changePlayer',newValue[0])
        this.$router.push('/player/'+newValue[0].id)
     }
   },
}
</script>
<style scoped>
.text1{
  font-size: 14px;
  font-weight: 700;
  padding: 20px 5px 10px 5px;
}
.item-detail{
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  line-height: 16px;
}
.search-name{
  font-size: 12px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: black;
}
.search-content{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
  font-size: 6px;
  color: gray;
}
</style>
