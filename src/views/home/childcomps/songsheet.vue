<template>
   <!-- 未封装 -->
  <div v-if="Object.keys(songsheet).length !== 0">
    <span>我喜欢的音乐</span>
    <div class="likesong">
        <img :src="songsheet[0].coverImgUrl" alt="">
    </div>

    <tab-control :titles="['创建歌单','收藏歌单','歌单助手']" @tabclick="tabclick"></tab-control>

    <grid-view :cols="2" :lineSpace="15" :v-margin="20" v-show="show">
      <div class="songsheet" v-for="(item,index) in songsheet" v-show="item.userId === uid" 
      @click="sheetclick(index)">
         <div class="image">
             <img :src="item.coverImgUrl" alt="">
         </div>
         <div class="text">
             <span class="name">{{item.name}}</span>
             <span class="count">{{item.trackCount}}</span>
         </div>
      </div>
    </grid-view>

    <grid-view :cols="2" :lineSpace="15" :v-margin="20" v-show="current === 0">
      <div class="songsheet" v-for="(item,index) in songsheet" v-show="item.userId === uid && current === 0" 
      @click="sheetclick(index)">
         <div class="image">
             <img :src="item.coverImgUrl" alt="">
         </div>
         <div class="text">
             <span class="name">{{item.name}}</span>
             <span class="count">{{item.trackCount}}</span>
         </div>
      </div>
    </grid-view>

    <grid-view :cols="2" :lineSpace="15" :v-margin="20" v-show="current === 1">
      <div class="songsheet" v-for="(item,index) in songsheet" v-show="item.userId !== uid && current===1"
      @click="sheetclick(index)">
         <div class="image">
             <img :src="item.coverImgUrl" alt="">
         </div>
         <div class="text">
             <span class="name">{{item.name}}</span>
             <span class="count">{{item.trackCount}}</span>
         </div>
      </div>
    </grid-view>
    <div v-show="current === 2">
        无
    </div>
  </div>
</template>
<script>
import GridView from 'components/common/gridView/GridView'
import TabControl from 'components/content/tabControl/TabControl'
import {getSheetDetail} from 'network/index'
export default {
   name:'SongSheet',
   props:['songsheet'],
   components:{
       GridView,
       TabControl,
   },
   data() {
       return {
            current:'0',
            show:true
       }
   },
   computed: {
       uid(){
           return this.$store.state.uid
       }
   },methods: {
       tabclick(index){
          this.current = index
          this.show = false
       },
       sheetclick(index){
           this.$router.push('/playlist/'+this.songsheet[index].id)
       }
   },
}  
</script>
<style scoped>
/* .songsheet{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
} */
.likesong{
    font-size: 12px;
}
.likesong img{
    width: 80px;
    height: 80px;
}
.songsheet{
    display: flex;
    align-items: center;
}
.image img{
    width: 50px;
    height: 50px;
    border-radius: 10px;
}
.text{
    display: flex;
    flex-direction: column;  /* 将flex布局下文字改为上下排版 */
    padding-left: 0.3rem;
    justify-content: center;
}
.name{
    width: 6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .16rem;
}
.count{
    font-size: .14rem;
}
</style>
