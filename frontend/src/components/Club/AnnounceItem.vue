<template>
  <div class="main_b" v-if="!announce.deleted">
    <div class="header">
      <div class="left">
        <img :src="establisher.userPhoto" alt />
        <span class="name">{{ establisher.username }}</span>
      </div>
      <!-- <div class="title">{{ announce.title }}</div> -->
      <div class="date">
        <font-awesome-icon icon="trash-alt" style="color: #00c5b8" @click="deleteAnnounce"></font-awesome-icon>
      </div>
    </div>
    <div class="content">{{ announce.info }}</div>
  </div>
</template>

<script>
export default {
  name: "AnnounceItem",
  data() {
    return {
      establisher: "",
    };
  },
  props: {
    announce: Object,
  },
  methods: {
    async deleteAnnounce() {
      await this.$store.dispatch("deleteAnnounce", {
        clubID: this.$store.state.club._id,
        announceID: this.announce._id,
      });
      this.$emit("deleteAnnounce", this.announce._id);
    },
  },
  beforeMount: async function () {
    let userID = [];
    userID.push(this.announce.establisher);
    userID = JSON.stringify(userID);
    let response = await this.$store.dispatch("getUserByID", { userID });
    this.establisher = response.data.data[0];
  },
  updated: async function () {
    let userID = [];
    userID.push(this.announce.establisher);
    userID = JSON.stringify(userID);
    let response = await this.$store.dispatch("getUserByID", { userID });
    this.establisher = response.data.data[0];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main_b {
  border: 0;
  width: 84%;
  min-height: 60px;
  margin: 40px auto;
  padding: 2px 0;
  box-sizing: border-box;
  border-radius: 16px;
  overflow-y: visible;
  box-shadow: 0 0 12px #c4c4c4;
  .header {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      position: relative;
      img {
        position: absolute;
        border-radius: 20%;
        width: 60px;
        top: -30px;
        left: 5px;
      }
      .name {
        margin-left: 72px;
        font-weight: bold;
        font-size: 18px;
      }
    }
    .title {
      margin-left: 20px;
      color: #00c5b8;
      font-weight: 700;
      font-size: 20px;
    }
  }
  .content {
    width: 90%;
    margin: 10px auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: pre-line;
    font-size: 14px;
  }
}
</style>
