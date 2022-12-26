<template>
  <div class="main">
    <Header :title="''" @back="$router.go(-1)"></Header>
    <div class="outer">
      <swiper class="swiper" :options="swiperOption" :activeIndex="3">
        <swiper-slide v-for="preProject in projects" :key="preProject.id">
          <ProjectViewItem
            :projectName="preProject.projectName"
            :projectTheme="preProject.projectTheme"
            :projectId="preProject._id"
            :projectBudget="preProject.projectBudget"
            :projectTotalExpanse="preProject.projectTotalExpanse"
            :projectTotalIncome="preProject.projectTotalIncome"
          ></ProjectViewItem>
        </swiper-slide>
      </swiper>
    </div>
    <Footer :active="2"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import ProjectViewItem from "@/components/Project/ProjectViewItem.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProjectView",
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        effect: "coverflow",
        centeredSlides: true,
        spaceBetween: 0,
        coverflowEffect: {
          rotate: 30,
          slideShadows: false,
          stretch: 20,
          depth: 100,
          modifier: 1
        },
        initialSlide: this.default
      }
    };
  },
  components: {
    Header,
    Footer,
    ProjectViewItem,
    Swiper,
    SwiperSlide
  },
  props: {
    projects: Array,
    default: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  .outer {
    height: 100vh;
  }
  .swiper {
    background-color: #dffffe;
    height: 90vh;
    touch-action: none;
    .swiper-slide {
      margin-top: 9vh;
      height: 81vh;
      .swiper-slide-shadow-left {
        width: 80vw;
        border-radius: 10px;
      }
    }
  }
}
</style>
