import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast'

import * as filters from 'components/common/filters/index'  //全局过滤器
Object.keys(filters).forEach(key=>{
	Vue.filter(key,filters[key])
})

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

import 'vue2-animate/dist/vue2-animate.min.css'
Vue.use(toast)
Vue.prototype.$bus = new Vue() //总线
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
