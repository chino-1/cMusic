<template>
  <div id="profile">
      <div @click="itemclick">点击进入歌单广场</div>
  </div>
</template>
<script>
export default {
   name:'Profile',
   methods: {
     itemclick(){
       this.$router.push('/playlistsquare')
     }
   },
}
</script>
<style scoped>
#profile{
  height: 100vh;
}
</style>
