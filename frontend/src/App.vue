<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import '@/assets/css/global.scss';
export default {
  name: 'App',
}
</script>

<style>
#app {
  position: relative;
  margin: 0 auto;
  background: #fff;
}
</style>
