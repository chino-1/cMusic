<template>
  <div id="app" :class="{'isside':showside}">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/maintabbar'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['showside']),
  },
  components:{
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/normalize.css";
.isside{
   animation: bgcolor 2s forwards;
}
@keyframes bgcolor{
    0%{
        background-color: #fff;
    }
    100%{
        background-color: #969696;
    }
}
</style>
