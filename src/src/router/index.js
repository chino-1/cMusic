import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import Home from '../views/home/home.vue'
// import Profile from '../views/profile/profile'
// import Login from '../components/content/login/login.vue'
// import PlayList from '../components/content/playlist/playlist'
// import Player from '../components/content/player/player'
// import Search from '../components/content/search/search'
// import PlayListSquare from '../components/content/playlistsquare/playlistsquare'
// import Viedo from '../views/video/video'
// import Comment from '../components/content/comment/comment'
// const routes = [
//   {path:'/home',component:Home},
//   {path:'/profile',component:Profile},
//   {path:'/login',component:Login},
//   {path:'/playlist/:id',component:PlayList},
//   {path:'/player/:id',component:Player},
//   {path:'/search',component:Search},
//   {path:'/playlistsquare',component:PlayListSquare},
//   {path:'/viedo',component:Viedo},
//   {path:'/comment',component:Comment},
//   {path:'*',redirect:'/home'}
// ]

import PlayList from '../components/content/playlist/playlist'  
import Viedo from '../views/video/video'    //歌单页面、视频页面不懒加载

const routes = [
  {
    path:'/playlist/:id',
    component:PlayList
  },
  {
    path:'/viedo',
    component:Viedo
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/home.vue')
  },
  {
    path:'/profile',
    name:'/Profile',
    component:() => import('views/profile/profile.vue')
  },
  {
    path:'/yuncun',
    name:'/Yuncun',
    component:() => import('views/yuncun/topic.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('components/content/login/login.vue')
  },
  {
    path: '/phonelogin',
    name: 'PhoneLogin',
    component: () => import('components/content/login/phonelogin.vue')
  },
  {
    path: '/register',
    name: 'Regester',
    component: () => import('components/content/login/register.vue')
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: () => import('components/content/player/player.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('components/content/search/search.vue')
  },
  {
    path: '/playlistsquare',
    name: 'Playlistsquare',
    component: () => import('components/content/playlistsquare/playlistsquare.vue')
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('components/content/comment/comment.vue')
  },
  {
    path:'/listcomment',
    name:'ListComment',
    component: () => import('components/content/playlist/playlistcomment.vue')
  }
]

const router = new Router({
  routes,
  mode:'history'
})
export default router
