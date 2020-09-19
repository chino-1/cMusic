<template>
  <div v-if="playlistitem.coverImgUrl">
     <div class="background">
         <nav-bar :barwidth="60">
            <div slot="left" @click="back"><i class="el-icon-back">歌单</i></div>
            <div slot="right">
                <i class="el-icon-search"></i>
                <!-- <i class="el-icon-more"></i> -->
            </div>
         </nav-bar>

       <div class="songsheet">
         <div class="image">
             <img :src="playlistitem.coverImgUrl" alt="">
         </div>
         <div class="text">
             <span class="name">{{playlistitem.name}}</span>
             <div class="userInfo">
                 <img :src="playlistitem.creator.avatarUrl" alt="">
                 <span>{{playlistitem.creator.nickname}}</span>
             </div>
         </div>
       </div>

       <div class="iconbar">
           <div class="icon">
               <i class="el-icon-chat-line-round"></i>
               <span>{{playlistitem.commentCount}}</span>
           </div>
           <div class="icon">
               <i class="el-icon-share"></i>
               <span>分享</span>
           </div>
           <div class="icon">
               <i class="el-icon-download"></i>
               <span>下载</span>
           </div>
           <div class="icon">
               <i class="el-icon-finished"></i>
               <span>多选</span>
           </div>
       </div>

       <div class="list">
           <div class="play-all">
                <i class="el-icon-video-play"></i>
                <div>
                    <span class="play-all-text1">播放全部</span>
                    <span class="play-all-text2">(共{{playlistitem.trackCount}}首)</span>
                </div>
           </div>
           <div class="list-song">
              <div v-for="(item,index) in playlistsong" :key="index" class="list-song-item" @click="playsong(index)">
               <div class="item-num">{{index+1}}</div>
                <div class="item-detail">
                  <div class="song-name">{{item.name}}</div>
                  <div class="song-singer">
                    {{item.ar[0].name}}
                    <template v-if="item.ar.length>1">/ {{item.ar[1].name}}</template>
                    - {{item.al.name}}
                  </div>
                </div>
              </div>
           </div>
       </div>
     </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getSheetDetail,getSongDetail} from 'network/index'
export default {
   name:'PlayList',
   components:{
       NavBar
   },data() {
       return {
           playlistitem:[],
           playlistsong:[],
           songsid:[],
           current:'',
       }
   },created() {
       this.getDetailSong()
   },
   deactivated() {
       this.playlistitem = [];
       this.playlistsong = [];
   },
   activated() {
       this.getDetailSong()
   },
   methods: {
       back(){
           this.$router.back()
       },getIds(trackIds) {
            const ids = [];
            if (Array.isArray(trackIds)) {
                for (var i = 0, len = trackIds.length; i < len; i++) {
                  ids.push(trackIds[i].id);
                }
                return ids.join(',');
            }
        },getDetailSong(){
            getSheetDetail(this.$route.params.id).then(res=>{
                // console.log(res)
                this.playlistitem = res.playlist
                getSongDetail(this.getIds(res.playlist.trackIds)).then(res=>{
                    // console.log(res)  只取歌单的一百首歌
                    this.playlistsong = res.songs.slice(0,100)
                    this.songsid = this.getIds(res.songs.slice(0,100))
                })
            })
        },playsong(index){
            this.current = index
            this.$store.commit('changePlayer',this.playlistsong[index])
            this.$router.push('/player/'+this.songid)
        }
   },
   computed: {
       songid(){
           const id = this.songsid.split(',') //getIds方法return了一个字符串，将其转为数组
           return id[this.current]
       }
   },
}
</script>
<style scoped>
@import "../../../assets/css/playlist.css";
</style>
