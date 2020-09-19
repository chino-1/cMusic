<template>
  <div>
      <div class="comment-total">
          <i class="el-icon-back" @click="back"></i>
          <span>评论({{commentTotal}})</span>
      </div>
      <div class="comment-top">
         <div class="top-img"><img :src="songInfo.al.picUrl" alt=""></div>
         <div class="top-text">
           <div class="text-name">{{songInfo.name}}</div>
           <span>{{songInfo.ar[0].name}}</span>
         </div>
         <i class="el-icon-arrow-right"></i>
      </div>
      <div class="backgroundshadow"></div> <!-- 一层分割阴影 -->

      <div class="middle-text">
        <div class="middle-text-left">评论区</div>
        <div class="middle-text-right">
            <div>推荐</div><span>|</span>
            <div>最热</div><span>|</span>
            <div>最新</div>
        </div>
      </div>
      <div v-for="(item,index) in hotComments" :key="index" class="middle-comments"><!-- 五条热评 -->
         <div class="middle-user">
           <div class="user-img"><img :src="item.user.avatarUrl" alt=""></div>
           <div class="user-nickname">
              <span class="nickname">{{item.user.nickname}}</span>
              <span class="time">{{item.time | showDate}}</span>
           </div>
           <div class="likecount">{{item.likedCount}}(点赞数)</div>
         </div>
         <div class="comments-content">{{item.content}}</div>
      </div>

      <div v-for="(item,index1) in comments" :key="index1+'5'" class="middle-comments"><!-- 二十条最新评论 -->
         <div class="middle-user">
           <div class="user-img"><img :src="item.user.avatarUrl" alt=""></div>
           <div class="user-nickname">
              <span class="nickname">{{item.user.nickname}}</span>
              <span class="time">{{item.time | showDate}}</span>
           </div>
           <div class="likecount">{{item.likedCount}}(点赞数)</div>
         </div>
         <div class="comments-content">{{item.content}}</div>
      </div>
  </div>
</template>
<script>
import {getMusicComment} from 'network/index'
export default {
   name:'Comment',
   computed: {
      songInfo(){
        return this.$store.getters.playsong
      },
      songId(){
        return this.$store.getters.songId
      }
   },
   data() {
     return {
        commentTotal:'',
        limit:20,
        comments:[],
        hotComments:[]
     }
   },
   methods: {
     back(){
        this.$router.back()
     },
     getComment(){
         getMusicComment(this.songId,this.limit).then(res=>{
          //  console.log(res)
            this.commentTotal = res.total
            this.hotComments = res.hotComments
            this.comments = res.comments
         })
      },
   },
   created() {
     this.getComment()
   },
   activated() {
     this.getComment()
   },
}
</script>
<style scoped>
@import "../../../assets/css/comment.css";
</style>
