<template>  
  <div>  <!-- 此组件直接复制的comment评论，以实现歌单评论 -->
      <div class="comment-total">
          <i class="el-icon-back" @click="back"></i>
          <span>评论({{commentTotal}})</span>
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

      <div class="inputComment">
         <div class="flexitem">
             <input type="text" v-model="inputContent" :placeholder="inputValue">
             <el-button type="text" @click="sent">发送</el-button>
         </div>
      </div>
  </div>
</template>
<script>
import {getlistComment,sentComment} from 'network/index'
export default {
   name:'PlayListComment',
   computed: {
     ifLogin(){
       return this.$store.state.ifLogin
     },
     listId(){
       return this.$store.getters.playlistid
     }
   },
   data() {
     return {
        commentTotal:'',
        limit:20,
        comments:[],
        hotComments:[],
        inputContent:'',
        inputValue:'随乐而起，有感而发',
        t:1,
        type:2,
     }
   },
   methods: {
     back(){
        this.$router.back()
     },
     getComment(){
         getlistComment(this.listId,this.limit).then(res=>{
          //  console.log(res)
            this.commentTotal = res.total
            this.hotComments = res.hotComments
            this.comments = res.comments
         })
      },
      sent(){
        if(this.inputContent=''){
           this.$toast.show('还没写内容哦',2000)
        }
        else if(!this.ifLogin){
           this.$toast.show('您还没有登录哦，登录之后就可以发送评论了!',2000)
        }
        else{
           sentComment(this.t,this,type,this.songId,this.inputContent).then(res=>{
              this.$toast.show('好评种子+1，发送成功！',2000)
           })
        }
      }
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
