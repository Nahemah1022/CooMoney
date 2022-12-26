<template>
  <div
    :class="{ main: true, list: list }"
    :style="{
      backgroundImage:
        'url(' +
        club.clubImage +
        ')',
    }"
    @click="enter"
  >
    <div class="content">
      <!-- <img
        class="avatar"
        :src="require('@/assets/image/Home/avatar_' + (club.auth===0 ? 'member' : 'owner') + '.svg')"
      />-->
      <!-- <img
        class="avatar"
        :src="require('@/assets/image/Home/clubs/' + club.name.split(' ').join('_') + 'LOGO.png')"
      />-->
      <p class="title">{{ club.clubName }}</p>
      <div class="right">
        <p class="date">{{ club.createdAt.substring(0, 10).replace('-', '/').replace('-', '/') }}</p>
        <p class="member">{{ club.clubMembers.length + "位成員" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClubPreview",
  props: {
    club: Object,
    list: Boolean,
    disable: Boolean
  },
  methods: {
    enter() {
      if (!this.disable) {
        this.$store.commit("setSelectedClub", this.club);
        this.$router.push("/Club");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  position: relative;
  width: 92%;
  height: 22vh;
  margin: 2vh auto;
  border-radius: 8px;
  box-shadow: 0 0 12px #797878;
  background-size: cover;
  background-position: bottom;
  opacity: 0.7;
  transition: 0.3s;
  &.list {
    height: 10vh;
    background-position: center;
  }
  .content {
    width: 100%;
    height: 42px;
    // background-color: #e8f0fe;
    background-color: transparent;
    border-radius: 0 0 8px 8px;
    box-sizing: border-box;
    position: absolute;
    padding-left: 10px;
    bottom: 0;
    display: flex;
    align-items: center;
    .title {
      width: 60%;
      font-size: 28px;
      // color: rgb(56, 56, 56);
      color: #fff;
      // -webkit-text-stroke: 1px black;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
      font-weight: bolder;
    }
    .right {
      width: 36%;
      display: flex;
      color: #fff;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      // font-weight: 600;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
      .member {
        font-size: 12px;
      }
    }
  }
  .avatar {
    position: absolute;
    width: 40px;
    left: 10px;
    bottom: 5px;
    border-radius: 50%;
    box-shadow: 0 0 12px #a1a1a1;
  }
}
</style>
