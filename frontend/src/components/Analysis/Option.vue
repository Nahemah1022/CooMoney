<template>
  <div id="content1">
    <swiper class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="project in allProjectName"
        :key="project"
      >
        <label class="layout">
          <div id="container">
            <avatar
              :backgroundColor="chooseBackGround(project)"
              :username="proejctIsCheck(project)"
              :size="60"
              color="#fff"
            ></avatar>
            <div id="H1wrap">
              <h1>{{ project }}</h1>
            </div>
          </div>

          <input
            type="checkbox"
            :value="project"
            v-model="checkProject"
            @change="getProjectName()"
          />
        </label>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Avatar from "vue-avatar";

export default {
  props: {
    allProjectName: Array,

    defaultProject: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
    Avatar,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },

      isCheck: [],
      backGround: {
        A: "#91F1EA",
        B: "#F9C2FF",
        C: "#F1CE91",
        D: "#FFB7CA",
        E: "#91C1F1",
        F: "#91F1EA",
        G: "#F9C2FF",
        tick: "#4EF559",
      },
      //allProjectName: [],
      clubProject: [],
      checkProject: this.defaultProject,
    };
  },

  //不曉得為啥
  methods: {
    //the option
    chooseBackGround(project) {
      //如果已經勾選就變成打勾的顏色
      if (this.checkProject.findIndex((i) => i === project) === -1) {
        switch (project.charAt((c) => c === 0)) {
          case "A":
            return this.backGround.A;
          case "B":
            return this.backGround.B;
          case "C":
            return this.backGround.C;
          case "D":
            return this.backGround.D;
          case "E":
            return this.backGround.E;
          case "F":
            return this.backGround.F;
          case "G":
            return this.backGround.G;
        }
      } else return this.backGround.tick;
    },
    proejctIsCheck(project) {
      if (this.checkProject.findIndex((i) => i === project) === -1)
        return project;
      else return "✔";
    },

    getProjectName() {
      //console.log(this.checkProject);
      if (this.checkProject.length === 0) {
        alert("Please choose at least 1!!");
      } else this.$emit("projectSubmit", this.checkProject);
    },

    //must not zero project when enter analysis
    initOne() {
      //let all = JSON.parse(JSON.stringify(this.allProjectName));
      /*console.log(this.allProjectName);
      this.checkProject.push(this.allProjectName[0]);
      console.log(this.checkProject);
      this.$emit("projectSubmit", this.checkProject);
      */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content1 {
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 10vh;
  width: 93%;
  height: 15vh;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;

  .swiper-button-next {
    //transform: rotate(90deg);
    right: -0.5vh;
    &:after {
      font-size: 3vh;
    }
  }

  .swiper-button-prev {
    //transform: rotate(90deg);
    left: -0.5vh;
    &:after {
      font-size: 3vh;
    }
  }
  .swiper {
    //background-color: red;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    .swiper-slide {
      width: 100%;
      height: 100%;
      //background-color: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      .layout {
        input {
          display: none;
        }
        #container {
          height: 65%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        // background-color: aqua;
        //border-radius: 999em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        #H1wrap {
          display: flex;
          justify-content: center;
          h1 {
            //background-color: red;
            width: 90%;
            font-size: 2vw;
            overflow: hidden;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
