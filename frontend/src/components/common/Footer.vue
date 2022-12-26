<template>
  <div class="main">
    <font-awesome-icon
      icon="house-user"
      :style="{color: active==3 ? '#00c5b8' : '#dbdbdb'}"
      @click="$router.push('/Club')"
    ></font-awesome-icon>
    <font-awesome-icon
      icon="wallet"
      :style="{color: active==2 ? '#00c5b8' : '#dbdbdb'}"
      @click="$router.push('/Project')"
    ></font-awesome-icon>
    <font-awesome-icon
      icon="chart-pie"
      :style="{color: active==1 ? '#00c5b8' : '#dbdbdb'}"
      @click="$router.push('/Analysis')"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    active: {
      type: Number,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  overflow-x: hidden;
  width: 100%;
  height: 7vh;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -1px 10px #c8c8c8;
  svg {
    width: 30px;
    height: 30px;
  }
}
</style>
