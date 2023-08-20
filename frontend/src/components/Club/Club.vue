<template>
  <div class="main_club">
    <Header
      :title="''"
      :right="userPhoto || require('@/assets/image/Home/avatar_empty.svg')"
      :bg="'transparent'"
      @back="$router.go(-1)"
    ></Header>
    <div v-if="isAddingMember" class="addMember">
      <div class="header">
        Add member
        <div class="check" @click="addUser">
          <img class="check" src="@/assets/image/Project/check.svg" alt />
        </div>
        <div class="cross" @click="isAddingMember = false">
          <img class="cross" src="@/assets/image/Project/cross.svg" alt />
        </div>
      </div>
      <div class="input-block">
        <div :class="{ matchBlock: true, focus: focusPartner }">
          <input
            type="text"
            @focus="focusPartner = true"
            @blur="focusPartner = false"
            @input="searchUser"
            v-model="addUsername"
            placeholder="Your Partners"
          />
          <MemberItem
            v-for="(user, index) in this.matchUsers"
            :key="index"
            :idx="index + 1"
            :user="user"
            @select="selectUser"
          ></MemberItem>
        </div>
      </div>
    </div>

    <div v-if="tabIndex === 2" :class="{ judge: true, show: judge }">
      <div class="header">
        入社申請
        <img @click="judge = false" :src="require('@/assets/image/Project/Revenue/down.svg')" />
      </div>
      <MemberItem
        v-for="(member, index) in applicants"
        :key="index"
        :idx="index + 1"
        :user="member"
        :isJudge="true"
        @judge="onJudge"
      ></MemberItem>
    </div>

    <BlurMask :show="isAddingMember || judge"></BlurMask>
    <div class="upper" :style="{ backgroundImage: 'url(' + preClub.clubImage + ')' }">
      <div class="info">
        <img class="avatar" :src="require('@/assets/image/LOGO.png')" alt="Logo" />
        <div class="space"></div>
        <h1>{{ club.name }}</h1>
      </div>
    </div>
    <div class="block">
      <div class="tabs" :style="{ top: tabIndex === -1 ? '-32px' : '-36px' }">
        <div
          class="tab"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ selected: tabIndex === index }"
          @click="tabIndex = index"
        >{{ tab.name }}</div>
      </div>
      <div class="space"></div>
      <div v-if="tabIndex === 0" class="intro">
        <div class="title">
          <span>社群簡介</span>
          <font-awesome-icon :icon="type" @click="editIntro"></font-awesome-icon>
        </div>
        <textarea v-if="introExist" v-model="club.intro" name="intro" id="edit" cols="60" rows="10"></textarea>
        <div class="content">{{ club.intro }}</div>
      </div>
      <!-- <textarea v-if="" name="intro" id="intro" cols="30" rows="10"></textarea> -->
      <div v-if="tabIndex === 1" class="announce">
        <AnnounceItem
          v-for="(announce, index) in club.announces"
          :key="index"
          :announce="announce"
          @deleteAnnounce="deleteAnnounce"
        ></AnnounceItem>
        <div :class="{ container: true, onFocus: announceInputing }">
          <textarea
            placeholder="撰寫公告..."
            name
            id="messege"
            cols="10"
            rows="5"
            v-model="inputAnnounce"
            @focus="announceInputing = true"
            @blur="announceInputing = false"
          ></textarea>
          <font-awesome-icon
            class="arrow"
            icon="location-arrow"
            size="lg"
            style="color: #00c5b8"
            @click="addAnnounce"
          ></font-awesome-icon>
        </div>
      </div>
      <div v-if="tabIndex === 2" class="member">
        <div class="header">
          <span>成員總數</span>
          <div class="right">
            <div class="cont">
              <div @click="addMember">新增成員</div>
              <div @click="judge = !judge">
                入社申請
                <span v-if="application.length !== 0">
                  {{
                  application.length
                  }}
                </span>
              </div>
            </div>
            <span>{{ club.members.length + "人" }}</span>
          </div>
        </div>
        <div class="memberBlock">
          <MemberItem
            v-for="(member, index) in club.members"
            :key="index"
            :idx="index + 1"
            :user="member"
          ></MemberItem>
        </div>
      </div>
    </div>
    <Footer :active="3"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import BlurMask from "@/components/common/BlurMask.vue";
import MemberItem from "@/components/Club/MemberItem.vue";
import AnnounceItem from "@/components/Club/AnnounceItem.vue";

