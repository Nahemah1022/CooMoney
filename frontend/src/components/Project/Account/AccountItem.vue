<template>
  <div class="account full">
    <div class="left">
      <!-- <font-awesome-icon icon="bars" size="sm" style="color: gray" /> -->
      <span class="pirority">{{ index + 1 + ". " }}</span>
      <div class="icon">
        <font-awesome-icon
          icon="money-check-alt"
          size="sm"
          style="color: #fff"
        />
      </div>
      <img class="space" src alt />
      <div class="title">
        <input
          v-if="account.isEditing"
          type="text"
          v-model="account.passbookName"
        />
        <div v-else>{{ account.passbookName }}</div>
      </div>
    </div>
    <div class="right">
      <div class="cost">
        <span>$</span>
        <input
          v-if="account.isEditing"
          type="number"
          v-model="account.passbookBalance"
        />
        <div v-else>{{ costFormat(account.passbookBalance) }}</div>
        <!-- {{costFormat(account.remain)}} -->
      </div>
      <font-awesome-icon
        :icon="account.isEditing ? 'check' : 'edit'"
        size="sm"
        style="color: #00c5b8"
        @click="toggle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountItem",
  data() {
    return {};
  },
  props: {
    index: Number,
    account: Object,
  },
  methods: {
    costFormat(cost) {
      let str = cost.toString();
      let rtn =
        str.length % 3 === 0 ? "" : str.substr(0, str.length % 3) + ", ";
      for (var i = str.length % 3; i < str.length; i += 3) {
        rtn += str.substr(i, 3) + ", ";
      }
      rtn = rtn.slice(0, -2);
      return rtn;
    },
    async toggle() {
      if (this.account.isNew) {
        let res = await this.$store.dispatch("addPassbook", {
          data: {
            passbookName: this.account.passbookName,
            passbookBalance: this.account.passbookBalance,
          },
          params: { clubID: this.$store.state.club._id },
        });
        console.log(res);
      }
      this.account.isEditing = !this.account.isEditing;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.account {
  width: 90%;
  margin: 0 auto 2vh auto;
  display: flex;
  box-shadow: none;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  height: 3vh;
  font-size: 16px;
  transition: 0.5s;
  &.full {
    box-shadow: 0 0 10px #dadada;
    border-radius: 10px;
    padding: 8px 10px;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    .title {
      width: 60%;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      input {
        width: 90%;
        line-height: 20px;
        font-size: 16px;
      }
    }
    img {
      width: 5vw;
    }
    .pirority {
      margin: 0 2vw;
      font-size: 24px;
    }
    .icon {
      width: 3vh;
      height: 3vh;
      background-color: #00b900;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: 0.3s;
    }
  }
  .right {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cost {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      input {
        width: 70%;
        line-height: 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
