<template>
  <div class="main">
    <div
      :class="{bill: true, fullBill: fullRevenue, expand: fullRevenue&&expand, judgement: fullRevenue&&expand&&status==='pending'&&judgementShow}"
      @click="fullRevenue && !judgementShow && (expand = !expand)"
    >
      <div class="block">
        <div :class="{titleBlock: true, titleExpand: fullRevenue&&expand}">
          <!-- <img :src="require(`@/assets/image/Project/${category}.svg`)" /> -->
          <div class="icon">
            <font-awesome-icon
              :icon="getIcon(category)"
              :size="fullRevenue&&expand ? '2x' : 'sm'"
              style="color: #fff"
            />
          </div>
          <img class="space" src alt />
          <div class="title">{{costTitle}}</div>
        </div>
        <hr />
        <div v-if="fullRevenue&&expand" class="desc">{{description}}</div>
        <Judgement
          :show="fullRevenue&&expand&&judgementShow"
          :status="status"
          :comment="comment"
          @toggle="toggle"
          @judge="judge"
        ></Judgement>
      </div>
      <div :class="{right: true, fullRight: fullRevenue, expandRight: fullRevenue&&expand}">
        <div>
          <span>$</span>
          {{cost}}
        </div>
        <span>&nbsp;</span>
        <img
          :class="{fullImg: fullRevenue, imgRxpand: fullRevenue&&expand}"
          :src="require(`@/assets/image/Project/Revenue/${status}${fullRevenue&&expand ? '_expand' : ''}.svg`)"
          @click.stop="toggle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { IconLibary } from "@/assets/js/fontawesome.js";
import Judgement from "@/components/Project/Revenue/Judgement.vue";

export default {
  name: "",
  data() {
    return {
      expand: false,
      judgementShow: false,
      IconLibary: IconLibary
    };
  },
  props: {
    costTitle: String,
    category: String,
    cost: String,
    status: String,
    description: String,
    fullRevenue: Boolean,
    comment: String,
    revenueID: String
  },
  components: {
    Judgement
  },
  methods: {
    getIcon(type) {
      return IconLibary.filter(icon => icon.type === type)[0].font.iconName;
    },
    toggle() {
      if (this.expand) {
        console.log(this.revenueID)
        this.judgementShow = !this.judgementShow;
        // this.$emit("toggle");
      }
    },
    judge(result, inputComment) {
      console.log(this.revenueID)
      this.$emit("judge", result, inputComment, this.revenueID, this.cost);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$transition: 0.3s;
* {
  background-color: transparent;
}
.bill {
  position: relative;
  display: flex;
  max-height: 3vh;
  width: 90%;
  margin: 16px auto;
  padding: 0px;
  border-radius: 0px;
  justify-content: space-between;
  align-items: flex-start;
  transition: $transition;
  &.fullBill {
    padding: 4px;
    &.expand {
      max-height: 50vh;
      width: 88vw;
      background-color: #f5f5f5;
      padding: 12px;
      border-radius: 16px;
      // &.judgement {
      //   height: 30vh;
      // }
    }
  }
  .block {
    width: 100%;
    hr {
      margin: 1vh auto;
    }
    .desc {
      padding: 0 10px;
      font-size: 18px;
      // border: 1px solid gray;
      // background-color: #fff;
      // box-shadow: 0 0 6px #cccccc;
      border-radius: 16px;
      height: auto;
      word-wrap: break-word;
      overflow-y: scroll;
    }
    .titleBlock {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 3vh;
      font-size: 16px;
      transition: $transition;
      .title {
        width: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      img {
        width: 5vw;
        transition: $transition;
      }
      .icon {
        width: 3vh;
        height: 3vh;
        background-color: #00c5b8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: 0.3s;
      }
      &.titleExpand {
        width: auto;
        height: auto;
        font-size: 20px;
        align-items: flex-start;
        img {
          width: 5vw;
          &:not(.space) {
            width: 16vw;
          }
        }
        .icon {
          width: 18vw;
          height: 18vw;
        }
      }
    }
  }
  .right {
    position: absolute;
    width: auto;
    height: 3vh;
    overflow: hidden;
    background-color: transparent;
    right: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    transition: $transition;
    &.fullRight {
      position: absolute;
      width: 30vw;
      &.expandRight {
        height: 7vh;
        width: 64vw;
        right: 4vw;
        font-size: 18px;
      }
    }
    img {
      transition: $transition;
      width: 0vw;
      &.fullImg {
        width: 10vw;
        &.imgRxpand {
          width: 26vw;
        }
      }
    }
  }
}
</style>
