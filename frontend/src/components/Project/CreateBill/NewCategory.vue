<template>
  <div :class="{main: true, show: show}">
    <div class="check" @click="apply">
      <img class="check" src="@/assets/image/Project/check.svg" alt />
    </div>
    <div class="cross" @click="hide">
      <img class="cross" src="@/assets/image/Project/cross.svg" alt />
    </div>
    <div class="upper">
      <input type="text" placeholder="Category name" v-model="categoryName" />
    </div>
    <div class="block">
      <div
        :class="{icon: true, selected: selectedIndex===index}"
        v-for="(font, index) in FontLibary"
        :key="index"
        @click="selectedIndex=index"
      >
        <font-awesome-icon :icon="font.iconName" size="lg" style="color: #fff" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontLibary } from "@/assets/js/fontawesome.js";

export default {
  name: "NewCategory",
  data() {
    return {
      FontLibary,
      selectedIndex: -1,
      categoryName: ""
    };
  },
  props: {
    show: Boolean
  },
  methods: {
    apply() {
      this.$emit("addCategory", {
        font: FontLibary[this.selectedIndex],
        type: this.categoryName
      });
    },
    hide() {
      this.$emit("hide");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  position: absolute;
  width: 80vw;
  height: 0vw;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  background-color: #fff;
  border: 0;
  transition: 0.3s;
  border-radius: 16px;
  &.show {
    height: 70vw;
    border: 2px solid #00c5b8;
  }
  .check {
    position: absolute;
    z-index: 100;
    top: 2%;
    left: 84%;
  }
  .cross {
    position: absolute;
    z-index: 100;
    top: 2%;
    left: 92%;
  }
  .upper {
    position: fixed;
    width: 100%;
    margin: 10px 0 0 24px;
    input {
      width: 70%;
      line-height: 26px;
      font-size: 20px;
      color: #00c5b8;
      text-align: center;
      border: 0;
      border: 2px solid #c6c6c6;
      border-radius: 16px;
      &::placeholder {
        color: #00c5b8;
      }
    }
  }
  .block {
    width: 90%;
    height: 78%;
    margin: 15% auto 2% auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;
    .icon {
      background-color: #dbdbdb;
      width: 36px;
      height: 36px;
      margin: 5px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &.selected {
        background-color: #00c5b8;
      }
    }
  }
}
</style>
