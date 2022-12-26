<template>
  <div class="submain">
    <!-- <BlurMask :show="judgementShow"></BlurMask> -->
    <div :class="{ block: true, fullBlock: full }">
      <div :class="{ header: true, fullHeader: full }">
        <span>Bills</span>
        <img
          @click="fullRevenue"
          :src="
            require('@/assets/image/Project/Revenue/' +
              (full ? 'down' : 'option') +
              '.svg')
          "
        />
      </div>
      <div :class="{ bills: true, fullBills: full }">
        <div v-if="bills.length !== 0">
          <div v-for="bill in bills" :key="bill._id">
            <p
              class="date"
              v-if="
                showDate(
                  full &&
                    bill.revenueYear +
                      '-' +
                      bill.revenueMonth +
                      '-' +
                      bill.revenueDay
                )
              "
            >
              {{
                bill.revenueYear +
                  "-" +
                  bill.revenueMonth +
                  "-" +
                  bill.revenueDay
              }}
            </p>
            <RevenueItem
              :costTitle="bill.revenueTitle"
              :category="bill.revenueTag"
              :cost="costFormat(bill.revenueCost)"
              :status="bill.revenueStatus.toLowerCase()"
              :description="bill.revenueDescription"
              :fullRevenue="full"
              :revenueID="bill._id"
              :comment="bill.revenueComment"
              @judge="judge"
            ></RevenueItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RevenueItem from "@/components/Project/Revenue/RevenueItem.vue";
//import BlurMask from "@/components/common/BlurMask";

export default {
  name: "",
  data() {
    return {
      dates: {},
      bills: [],
      detailedBills: {},
    };
  },
  components: {
    RevenueItem,
    //BlurMask
  },
  props: {
    projectId: String,
    full: Boolean,
  },
  methods: {
    pushBill(bill) {
      this.bills.push(bill);
      this.bills = this.bills.sort((a, b) => {
        return b.revenueYear - a.revenueYear || b.revenueMonth - a.revenueMonth || b.revenueDay - a.revenueDay;
      });
    },
    fullRevenue() {
      if (!this.full) {
        for (const date in this.dates) {
          this.dates[date] = false;
        }
      }
      this.$emit("full");
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
    async judge(result, inputComment, revenueID, cost) {
      console.log({
        data: {
          revenueStatus: result ? "APPROVED" : "REJECTED",
          revenueComment: inputComment,
          revenueID: revenueID,
        },
        params: {
          clubID: this.$store.state.club._id,
          projectID: this.projectId,
        },
      });
      console.log(cost);
      let res = await this.$store.dispatch("updateRevenue", {
        data: {
          revenueStatus: result ? "APPROVED" : "REJECTED",
          revenueComment: inputComment,
          revenueID: revenueID,
        },
        params: {
          clubID: this.$store.state.club._id,
          projectID: this.projectId,
        },
      });

      let target = this.bills[this.bills.findIndex((b) => b._id === revenueID)];
      target.revenueStatus = res.data.data.revenueStatus;
      target.revenueComment = res.data.data.revenueComment;
    },
    showDate(date) {
      if (!this.dates[date]) {
        this.dates[date] = true;
        return date;
      } else {
        return false;
      }
    },
  },
  async beforeMount() {
    let projectID = this.projectId;
    let response = await this.$store.dispatch("getAllRevenue", { projectID });
    response = response.data.data;
    this.bills = response;
    this.bills = this.bills.sort((a, b) => {
      return b.revenueYear - a.revenueYear || b.revenueMonth - a.revenueMonth || b.revenueDay - a.revenueDay;
    });
    console.log(this.bills);
    for (const bill of this.bills) {
      let date =
        bill.revenueYear + "-" + bill.revenueMonth + "-" + bill.revenueDay;
      if (this.detailedBills[date] == undefined) {
        this.detailedBills[date] = new Array();
        this.dates[date] = false;
      }
      this.detailedBills[date].push(bill);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$transition: 0.5s;
* {
  background-color: transparent;
}
.submain {
  .mask {
    position: absolute;
    background-color: gray;
    width: 100%;
    height: 0;
    opacity: 0;
    transition: 0.3s;
    border-radius: 0 0 8% 8%;
    &.showMask {
      height: 100%;
      opacity: 0.5;
      z-index: 8;
    }
  }
  .block {
    width: 90%;
    height: 90%;
    margin: 3% auto;
    box-sizing: border-box;
    padding: 0 0 2% 0;
    box-shadow: 0 0 12px #e6e6e6;
    background-color: #fff;
    border-radius: 16px;
    transition: $transition;
    overflow: hidden;
    &.fullBlock {
      height: 90vh;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin: 2vh 0 1vh 0;
      padding: 0 4vw;
      font-size: 16px;
      transition: $transition;
      &.fullHeader {
        font-size: 24px;
      }
    }
    .bills {
      height: 83%;
      width: 100%;
      overflow: scroll;
      transition: $transition;
      &.fullBills {
        height: 72vh;
      }
      .date {
        font-size: 14px;
        margin-top: 10px;
        margin-left: 12px;
      }
    }
  }
}
</style>
