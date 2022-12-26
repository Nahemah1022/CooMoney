<template>
  <div class="main" @click="$emit('select', user)">
    <div class="left">
      <div class="idx">{{ idx }}</div>
      <img
        :src="
          user.userPhoto
            ? user.userPhoto
            : require('@/assets/image/Home/avatar_empty.svg')
        "
      />
    </div>
    <div class="center">
      <div class="username">{{ user.username }}</div>
      <div class="email">{{ user.email }}</div>
    </div>
    <div class="right">
      <div v-if="isJudge" class="auth">
        <div @click="$emit('judge', true, user.applicationId)">同意</div>
        <div @click="$emit('judge', false, user.applicationId)">拒絕</div>
      </div>
      <!-- <div class="date">{{ user.date }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberItem",
  props: {
    user: [Object, String],
    idx: Number,
    isJudge: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  height: 60px;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  .left {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .idx {
      width: 15px;
      text-align: right;
    }
    img {
      width: 40px;
      height: 40px;
      margin: 0 10px;
    }
  }
  .center {
    width: 56%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .username {
      font-weight: 700;
    }
    .email {
      color: #c4c4c4;
      font-size: 12px;
    }
  }
  .right {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    .auth {
      width: 180%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        width: 35%;
        text-align: center;
        color: #fff;
        margin: 5px 0;
        padding: 2px 3px;
        border-radius: 4px;
        font-size: 12px;
        &:nth-child(1) {
          background-color: #57f2cd;
        }
        &:nth-child(2) {
          background-color: #f25757;
        }
      }
    }
    .date {
      color: #fe7b44;
      font-size: 14px;
    }
  }
}
</style>
