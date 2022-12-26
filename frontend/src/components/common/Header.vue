<template>
  <div class="main" :style="{ backgroundColor: bg === undefined ? '#fff' : 'bg' }">
    <img class="back" src="@/assets/image/Header/arrow.svg" @click="$emit('back')" />
    <div class="title">{{ title }}</div>
    <img v-if="right" :src="right" @click="$emit('rightClick')" />
    <img v-else src />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true
    },
    right: {},
    bg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "@/assets/css/global.scss";

.main {
  overflow-x: hidden;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 8vh;
  .title {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
    color: #00c5b8;
    font-size: 24px;
  }
  img {
    background-color: transparent;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    margin: 5vw 8vw;
    &.back {
      width: 6%;
    }
  }
}
</style>
