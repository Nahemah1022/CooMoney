<template>
  <div class="main_a">
    <Header :title="'Analysis'" @back="$router.go(-1)"></Header>
    <div id="block">
      <Option
        :allProjectName="clubProjectName"
        @projectSubmit="projectSelect"
        :defaultProject="initProject"
      ></Option>

      <div class="example-3d">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide>
            <Expense
              v-bind:sendExpense="expenseSelect()"
              :sendIncome="incomeSelect()"
              @Type="isDisplay"
            ></Expense>
          </swiper-slide>
          <swiper-slide v-if="displayIncome">
            <Imcome :sendIncome="incomeSelect()"></Imcome>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- <BlockUI :message="msg" :url="getUrl"></BlockUI> -->

    <Footer :active="1"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Option from "@/components/Analysis/Option";
import Expense from "@/components/Analysis/Expense";
import Imcome from "@/components/Analysis/Imcome";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

// import BlockUI from "vue-blockui";
//import loadingImage from "./assets/logo.png";
export default {
  name: "Analysis",
  components: {
    Header,
    Footer,
    Option,
    Expense,
    Imcome,
    SwiperSlide,
    Swiper,
    // BlockUI,
    //loadingImage,
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: false,

        spaceBetween: 0, //slide相互距離
        initialSlide: 0, //起始頁面
        coverflowEffect: {
          //很屌的效果
          rotate: 30,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },

        //切換圖表特效
        on: {
          init: function() {
            let c = this.slides[this.activeIndex].children;
            c[0].style.backgroundColor = "#FFFFFF";
            //console.log(c[0]);
            c[0].style.opacity = "1";
          },
          slideChange: () => {
            //console.log(this.activeIndex); //必須用activeIndex因為event是以他為基準 //切换结束时，告诉我现在是第几个slide
            //this.active = this.$refs.mySwiper.swiper.activeIndex;
            //把目前的slide變回白色

            let c1 = this.slides[this.activeIndex].children;

            c1[0].style.backgroundColor = "#FFFFFF";
            c1[0].style.opacity = "1";
            if (this.activeIndex == 0) {
              //左右弄成透明
              let cForward = this.slides[this.activeIndex + 1].children;
              cForward[0].style.backgroundColor = "#FFFFFF";
              cForward[0].style.opacity = "0.5";
            } else {
              let cBack = this.slides[this.activeIndex - 1].children;
              cBack[0].style.backgroundColor = "#FFFFFF";
              cBack[0].style.opacity = "0.5";
              //c.style.backgroundColor = '#e5e5e5';
            }
          },
        },
      },
      receiveProject: [], //receive from option
      initProject: [], //useByDefault
      displayIncome: true,
      clubProjectName: [],
      clubProject: [],
      projectRevenue: {},
      //active: 1,
      //serve side variable

      //loading
      // msg: "Welcome to Your Vue.js App",
      // url: "./assets/LOGO.png",
    };
  },
  methods: {
    //don't show income when month type
    getUrl() {
      return this.loadingImage;
    },
    isDisplay(checked) {
      //表示切成Month income不要顯示
      if (checked) this.displayIncome = false;
      else this.displayIncome = true;
    },

    projectSelect(project) {
      this.receiveProject = project;
      //console.log(project[0]);
    },
    expenseSelect() {
      //每次都要清空
      let expenseData = {};

      let singleExpense = {};
      if (this.receiveProject.length > 0 && this.clubProject.length > 0) {
        //開始包
        //console.log(this.projectRevenue);
        //每個project

        Object.keys(this.projectRevenue).forEach((e) => {
          //console.log(this.projectRevenue[e]);
          //console.log(this.receiveProject.findIndex((i) => i === e));

          if (this.receiveProject.findIndex((i) => i === e) >= 0) {
            let revenueNum = this.projectRevenue[e].length;
            //有收支的project
            if (revenueNum > 0) {
              let expenseInProject = [];
              let singleRevenue = this.projectRevenue[e];
              for (let j = 0; j < singleRevenue.length; ++j) {
                if (
                  singleRevenue[j].revenueStatus === "PENDING" ||
                  singleRevenue[j].revenueStatus === "APPROVED"
                ) {
                  let itemTag = singleRevenue[j].revenueTag;
                  let date = "";
                  if (singleRevenue[j].revenueMonth < 10) {
                    date =
                      singleRevenue[j].revenueYear +
                      "/0" +
                      singleRevenue[j].revenueMonth;
                  } else {
                    date =
                      singleRevenue[j].revenueYear +
                      "/" +
                      singleRevenue[j].revenueMonth;
                  }

                  let money = singleRevenue[j].revenueCost;
                  singleExpense = {
                    Classification: itemTag,
                    money: money,
                    month: date,
                  };
                  //console.log(singleExpense);
                  //如果是支出
                  expenseInProject.push(singleExpense);
                }
              }
              //console.log(expenseInProject);
              //console.log(e);
              expenseData[e] = expenseInProject;
            }
          }
        });
      }
      //console.log(expenseData);
      return expenseData;
    },

    incomeSelect() {
      let incomeData = {};
      let singleIncomme = {};
      if (this.receiveProject.length > 0 && this.clubProject.length > 0) {
        //開始包
        //console.log(this.projectRevenue);
        //每個project

        Object.keys(this.projectRevenue).forEach((e) => {
          //console.log(e);
          //console.log(this.receiveProject.findIndex((i) => i === e));

          if (this.receiveProject.findIndex((i) => i === e) >= 0) {
            let revenueNum = this.projectRevenue[e].length;
            //有收支的project
            if (revenueNum > 0) {
              let IncommeInProject = [];
              let singleRevenue = this.projectRevenue[e];
              for (let j = 0; j < singleRevenue.length; ++j) {
                let itemTag = singleRevenue[j].revenueTag;
                let date =
                  singleRevenue[j].revenueYear +
                  "/" +
                  singleRevenue[j].revenueMonth;
                let money = singleRevenue[j].revenueCost;
                singleIncomme = {
                  Classification: itemTag,
                  money: money,
                  month: date,
                };
                //console.log(singleExpense);
                //如果是支出
                IncommeInProject.push(singleIncomme);
              }
              //console.log(IncommeInProject);
              //console.log(e);
              incomeData[e] = IncommeInProject;
            }
          }
        });
      }
      //console.log(expenseData);
      //console.log(incomeData);
      return incomeData;
    },
  },
  async beforeMount() {
    let clubId = this.$store.state.club._id;
    //console.log(clubId);
    let res1 = await this.$store.dispatch("getClubProject", clubId);
    //console.log(res1);

    //用id拿到所有project
    this.clubProject = res1.data.data;
    for (let i = 0; i < this.clubProject.length; ++i) {
      this.clubProjectName.push(this.clubProject[i].projectName);
    }
    //console.log(this.clubProject);
    //每個proejct拿revenue
    for (let i = 0; i < this.clubProject.length; ++i) {
      let projectID = this.clubProject[i]._id;
      //console.log(projectID);
      let res2 = await this.$store.dispatch("getAllRevenue", {
        projectID,
      });
      let revenue = res2.data.data;
      //console.log(res2);
      //console.log(this.clubProject[i].projectStatus);
      this.projectRevenue[this.clubProjectName[i]] = revenue;

      //先默認一個project
    }

    //先有個默認打勾init傳下去
    this.initProject.push(this.clubProjectName[0]);

    //先有個默認圖表
    this.receiveProject = this.initProject;
    //console.log(this.receiveProject);
  },

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#block {
  background-color: #dffffe;
  height: 100vh;
  overflow: hidden;
}
.example-3d {
  width: 100%;
  height: 100%;
}
.swiper {
  height: 70vh;
  width: 100%;
  top: 9vh;
  //background-color: black;
  .swiper-slide {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: bold;
    //font-size: $font-size-huge * 2;
    background-color: transparent;

    background-position: center;
    background-size: cover;
    color: white;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}
</style>
