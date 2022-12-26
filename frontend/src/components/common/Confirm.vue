<template>
  <div class="confirm">
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  props: {
    title: String,
    content: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.confirm {
  width: 100vw;
  height: 100vh;
  left: -5vw;
  top: -10vh;
  margin: 0 auto;
  position: absolute;
  //border: 3px solid #00c5b8;
  opacity: 0.3;
  //  background-color: rgba(122, 122, 122, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  .block {
    //  background-color: rgba($color: #000, $alpha: 1);
    width: 80vw;
    height: 30vh;
  }
}
</style>
