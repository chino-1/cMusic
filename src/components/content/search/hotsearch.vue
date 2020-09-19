<template>
  <div>
    <div class="text1">热搜榜</div>
       <div>
         <div v-for="(item,index) in searchhotdata" :key="index" class="search-list" @click="hotclick(index)">
            <div class="item-num">{{index+1}}</div>
            <div class="item-detail">
              <div class="name">
                <div class="search-name">{{item.searchWord}}</div>
                <div class="search-pic"><img :src="item.iconUrl" alt=""></div>
              </div>
              <div class="search-content">{{item.content}}</div>
            </div>
            <div class="score">{{item.score}}</div>
        </div>
    </div>
  </div>
</template>
<script>
import {getSearchHotDeatil} from 'network/index'
export default {
   name:'HotSearch',
   data() {
       return {
           searchhotdata:[]
       }
   },
   methods: {
     hotclick(index){
        this.$emit('hotsearchclick',this.searchhotdata[index].searchWord)
     }
   },
   created() {
       getSearchHotDeatil().then(res=>{
      //  console.log(res)
       this.searchhotdata = res.data
     })
   },
}
</script>
<style scoped>
.text1{
  font-size: 10px;
  font-weight: 700;
  padding: 20px 5px 10px 5px;
}
.search-list{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: .05rem 0;
}
.item-num{
  flex-shrink: 0;
  font-size: 12px;
  color: gray;
  height: 40px;
  width: 30px;
  text-align: center;
  line-height: 40px;
}
.item-detail{
  flex: 1 0 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  line-height: 16px;
}
.name{
  display: flex;
}
.search-pic{
  padding-left: 5px;
  width: 12px;
  height: 10px;
}
.search-pic img{
  height: 100%;
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
.score{
  font-size: 3px;
  color: gray;
  padding-right: 10px;
  text-align: center;
}
</style>
