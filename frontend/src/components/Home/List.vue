<template>
  <div :class="{ main_l: true, show: show }" v-click-outside="hide">
    <img src="@/assets/image/LOGO.png" alt="" />
    <div class="header">
      CooMoney -- 團隊記帳工具
    </div>
    <hr />
    <br />
    <div class="cont"><div @click="logout">登出</div></div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "List",
  props: {
    show: Boolean,
  },
  methods: {
    hide() {
      if (this.show) {
        this.$emit("toggleList");
      }
    },
    logout() {
      document.cookie.split(";").forEach(function(c) {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      localStorage.clear();
      this.$router.push("/");
    },
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main_l {
  position: absolute;
  width: 75vw;
  height: 100vh;
  top: 0;
  left: -75vw;
  background-color: #fff;
  z-index: 1000;
  transition: 0.3s;
  &.show {
    left: 0vw;
  }
  img {
    width: 100%;
  }
  .header {
    font-size: 22px;
    text-align: center;
    font-weight: 700;
  }
  .cont {
    display: flex;
    justify-content: center;
    div {
      font-weight: 700;
      color: #fff;
      font-size: 24px;
      background-color: rgb(167, 167, 167);
      border-radius: 20px;
      padding: 2px 15px;
    }
  }
}
</style>
