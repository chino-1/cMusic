export default {
    //mutations目的就是修改state中的状态，所以其中的方法尽可能完成的事件比较单一，好追踪状态来维护
    changeSide(state){
        state.isShowSide = !state.isShowSide
    },
    changeLogin(state){
        state.ifLogin = !state.ifLogin
    },
    changeUid(state,user){
        state.uid = user.id 
    },
    changePlayer(state,playlist){
        state.player = playlist
    },
    changeSongId(state,id){  //在player中，尝试将comments直接放入vuex中，但没做到换首歌刷新，只能退一步保存歌曲id，在comments
        state.songId = id   // 组件中请求数据
    }
}