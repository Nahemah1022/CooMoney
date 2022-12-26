<template>
  <div class="main">
    <div class="block">
      <p class="title">{{ projectName }}</p>
      <div class="money-block">
        <div class="first">
          <div class="money">
            <p class="text">Remaining budget</p>
            <div>
              <span>$</span>
              {{ costFormat(this.projectBudget) }}
            </div>
          </div>
          <img
            :src="require(`@/assets/image/Project/Theme_${projectTheme}.svg`)"
            alt
          />
        </div>
        <div class="second">
          <div class="money">
            <p class="text">Monthly income</p>
            <span>$</span>
            {{ costFormat(this.projectTotalIncome) }}
          </div>
          <div class="money">
            <p class="text">Monthly expenses</p>
            <span>$</span>
            {{ costFormat(this.projectTotalExpanse) }}
          </div>
        </div>
      </div>
      <hr />
      <div class="account_cont">
        <Account
          :class="{ accounts: true, fullAccount: fullAccount }"
          :full="fullAccount"
          :projectId="projectId"
          @toggleAccount="fullAccount = !fullAccount"
        ></Account>
        <!-- <div class="account">
          <div class="left">
            <div class="icon">
              <font-awesome-icon
                :icon="accounts[0].iconName"
                :size="fullAccount ? '2x' : 'sm'"
                style="color: #fff"
              />
            </div>
            <img class="space" src alt />
            <div class="title">{{accounts[0].name}}</div>
          </div>
          <div class="cost">
            <span>$</span>
            {{costFormat(accounts[0].remain)}}
          </div>
        </div>-->
      </div>
      <div class="revenue_cont">
        <Revenue
          :class="{ revenue: true, full: fullRevenue }"
          :projectId="projectId"
          :full="fullRevenue"
          @full="toggleRevenue"
          :ref="projectId"
        ></Revenue>
      </div>
      <button :class="{ add: true, fullPlus: fullRevenue }" @click="add">
        <img src="@/assets/image/Project/add.svg" />
      </button>
      <CreateBill
        :class="{ create: true, show: isAdding }"
        :projectId="projectId"
        @collapse="isAdding = false"
        @newRevenue="newRevenue"
      ></CreateBill>
    </div>
  </div>
</template>

<script>
import Revenue from "@/components/Project/Revenue/Revenue.vue";
import Account from "@/components/Project/Account/Account.vue";
import CreateBill from "@/components/Project/CreateBill/CreateBill.vue";

export default {
  name: "ProjectViewItem",
  components: {
    Revenue,
    Account,
    CreateBill,
  },
  data() {
    return {
      isAdding: false,
      fullRevenue: false,
      fullAccount: false,
    };
  },
  props: {
    projectName: String,
    projectId: String,
    projectTheme: String,
    projectTotalExpanse: Number,
    projectBudget: Number,
    projectTotalIncome: Number,
  },
  methods: {
    add() {
      this.isAdding = !this.isAdding;
      this.fullRevenue = false;
    },
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
    toggleRevenue() {
      this.fullRevenue = !this.fullRevenue;
    },
    async newRevenue(obj) {
      this.$refs[this.projectId].pushBill(obj);
    },
  },
  async beforeMount() {
    // TODO: read expanse, income, budget, accoints from db
    // TODO: read last three's bills with title, cost, categoty, status, date from db
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$transition: 0.5s;
* {
  background-color: transparent;
}
.main {
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  .block {
    height: 80vh;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    border: #fff 1px solid;
    border-radius: 30px;
    box-shadow: 0 0 12px #c8c8c8;
    color: #8d8d8d;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      margin: 5vw auto;
      font-size: 26px;
      width: 80%;
      height: 10vw;
      color: #00c5b8;
    }
    .money-block {
      width: 85%;
      height: 25%;
      margin: 0 auto;
      .first {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 15vh;
        @media (max-height: 650px) {
          height: 100%;
        }
        .money {
          width: 70%;
          height: 80%;
          font-size: calc(4vw + 3vh);
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            font-size: 24px;
            text-align: left;
          }
        }
        img {
          height: 80%;
        }
      }
      .second {
        display: flex;
        @media (max-height: 650px) {
          display: none;
        }
        justify-content: space-between;
        .momny {
          width: 45%;
        }
      }
    }
    hr {
      @media (max-height: 650px) {
        display: none;
      }
      width: 100%;
      margin: 2vh auto;
      border: 0px dashed #00c5b8;
    }
    .account_cont {
      position: relative;
      height: 15%;
      display: flex;
      align-items: center;
      margin: 0;
      .accounts {
        width: 90vw;
        height: 100%;
        position: absolute;
        top: 0vh;
        left: 0;
        transition: 0.5s;
        &.fullAccount {
          z-index: 2000;
          width: 110vw;
          left: -10vw;
          height: 90vh;
        }
      }
    }
    .revenue_cont {
      position: relative;
      height: 50%;
      .revenue {
        width: 90vw;
        height: 100%;
        position: absolute;
        top: 0vh;
        left: 0;
        transition: $transition;
        &.full {
          width: 110vw;
          top: -40vh;
          left: -10vw;
          height: 100vh;
        }
      }
    }
    .add {
      position: absolute;
      bottom: 3vh;
      right: 7vw;
      width: 40px;
      height: 40px;
      border: 0;
      background-color: #00c5b8;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.4s;
      &.fullPlus {
        bottom: 2vh;
        right: 1vw;
      }
    }
    .create {
      position: absolute;
      width: 100%;
      height: 90%;
      left: 0;
      bottom: -220vw;
      transition: $transition;
      &.show {
        bottom: 0vw;
      }
      @media (max-height: 500px) {
        &.show {
          bottom: -5vw;
        }
      }
    }
  }
}
</style>
