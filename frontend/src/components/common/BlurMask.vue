<template>
  <div :class="{ blurMask: true, show: show }" />
</template>

<script>
export default {
  name: "BlurMask",
  props: {
    show: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.blurMask {
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 0;
  opacity: 0;
  transition: 0.3s;
  &.show {
    height: 100%;
    opacity: 0.5;
    z-index: 8;
  }
}
</style>
