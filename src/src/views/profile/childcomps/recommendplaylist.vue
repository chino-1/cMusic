<template>
    <div class="rec-text">
        <div>
            <nav-bar :barwidth="70">
                <div slot="left" class="nav-left">推荐歌单</div>
                <div slot="right" class="nav-right"><i class="el-icon-close"></i></div>
            </nav-bar>
        </div>

        <div v-for="(item,index) in recplaylist" :key="index" @click="itemclick(index)">
            <div class="playlist-item">
                <div class="rec-img"><img :src="item.coverImgUrl" alt="" @load="imgLoad"></div>
                <div class="text">
                    <span>{{item.name}}</span>
                    <span class="text1">本周热门收听</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHighPlaylist} from 'network/index'
export default {
   name:'RecommendPlaylist',
   data() {
       return {
           limit:10,
           recplaylist:[],
           recplaylistlength:0,
           counter:0
       }
   },
   components:{
       NavBar
   },
   methods: {
       itemclick(index){
           this.$router.push('/playlist/'+this.recplaylist[index].id)
       },
       imgLoad(){
           if(++this.counter === this.recplaylistlength){
               this.$emit('rimageLoad')
           }
       }
   },
   created() {
       getHighPlaylist(this.limit).then(res=>{
           this.recplaylist = res.playlists
       })
   },
   watch: {
       recplaylist(){
           this.recplaylistlength = this.recplaylist.length
       }
   },
}
</script>
<style scoped>
.rec-text{
    border-radius: 8px;
    background-color: #fff;
    margin:0 10px;
}
.nav-left{
    font-size: 14px;
    font-weight: 600;
}
.nav-right{
    color: gray;
}

.playlist-item{
    display: flex;
}
.rec-img{
    width: 40px;
    height: 40px;
    padding: 6px;
}
.rec-img img{
    border-radius: 5px;
    height: 100%;
}
.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    line-height: 16px;
}
.text1{
    font-size: 8px;
    color: gray;
}
</style>
