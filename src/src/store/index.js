import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const state = {
   isShowSide:false,  //是否展示侧边栏的判断
   ifLogin:false,  //用户登录状态
   tabIndex:1,  //顶部栏索引
   uid:'',   //用户id
   player:[],  //某首歌曲的数据
   songId:'',   //歌曲id
   playListId:'', //歌单id，用于歌单评论数据请求
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store