import {request} from './request'
export function getSwiper(type){
    return request({
        url:'/banner',
        params:{ type }
    })
}
export function getLogin(phone,password){ //用户登录，phonelogin
    return request({
        url:'/login/cellphone',
        params:{
            phone,
            password
        }
    })
}
export function getcaptcha(phone){ //发送验证码
    return request({
        url:'/captcha/sent',
        params:{phone}
    })
}
export function verifycaptcha(phone,captcha){ //验证验证码
    return request({
        url:'/captcha/verify',
        params:{phone,captcha}
    })
}
export function registeruser(phone,password,captcha,nickname){ //验证手机成功后用户注册
    return request({
        url:'/register/cellphone',
        params:{
            phone,
            password,
            captcha,
            nickname
        }
    })
}
export function getUserDetail(uid){  //获取用户信息，用于侧边栏头像和昵称
    return request({
        url:'/user/detail',
        params:{ uid }
    })
}
export function getSongSheet(uid){    //歌单
    return request({
        url:'/user/playlist',
        params:{ uid }
    })
}
export function getSheetDetail(id){   //歌单详情
    return request({
        url:'/playlist/detail',
        params:{ id }
    })
}
export function getlistComment(id,limit){  //歌单评论
    return request({
        url:'/comment/playlist',
        params:{id,limit}
    })
}
export function playlistsubscribe(t,id){ //收藏歌单 t取1为收藏2为取消，id为歌单id
    return request({
        url:'/playlist/subscribe',
        params:{t,id}
    })
}
export function getSongUrl(id){  //音乐url
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
export function sentComment(t,type,id,content){ //发送歌曲评论，t参数1为发送2为回复若回复需加参数commentId，此处只实现发送
    return request({                                 //type对应评论发送类型，0为歌曲1为MV2为歌单...此处只实现歌曲、歌单
        url:'/comment',                              //id为歌曲id，由于歌曲、歌单等id不同，所以实现困难
        params:{t,type,id,content}                   //content为发送内容
    })
}
export function getSongDetail(ids){ //获取音乐详情
    return request({
        url:'/song/detail',
        params:{ ids }
    })
}
export function getRecommendPlaylist(limit){ //推荐歌单(非登录后推荐，接口同名)
    return request({
        url:'/personalized',
        params:{ limit }
    })
}
export function getRecommendSong(){ // 推荐新音乐
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
export function getAlbum(){  //获取新专辑
    return request({
        url:'/album/newest'
    })
}
