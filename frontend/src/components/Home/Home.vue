<template>
  <div class="main">
    <NewClub v-if="createNewClub" @cancel="createNewClub = false"></NewClub>
    <List :show="showList" @toggleList="showList = !showList"></List>
    <BlurMask :show="createNewClub || showList" />
    <!-- <div class="profileBlock">
      <Profile></Profile>
    </div>-->
    <div class="block">
      <div class="serachBarBlock">
        <SearchBar
          @newClub="createNewClub = true"
          @toggleList="showList = !showList"
        ></SearchBar>
      </div>
      <div class="space" />
      <div class="clubsBlock">
        <div class="top">
          <font-awesome-icon
            :icon="clubLayout ? 'table' : 'list'"
            size="lg"
            style="color: #aeacac"
            @click="clubLayout = !clubLayout"
          />
        </div>
        <ClubPreview
          v-for="(club, index) in joinedClubs"
          :key="index"
          :club="club"
          :list="clubLayout"
          :disable="createNewClub || showList"
        ></ClubPreview>
      </div>
      <p class="msg">
        {{
          "didn't join " +
            (joinedClubs.length === 0 ? "any" : "more") +
            " groups"
        }}
      </p>
      <div class="space" />
    </div>
  </div>
</template>

<script>
// import Profile from "@/components/Home/Profile";
import SearchBar from "@/components/Home/SearchBar";
import ClubPreview from "@/components/Home/ClubPreview";
import NewClub from "@/components/Home/NewClub";
import List from "@/components/Home/List";
import BlurMask from "@/components/common/BlurMask";

export default {
  name: "Home",
  components: {
    // Profile,
    SearchBar,
    ClubPreview,
    NewClub,
    BlurMask,
    List,
  },
  props: {},
  data() {
    return {
      clubLayout: false,
      createNewClub: false,
      showList: false,
      joinedClubs: [
        // {
        //   name: "成大資訊營",
        //   description: "a group of fire dance NCKU",
        //   auth: 0,
        //   createDate: "2019/05/01",
        //   memberCount: 27
        // },
        // {
        //   name: "ICT NCKU",
        //   description: "a group of ICT in NCKU",
        //   auth: 0,
        //   createDate: "2020/04/22",
        //   memberCount: 24
        // },
        // {
        //   name: "成大火舞社",
        //   description: "a group of fire dance NCKU",
        //   auth: 1,
        //   createDate: "2019/09/01",
        //   memberCount: 38
        // }
      ],
    };
  },
  beforeMount: async function() {
    console.log(this.$store.state);
    let club = await this.$store.dispatch("getClub");
    this.joinedClubs = club.data.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  position: relative;
  .profileBlock {
    width: 90%;
    height: 12vh;
    margin: 3vh auto 5vh auto;
  }
  .block {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    .serachBarBlock {
      width: 95%;
      margin: 20px auto 10px auto;
      height: 50px;
      z-index: 10;
    }
    .space {
      height: 0px;
    }
    .clubsBlock {
      height: auto;
      .top {
        display: flex;
        justify-content: flex-end;
        padding: 0 5%;
      }
    }
    .msg {
      text-align: center;
      z-index: 1000;
      color: #000;
      margin: 5vh auto;
      color: #cbcbcb;
      font-size: 20px;
    }
  }
}
</style>
