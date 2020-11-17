import {request} from './request'
export function getSwiper(type){
    return request({
        url:'/banner',
        params:{ type }
    })
}
export function getLogin(phone,password){
    return request({
        url:'/login/cellphone',
        params:{
            phone,
            password
        }
    })
}
export function getUserDetail(uid){  //获取用户信息，用于侧边栏头像和昵称
    return request({
        url:'/user/detail',
        params:{ uid }
    })
}
export function getSongSheet(uid){
    return request({
        url:'/user/playlist',
        params:{ uid }
    })
}
export function getSheetDetail(id){
    return request({
        url:'/playlist/detail',
        params:{ id }
    })
}
export function getSongUrl(id){
    return request({
        url:'/song/url',
        params:{ id }
    })
}
export function getMusicComment(id,limit){  //获取歌曲评论
    return request({
        url:'/comment/music',
        params:{
            id,
            limit
        }
    })
}
export function getSongDetail(ids){ //获取音乐详情
    return request({
        url:'/song/detail',
        params:{ ids }
    })
}
export function getRecommendPlaylist(limit){ //推荐歌单
    return request({
        url:'/personalized',
        params:{ limit }
    })
}
export function getRecommendSong(){ // 推荐新歌曲
    return request({
        url:'/personalized/newsong'
    })
}
export function getSearchDefault(){ //默认搜索热词
    return request({
        url:'/search/default'
    })
}
export function getSearchHotDeatil(){ //热搜榜
    return request({
        url:'/search/hot/detail'
    })
}
export function getSearch(keywords,limit){ //搜索
    return request({
        url:'/search',
        params:{
            keywords,
            limit
        }
    })
}
export function getTopPlaylist(){   // 歌单广场三个轮播图来源
    return request({
        url:'/top/playlist?limit=3'
    })
}
export function getHighPlaylist(limit){  // 歌单广场其他歌单
    return request({
        url:'/top/playlist/highquality',
        params:{limit}
    })
}
export function getRecommendMv(){
    return request({
        url:'/personalized/mv'
    })
}
export function getMvUrl(id){
    return request({
        url:'/mv/url',
        params:{id}
    })
}
export function getLyric(id){  //传入歌曲id，获得歌词
    return request({
        url:'/lyric',
        params:{id}
    })
}