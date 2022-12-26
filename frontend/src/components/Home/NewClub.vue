<template>
  <div class="main_c">
    <img
      class="cross"
      :src="require('@/assets/image/Project/cross.svg')"
      @click="$emit('cancel')"
    />
    <div class="title">建立你的社群</div>
    <div class="block">
      <div class="pair">
        <div class="topic">社群名稱</div>
        <input type="text" v-model="clubName" />
      </div>
      <div class="pair">
        <div class="topic">社群成員</div>
        <div class="input-block">
          <div :class="{ matchBlock: true, focus: focusPartner }">
            <input
              type="text"
              @focus="focusPartner = true"
              @blur="focusPartner = false"
              @input="searchUser"
              v-model="username"
              placeholder="Your Partners"
            />
            <div class="selectedUsers">
              <img
                v-for="(user, index) in this.selectedUser"
                class="sel"
                :key="index"
                :src="
                  user.userPhoto
                    ? user.userPhoto
                    : require('@/assets/image/Home/avatar_empty.svg')
                "
                alt=""
              />
            </div>
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
      <div class="pair">
        <div class="topic">封面照片</div>
        <input type="file" @change="uploadFile" />
      </div>
      <div class="pair">
        <button @click="create">建立</button>
      </div>
    </div>
  </div>
</template>

<script>
import MemberItem from "@/components/Club/MemberItem.vue";

export default {
  name: "NewClub",
  data() {
    return {
      username: "",
      matchUsers: [],
      selectedUser: [],
      focusPartner: false,
      clubName: "",
      clubImage: "",
      clubMembers: "",
      uploadedFile: "",
    };
  },
  components: {
    MemberItem,
  },
  methods: {
    selectUser(user) {
      this.selectedUser.push(user);
    },
    async searchUser() {
      console.log(this.username);
      let response = await this.$store.dispatch(
        "getAllUserByUsername",
        this.username
      );
      this.matchUsers = response.data.data;
    },
    async create() {
      this.$emit("cancel");
      let clubMembers = [];
      let members = this.selectedUser;
      if (members[0]) {
        for (let i = 0; i < members.length; i++) {
          clubMembers.push(members[i].username);
        }
      }

      clubMembers = JSON.stringify(clubMembers); // 要先轉成字串
      console.log(clubMembers);
      let bodyFormData = new FormData();
      bodyFormData.append("clubImage", this.uploadedFile);
      bodyFormData.set("clubName", this.clubName);
      bodyFormData.set("clubMembers", clubMembers);
      let newClub = await this.$store.dispatch("createClub", bodyFormData);

      let imageData = new FormData();
      imageData.append("clubImage", this.uploadedFile);
      let newClubImage = await this.$store.dispatch("clubImage", imageData);
      console.log(newClub);
      console.log(newClubImage);
      // let club = await this.$store.dispatch("getClub");
      // console.log(club);
    },
    uploadFile(f) {
      this.uploadedFile = f.target.files[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main_c {
  position: absolute;
  width: 70vw;
  height: 40vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px #02aa9e solid;
  border-radius: 16px;
  background-color: #fff;
  z-index: 10;
  .cross {
    position: absolute;
    right: 0;
    transform: translate(20%, -20%);
    border: 1px solid #00c5b8;
    border-radius: 50%;
  }
  .title {
    color: #00c5b8;
    padding: 5px 10px;
    font-size: 20px;
  }
  .block {
    width: 90%;
    margin: 0 auto;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .pair {
      display: flex;
      width: 90%;
      flex-direction: column;
      align-items: flex-start;
      margin: 5px auto;
      .topic {
        margin: 5px 0;
        color: #8d8d8d;
        font-size: 14px;
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
        .selectedUsers {
          width: auto;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .sel {
            height: 16px;
            margin: 2px 4px;
          }
        }
        .matchBlock {
          width: 100%;
          min-height: 30px;
          max-height: 30px;
          border-radius: 20px;
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
            width: 90%;
            margin: 0 auto;
            line-height: 28px;
            font-size: 16px;
            border: #00c5b8 1px solid;
            border-radius: 16px;
            padding: 0 10px;
            transition: 0.3s;
            &:focus {
              border-radius: 20px 20px 0 0;
            }
          }
        }
      }

      input[type="text"] {
        width: 90%;
        margin: 0 auto;
        line-height: 28px;
        font-size: 16px;
        border: #00c5b8 1px solid;
        border-radius: 16px;
        padding: 0 10px;
      }
      input[type="file"] {
        width: 90%;
        margin: 0 auto;
        line-height: 28px;
        font-size: 16px;
        border: 0;
        border-radius: 0;
      }
      button {
        width: 80%;
        margin: 0 auto;
        line-height: 28px;
        font-size: 16px;
        border: #00c5b8 1px solid;
        border-radius: 16px;
        background-color: #00c5b8;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
</style>
