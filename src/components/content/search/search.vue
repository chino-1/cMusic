<template>
  <div>
      <nav-bar :barwidth="40">
        <div slot="left" @click="back"><i class="el-icon-back"></i></div>
            <div slot="center" class="search-input">
                <input type="text" :placeholder="inputValue" v-model="inputContent" @keyup.enter="onsubmit">
            </div>
        <div slot="right"><i class="el-icon-user"></i></div>
      </nav-bar>

      <hot-search v-show="!showsearch" @hotsearchclick="gethotsearchword"></hot-search>
      <search-songs v-show="showsearch" :searchsongs="searchsongs"></search-songs>
  </div>
</template>
<script>
import NavBar from '../../common/navbar/NavBar'
import HotSearch from './hotsearch'
import SearchSongs from './searchsongs'

import {getSearchDefault,getSearch} from 'network/index'
import {checkSpecialKey,checkinput} from 'components/common/filters/checkspecialkey' //引入判断是否存在特殊字符的函数
export default {
   name:'Search',
   components:{
       NavBar,
       HotSearch,
       SearchSongs
   },
   data() {
     return {
       inputValue:'',
       inputContent:'',
       showsearch:false,
       limitValue:15,
       searchsongs:[]
     }
   },
   methods: {
     back(){
       if(this.showsearch){
         this.showsearch = false
       }else{
         this.$router.back()
       }
     },
     onsubmit(){
       if(checkinput(this.inputContent)){
         getSearch(this.inputContent,this.limitValue).then(res=>{
            // console.log(res)
            this.searchsongs = res.result.songs
            this.showsearch = true
         })
       }else{
         alert('禁止输入特殊字符或者使用跨站脚本攻击')
       }
     },
     gethotsearchword(searchword){
       getSearch(searchword,this.limitValue).then(res=>{
          this.inputValue = searchword
          this.searchsongs = res.result.songs
          this.showsearch = true
       })
     }
   },
   created() {
     getSearchDefault().then(res=>{
       this.inputValue = res.data.showKeyword
     })
   },
}
</script>
<style scoped>
.search-input input{
  width: 100%;
  border-top: none; 
  border-right: none; 
  border-left: none; 
  border-bottom:1px solid black;
}
.search-input input:focus{
  outline: none;
}
</style>
