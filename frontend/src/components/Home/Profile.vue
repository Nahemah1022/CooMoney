<template>
  <div class="main">
    <img :src="require('@/assets/image/Home/avatar_empty.svg')" alt />
    <div class="profile">
      <p class="name">{{ name }}</p>
      <a href="https://facebook.com">{{ link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: "Your name",
      link: "facebook profile link",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  color: #707070;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  box-shadow: 0 0 8px #cccccc;
  .profile {
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    .name {
      font-size: 26px;
    }
  }
}
</style>