export default {
  name: "Club",
  components: {
    Header,
    Footer,
    MemberItem,
    AnnounceItem,
    BlurMask,
  },
  data() {
    return {
      userPhoto: "",
      addUsername: "",
      matchUsers: [],
      selectedUser: [],
      focusPartner: false,

      announceInputing: false,
      judge: false,
      preClub: {},
      club: {
        intro: "",
        announces: [],
      },
      members: [],
      tabs: [{ name: "簡介" }, { name: "公告" }, { name: "成員" }],
      tabIndex: 0,
      introExist: false,
      type: "edit",
      inputAnnounce: "",
      isAddingMember: false,
      application: [],
      applicants: [],
    };
  },
  beforeMount: async function () {
    this.userPhoto = localStorage.getItem('userPhoto');
    this.preClub = this.$store.state.club;
    this.club.name = this.preClub.clubName;
    this.club.createDate = this.preClub.createdAt
      .substring(0, 10)
      .replace("-", "/")
      .replace("-", "/");
    this.club.intro = this.preClub.clubIntro;
    this.club.members = this.preClub.clubMembers;
    this.club.announces = this.preClub.clubAnnounce;
    // console.log(this.club.announces);
    let clubID = this.preClub._id;
    this.club.members = await this.$store.dispatch("getClubMembers", {
      clubID,
    });
    this.club.members = this.club.members.data.data;
    let response = await this.$store.dispatch("getApplication", { clubID });
    this.application = response.data.data;
    for (let app of this.application) {
      this.applicants.push(app.applicant);
    }
    let userID = [];
    userID = JSON.stringify(this.applicants);
    response = await this.$store.dispatch("getUserByID", { userID });
    this.applicants = response.data.data;
    for (let i = 0; i < this.applicants.length; ++i) {
      this.applicants[i].applicationId = this.application[i]._id;
    }
  },
  methods: {
    async editIntro() {
      if (this.type === "edit") {
        //console.log("hey");
        this.type = "check";
        this.introExist = true;
      } else if (this.type === "check") {
        this.type = "edit";
        this.introExist = false;
        await this.$store.dispatch("updateIntro", {
          data: { clubIntro: this.club.intro },
          params: { clubID: this.$store.state.club._id },
        });
      }
    },
    async addAnnounce() {
      let d = new Date();
      d =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
        "-" +
        (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

      let res = await this.$store.dispatch("addAnnounce", {
        data: {
          info: this.inputAnnounce,
          date: d,
        },
        params: { clubID: this.$store.state.club._id },
      });
      this.club.announces.push(
        res.data.data.clubAnnounce[res.data.data.clubAnnounce.length - 1]
      );
      this.inputAnnounce = "";
    },
    async deleteAnnounce(announceID) {
      this.club.announces = this.club.announces.filter((a) => {
        return a._id !== announceID;
      });
    },
    async onJudge(result, appId) {
      await this.$store.dispatch("updateApplication", {
        data: { result: result ? "APPROVED" : "REJECTED" },
        params: { clubID: this.$store.state.club._id, applicationID: appId },
      });
      this.judge = false;
    },
    addMember() {
      this.isAddingMember = true;
    },
    selectUser(user) {
      this.addUsername = user.username;
    },
    async searchUser() {
      console.log(this.addUsername);
      let response = await this.$store.dispatch(
        "getAllUserByUsername",
        this.addUsername
      );
      this.matchUsers = response.data.data;
    },
    async addUser() {
      let response = await this.$store.dispatch("addClubMembers", {
        data: { username: this.addUsername },
        params: { clubID: this.$store.state.club._id },
      });
      console.log(response);
      this.isAddingMember = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$textBorderColor: #5d5d5d;
$tabHeight: 36px;

.main_club {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // position: relative;
  .addMember {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70vw;
    height: 30vw;
    transform: translate(-50%, -50%);
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #00c5b8;
    .header {
      padding-top: 7px;
      height: 30%;
      color: #00c5b8;
      font-size: 18px;
      font-weight: 700;
      .check {
        position: absolute;
        z-index: 100;
        top: 3%;
        left: 82%;
      }
      .cross {
        position: absolute;
        z-index: 100;
        top: 3%;
        left: 91%;
      }
    }
    .input-block {
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 1vh 0;
      position: relative;
      .matchBlock {
        width: 56vw;
        min-height: 30px;
        max-height: 30px;
        border-radius: 10px;
        z-index: 1;
        border: 0;
        background-color: #fff;
        position: absolute;
        transition: 0.3s;
        overflow: hidden;
        &.focus {
          border: 1px #00c5b8 solid;
          min-height: 100px;
          max-height: 1000px;
        }
        input {
          width: 50vw;
          height: 18px;
          line-height: 18px;
          border: 1px solid #00c5b8;
          border-radius: 10px;
          padding: 5px 10px;
          transition: 0.3s;
          &:focus {
            border-radius: 10px 10px 0 0;
          }
        }
      }
    }
  }
  .judge {
    width: 97%;
    left: 50%;
    transform: translateX(-50%);
    height: 50vh;
    position: fixed;
    top: 110vh;
    border: 0;
    border-radius: 20px;
    transition: 0.3s;
    z-index: 2000;
    background-color: #fff;
    box-shadow: 0 0 12px gray;
    &.show {
      top: 60vh;
    }
    .header {
      height: 30px;
      font-size: 22px;
      font-weight: 700;
      color: #00c5b8;
      text-align: center;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
      }
    }
  }
  .upper {
    position: relative;
    padding-top: 8vh;
    width: 100%;
    height: 16vh;
    opacity: 0.8;
    border: 1px solid #000;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    .info {
      position: absolute;
      left: 2vw;
      bottom: -20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 32%;
      }
      .space {
        width: 5%;
      }
      h1 {
        font-size: 36px;
        color: #fff;
        text-shadow: -1px -1px 0 $textBorderColor, 1px -1px 0 $textBorderColor,
          -1px 1px 0 $textBorderColor, 1px 1px 0 $textBorderColor;
        font-weight: 500;
      }
    }
  }
  .block {
    position: relative;
    border-radius: 16px 0 16px 16px;
    box-shadow: 0px 0px 10px #ccc;
    width: 95%;
    margin: 3.5vh auto;
    padding: 5px;
    box-sizing: border-box;
    min-height: 70vh;
    .tabs {
      position: absolute;
      right: 0;
      top: -$tabHeight;
      width: 68%;
      height: $tabHeight;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .tab {
        width: 33%;
        height: 36px;
        background-color: #fff;
        box-shadow: 0 -5px 6px rgb(238, 238, 238) inset;
        border: 1px solid #e9eaed;
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 700;
        color: #00c5b8;
        &.selected {
          height: 40px;
          background-color: #00c5b8;
          color: #fff;
          box-shadow: none;
        }
      }
    }
    .space {
      height: 1px;
    }
    .intro {
      width: 90%;
      height: 62vh;
      margin: 2vh auto;

      color: #8d8d8d;
      .title {
        font-size: 26px;
        font-weight: 700;
        margin: 2vh 0;
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      #edit {
        position: relative;
        border: 0;
        width: 100%;
        height: 30vh;
        font-size: 3vh;
      }
      .content {
        white-space: pre-wrap;
        padding: 4px;
        height: 54vh;
        overflow-y: scroll;
        font-size: 14px;
      }
    }
    .announce {
      height: 60vh;
      overflow: scroll;
      .container {
        height: 40px;
        width: 90%;
        position: fixed;
        display: flex;
        justify-content: center;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 8vh;
        transition: 0.3s;
        &.onFocus {
          height: 130px;
        }
        .arrow {
          position: absolute;
          left: 100%;
          bottom: 0;
          transform: translate(-150%, -40%);
        }
        #messege {
          width: 100%;
          height: 100%;
          padding: 6px 10px;
          box-sizing: border-box;
          font-size: 5vw;
          border-radius: 16px;
        }
      }
    }
    .member {
      height: 70vh;
      .header {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid #e4e4e4;
        .right {
          width: 60%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .cont {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            div {
              position: relative;
              width: 33%;
              margin-left: 5px;
              text-align: center;
              background-color: #dddddd;
              color: #fff;
              padding: 2px 8px;
              border-radius: 16px;
              span {
                position: absolute;
                color: #fff;
                background-color: #f00;
                border-radius: 50%;
                width: 18px;
                height: 18px;
                right: 0;
                top: 0;
                transform: translate(50%, -50%);
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        span {
          margin: 5px 5px 2px 10px;
          font-weight: 700;
          color: #00c5b8;
        }
      }
      .memberBlock {
        height: 56vh;
        overflow-x: hidden;
        overflow-y: scroll;
      }
    }
  }
}
</style>
