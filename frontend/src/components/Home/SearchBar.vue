<template>
  <div class="main">
    <div class="bar">
      <font-awesome-icon
        icon="bars"
        size="lg"
        style="color: #9e9e9e"
        @click="$emit('toggleList')"
      ></font-awesome-icon>
      <input
        type="text"
        placeholder="尋找在CooMoney中的社群"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @input="searchClub"
        v-model="clubName"
      />
      <img v-if="photoURL !== ''" :src="photoURL" />
      <img v-else :src="require('@/assets/image/Home/avatar_empty.svg')" />
    </div>
    <div :class="{ block: true, focus: isFocus }">
      <div v-if="matchResult.length === 0" class="result">
        ...沒有符合條件的社群
      </div>
      <div v-else class="result">
        <div
          class="item"
          v-for="(club, index) in matchResult"
          :key="index"
          @click="apply(club.id, club.clubName)"
        >
          <img :src="club.clubImage" alt="" />
          <div class="cont">
            <div class="title">{{ club.clubName }}</div>
            <div class="content">{{ club.clubIntro }}</div>
          </div>
        </div>
      </div>
      <div class="new" @click="$emit('newClub')">
        <img class="add" :src="require('@/assets/image/Home/add.png')" alt />
        <div class="cont">
          <div class="title">在CooMoney中建立你的社群</div>
          <div class="content">tap to create your group in 10 second</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isFocus: false,
      clubName: "",
      matchResult: [],
      photoURL: "",
    };
  },
  beforeMount() {
    this.photoURL = localStorage.getItem("userPhoto");
  },
  methods: {
    async searchClub() {
      this.matchResult = [];
      if (this.clubName !== "") {
        let response = await this.$store.dispatch("searchClub", {
          clubName: this.clubName,
        });
        this.matchResult = response.data.data;
        console.log(this.matchResult);
      }
    },
    async apply(clubID, clubName) {
      if (confirm(`確定要申請加入「${clubName}」社群嗎?`)) {
        let d = new Date();
        let day_f =
          new Date(d).getFullYear() +
          "-" +
          ("0" + (new Date(d).getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + new Date(d).getDate()).slice(-2);
        await this.$store.dispatch("joinApplication", {
          data: { date: day_f, reason: "none" },
          params: { clubID: clubID },
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
  .bar {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #9e9e9e;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 10px;
    input {
      width: 82%;
      line-height: 36px;
      padding: 0 14px;
      font-size: 20px;
      box-sizing: border-box;
      border: 0;
      &::placeholder {
        color: #aeacac;
      }
    }
    img {
      width: 8%;
      border-radius: 50%;
    }
  }
  .block {
    width: 100%;
    position: relative;
    min-height: 0px;
    max-height: 0px;
    overflow: hidden;
    border: 1px #00c5b8 solid;
    background-color: #fff;
    transform: translateY(-16px);
    border-top: 0;
    z-index: 1;
    border-radius: 0 0 16px 16px;
    transition: 0.3s;
    padding: 0;
    &.focus {
      min-height: 100px;
      max-height: 1000px;
      padding: 20px 0 6px 0;
    }
    .result {
      width: 90%;
      margin: 10px auto;
      color: #aaaaaa;
      .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 60px;
        img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          border-radius: 50%;
          box-shadow: 0 0 12px #cacaca;
        }
        .cont {
          width: 80%;
          height: 80%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .title {
            color: #676767;
            font-weight: 700;
            font-size: 18px;
          }
          .content {
            font-size: 12px;
            color: #8d8d8d;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
    .new {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 60px;
      .add {
        width: 24%;
      }
      .cont {
        width: 70%;
        height: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .title {
          color: #676767;
          font-weight: 700;
          font-size: 18px;
        }
        .content {
          font-size: 12px;
          color: #8d8d8d;
        }
      }
    }
  }
}
</style>
