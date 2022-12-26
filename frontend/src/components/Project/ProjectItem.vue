<template>
  <div class="main">
    <div :class="{mask: true, edit: isEditing}">
      <img class="edit" src="@/assets/image/Project/edit.svg" @click="$emit('edit', project)" />
      <img
        class="cross"
        src="@/assets/image/Project/cross.svg"
        @click="$emit('delete', project.id, project.projectName, project)"
      />
    </div>
    <img
      :src="require(`@/assets/image/Project/Theme_${project.projectTheme}.svg`)"
      @click="$emit('enter', project)"
    />
    <p :class="{text: true, large: this.large}">{{project.projectName}}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  data() {
    return {};
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    isEditing: Boolean,
    large: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "@/assets/css/global.scss";
.main {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36%;
  margin: 20px;
  box-shadow: 5px 5px 10px #c8c8c8;
  background-color: transparent;
  border-radius: 20px;
  .text {
    position: absolute;
    width: 70%;
    top: 12%;
    z-index: 2;
    background-color: transparent;
    text-align: center;
    font-weight: 600;
    &.large {
      font-size: x-large;
    }
  }
  .mask {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.4s;
    background-color: rgba(255, 255, 255, 0.54);
    border: 0;
    opacity: 0;
    &.edit {
      z-index: 1;
      opacity: 1;
    }
    .edit {
      background-color: transparent;
      width: 36%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .cross {
      background-color: transparent;
      width: 16%;
      position: absolute;
      top: 0%;
      left: 100%;
      transform: translate(-70%, -30%);
    }
  }
  img {
    width: 100%;
    background-color: transparent;
  }
}
</style>
