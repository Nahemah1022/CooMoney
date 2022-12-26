<template>
  <div class="main">
    <Confirm v-if="showConfirm"></Confirm>
    <NewCategory
      v-if="newingCategory"
      :show="newingCategory"
      @hide="newingCategory = !newingCategory"
      @addCategory="addCategory"
    ></NewCategory>
    <div class="block">
      <BlurMask :show="newingCategory"></BlurMask>
      <img
        class="collapse"
        src="@/assets/image/Project/collapse.svg"
        @click="collapse"
      />
      <div class="upper">
        <div class="type-picker">
          <label
            for="expense"
            :class="{ selected: selectedIndex == 1 }"
            @click="selectedIndex = 1"
          >
            <input type="radio" name="btns" id="expense" />
            <p
              :class="{ selectedP: selectedIndex == 1 }"
              @click="selectedIndex = 1"
            >
              Expense
            </p>
          </label>
          <label
            for="income"
            :class="{ selected: selectedIndex == 2 }"
            @click="selectedIndex = 2"
          >
            <input type="radio" name="btns" id="income" />
            <p
              :class="{ selectedP: selectedIndex == 2 }"
              @click="selectedIndex = 2"
            >
              Income
            </p>
          </label>
          <!-- <label for="transfer" :class="{selected: selectedIndex==3}" @click="selectedIndex=3">
            <input type="radio" name="btns" id="transfer" />
            <p :class="{selectedP: selectedIndex==3}" @click="selectedIndex=3">Transfer</p>
          </label>-->
        </div>
        <div class="cost-block">
          <div :class="{ inputBlock: true, focus: focus }">
            <input
              v-model="title"
              @focus="focus = true"
              @blur="focus = false"
              type="text"
              placeholder="Title here"
            />
            <textarea
              @focus="focus = true"
              @blur="focus = false"
              v-model="description"
              :class="{ desc: true, focus: focus }"
              placeholder="brief description"
            ></textarea>
          </div>
          <div class="money-block">
            <div v-if="costBufferDisplay" class="buffer">
              <span>$</span>
              <p>{{ costBufferDisplay }}</p>
            </div>
            <div class="cost">
              <span>$</span>
              <p>{{ costFormat(money) }}</p>
            </div>
          </div>
        </div>
        <!-- <hr /> -->
        <div class="category-block">
          <!-- <p>Category</p> -->
          <div class="category-bar swiper-no-swiping">
            <div
              v-for="(category, index) in categorys"
              :key="index"
              :for="`category_${category.index}`"
            >
              <input
                type="radio"
                name="categorys"
                :value="index"
                :checked="categoryIndex == index ? 'checked' : ''"
                :id="`category_${index}`"
              />
              <div class="icon" @click="categoryIndex = index">
                <font-awesome-icon
                  :icon="category.font.iconName"
                  size="lg"
                  style="color: white"
                />
              </div>
              <!-- <img
                @click="categoryIndex=category.index"
                :src="require(`@/assets/image/Project/${category.type}.svg`)"
              />-->
              <p>{{ category.type }}</p>
            </div>
            <div for="more">
              <input type="radio" name="categorys" value="0" id="more" />
              <img
                @click="newingCategory = !newingCategory"
                :src="require(`@/assets/image/Project/more.svg`)"
              />
              <p>more</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <label class="date_block">
            <datepicker v-model="date" :format="'yyyy-MM-dd'"></datepicker>
            <font-awesome-icon
              icon="calendar-day"
              size="sm"
              style="color: #00c5b8"
            />
          </label>
          <!-- <div class="account">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="account in accounts" :key="account.id">
                <div class="div-cont">
                  <img :src="require(`@/assets/image/Project/${account.img}.svg`)" />
                  <img class="space" src alt />
                  {{account.name}}
                </div>
              </swiper-slide>
            </swiper>
          </div>-->
          <div
            class="evid"
            :style="{
              height:
                uploadedFiles.length === 0 || !evidFocus
                  ? '20px'
                  : 20 * uploadedFiles.length + 'px',
            }"
            @click="evidFocus = !evidFocus"
          >
            <div class="items">
              <div class="item" v-for="file in uploadedFiles" :key="file.name">
                <img
                  :class="{ focus: evidFocus }"
                  src="@/assets/image/Project/cross.svg"
                  alt
                />
                {{ file.name }}
              </div>
            </div>
            <label for="attach">
              <input id="attach" type="file" @change="uploadFile" />
              <font-awesome-icon
                icon="paperclip"
                size="sm"
                style="color: #00c5b8"
              />
              <!-- <img src="@/assets/image/Project/attach.svg" alt /> -->
            </label>
            <label for="shot">
              <input id="shot" type="file" @change="uploadFile" />
              <font-awesome-icon
                icon="camera"
                size="sm"
                style="color: #00c5b8"
              />
              <!-- <img src="@/assets/image/Project/shot.svg" alt /> -->
            </label>
          </div>
        </div>
      </div>
      <div class="keyboard">
        <div @click="caculate('1')">1</div>
        <div @click="caculate('2')">2</div>
        <div @click="caculate('3')">3</div>
        <div @click="caculate('+')">+</div>
        <div @click="caculate('4')">4</div>
        <div @click="caculate('5')">5</div>
        <div @click="caculate('6')">6</div>
        <div @click="caculate('-')">-</div>
        <div @click="caculate('7')">7</div>
        <div @click="caculate('8')">8</div>
        <div @click="caculate('9')">9</div>
        <div @click="caculate('x')">x</div>
        <div @click="caculate(-1)">⮨</div>
        <div @click="caculate('0')">0</div>
        <div class="apply" @click="apply">Apply</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import Datepicker from "vuejs-datepicker";
import Confirm from "@/components/common/Confirm";
import BlurMask from "@/components/common/BlurMask";
import NewCategory from "@/components/Project/CreateBill/NewCategory.vue";
import { IconLibary } from "@/assets/js/fontawesome.js";

export default {
  name: "CreateBill",
  data() {
    return {
      selectedIndex: 1,
      money: 0,
      title: "",
      date: new Date(),
      description: "",
      showConfirm: false,
      uploadedFiles: [],
      items: "",
      evidFocus: false,
      // swiperOption: {
      //   effect: "coverflow",
      //   grabCursor: true,
      //   centeredSlides: true,
      //   direction: "vertical",
      //   height: 40,
      //   coverflowEffect: {
      //     rotate: 0,
      //     stretch: -10,
      //     depth: 100,
      //     modifier: 1,
      //     slideShadows: false
      //   }
      // },
      categorys: IconLibary,
      categoryIndex: 0,
      newingCategory: false,
      focus: false,
      costBufferDisplay: "",
      operation: "",
      uploadedFile: "",
    };
  },
  props: {
    projectId: {
      type: String,
      required: true,
    },
  },
  components: {
    // Swiper,
    // SwiperSlide,
    Datepicker,
    Confirm,
    BlurMask,
    NewCategory,
  },
  methods: {
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
    uploadFile(f) {
      this.uploadedFiles.push(f.target.files[0]);
      this.uploadedFile = f.target.files[0];
      this.evidFocus = true;
    },
    addCategory(icon) {
      this.categorys.push(icon);
      this.newingCategory = !this.newingCategory;
    },
    collapse() {
      this.$emit("collapse");
    },
    caculate(input) {
      let revert = "";
      if (input == -1) {
        //back button
        if (this.costBufferDisplay.length <= 1) {
          this.costBufferDisplay = "";
          this.money = 0;
          return;
        }
        this.costBufferDisplay = this.costBufferDisplay.slice(0, -1);
      } else {
        if (
          this.costBufferDisplay.length === 0 &&
          (input == "+" || input == "x" || input == "-")
        ) {
          return;
        }
        let last = this.costBufferDisplay[this.costBufferDisplay.length - 1];
        if (
          (last == "+" || last == "x" || last == "-") &&
          (input == "+" || input == "x" || input == "-")
        ) {
          this.costBufferDisplay = this.costBufferDisplay.slice(0, -1);
        }
        revert = this.costBufferDisplay;
        this.costBufferDisplay += input;
      }
      let str = this.costBufferDisplay;
      let operand = [];
      let operator = [];
      let tempNum = "";
      for (let c of str) {
        if (c == "+" || c == "x" || c == "-") {
          operand.push(parseInt(tempNum));
          operator.push(c);
          tempNum = 0;
        } else {
          tempNum += c;
        }
      }
      operand.push(parseInt(tempNum));
      for (let index = 0; index < operator.length; index++) {
        if (operator[index] == "x" && operand[parseInt(index) + 1] !== 0) {
          operator.splice(parseInt(index), 1);
          operand[index] =
            operand[parseInt(index)] * operand[parseInt(index) + 1];
          operand.splice(parseInt(index) + 1, 1);
          index--;
        }
      }
      for (let index = 0; index < operator.length; index++) {
        if (operator[index] == "+") {
          operator.splice(parseInt(index), 1);
          operand[index] =
            operand[parseInt(index)] + operand[parseInt(index) + 1];
          operand.splice(parseInt(index) + 1, 1);
          index--;
        }
        if (operator[index] == "-") {
          operator.splice(parseInt(index), 1);
          operand[index] =
            operand[parseInt(index)] - operand[parseInt(index) + 1];
          operand.splice(parseInt(index) + 1, 1);
          index--;
        }
      }
      if (this.money / 100000 > 1 && input != -1) {
        this.costBufferDisplay = revert;
      } else {
        this.money = operand[0];
      }
    },
    async apply() {
      if (this.date == "" || this.title == "" || this.money == 0) {
        return;
      }
      let days = ["(日)", "(一)", "(二)", "(三)", "(四)", "(五)", "(六)"];
      let d = new Date(this.date);
      let day_f =
        new Date(d).getFullYear() +
        "-" +
        ("0" + (new Date(d).getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + new Date(d).getDate()).slice(-2);

      let bodyFormData = new FormData();
      bodyFormData.set("revenueTitle", this.title);
      bodyFormData.set("revenueTag", this.categorys[this.categoryIndex].type);
      bodyFormData.set("revenueDate", day_f);
      bodyFormData.set(
        "revenueCost",
        this.selectedIndex === 1 ? this.money : this.money * -1
      );
      bodyFormData.set("revenuePassbook", "現金");
      bodyFormData.set("revenueDescription", this.description);
      // bodyFormData.append("revenueEvidence", this.uploadedFile);
      console.log(
        this.title,
        this.categorys[this.categoryIndex].type,
        day_f,
        this.money,
        this.description,
        this.uploadedFile
      );
      let projectID = this.projectId;
      let newRevenue = await this.$store.dispatch("createRevenue", {
        data: bodyFormData,
        params: { projectID },
      });
      newRevenue = newRevenue.data.data;
      this.$emit("newRevenue", {
        revenueTitle: newRevenue.revenueTitle,
        revenueCost: newRevenue.revenueCost,
        revenueTag: newRevenue.revenueTag,
        revenueStatus: "pending",
        revenueDate: day_f + " " + days[d.getDay()],
        revenueDay: newRevenue.revenueDay,
        revenueMonth: newRevenue.revenueMonth,
        revenueYear: newRevenue.revenueYear,
        revenueDescription: newRevenue.revenueDescription,
      });

      let imageData = new FormData();
      imageData.append("revenueImage", this.uploadedFiles[0]);
      let newRevenueImage = await this.$store.dispatch(
        "revenueImage",
        bodyFormData
      );
      console.log(newRevenue);
      console.log(newRevenueImage);

      this.$emit("collapse");
      this.title = "";
      this.costBufferDisplay = "";
      this.money = 0;
      this.categoryIndex = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$transition: 0.5s;
$radius: 14px;
* {
  background-color: transparent;
}

// .swiper {
//   height: 6vh;
//   width: 90%;
//   background-color: white;
//   box-shadow: 0 0 10px #ececec;
//   border-radius: 14px;
//   .swiper-slide {
//     top: 5px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 90%;
//     height: 6vh;
//     font-size: 20px;
//     .div-cont {
//       min-width: 64%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       img {
//         zoom: 2;
//         &.space {
//           width: 10%;
//         }
//       }
//     }
//   }
// }
.main {
  height: 100%;
  .block {
    box-sizing: border-box;
    padding-top: 1px;
    border-top: #dfdfdf dashed 3px;
    background-color: #fff;
    width: 100%;
    height: 158vw;
    @media (min-height: 500px) {
      .block {
        height: 100%;
      }
    }
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 0 30px 30px;
    .upper {
      height: 92vw;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .type-picker {
        width: 80%;
        margin: 4vw auto -2vw auto;
        padding-right: 10vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        label {
          width: 50%;
          height: 6vw;
          border: 1px solid #00c5b8;
          font-size: 18px;
          display: flex;
          justify-content: center;
          p {
            background-color: transparent;
            display: inline-flex;
            align-items: center;
            &.selectedP {
              color: #fff;
            }
          }
          &:nth-child(1) {
            border-radius: $radius 0 0 $radius;
          }
          &:nth-child(2) {
            border-radius: 0 $radius $radius 0;
          }
          input[type="radio"] {
            display: none;
          }
          &.selected {
            background-color: #00c5b8;
          }
        }
      }
      .cost-block {
        width: 90%;
        margin: 0 auto;
        height: 12vw;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .money-block {
          position: relative;
          width: 45%;
          border-bottom: 1px solid #00c5b8;
          .buffer {
            position: absolute;
            width: 80vw;
            top: -4vw;
            right: 0;
            display: flex;
            justify-content: flex-end;
            text-align: right;
          }
          .cost {
            display: flex;
            justify-content: space-between;
            font-size: 30px;
            color: #00c5b8;
          }
        }
        .inputBlock {
          width: 40vw;
          position: relative;
          box-sizing: border-box;
          transition: 0.3s;
          border: 1px #00c5b8 solid;
          border-radius: 16px 16px 16px 16px;
          &.focus {
            border-radius: 16px 16px 0 0;
          }
          input {
            width: 40vw;
            color: #5d5d5d;
            font-size: 24px;
            line-height: 32px;
            box-sizing: border-box;
            border: 0;
            border-bottom: 0px solid;
            text-align: center;
            &::placeholder {
              color: #00c5b8;
            }
          }
          .desc {
            color: #5d5d5d;
            width: 80vw;
            position: absolute;
            top: 32px;
            left: -2px;
            z-index: 10;
            height: 0vw;
            border: 0px #00c5b8 solid;
            border-radius: 0;
            background-color: #fff;
            transition: 0.3s;
            box-sizing: border-box;
            &.focus {
              height: 36vw;
              padding: 5px 10px;
              border: 2px #00c5b8 solid;
              border-radius: 0 16px 16px 16px;
            }
          }
        }
      }
      .category-block {
        width: 90%;
        margin: 2vw auto;
        // border: 2px dotted #00c5b8;
        border-radius: 16px;
        // border-radius: 4px;
        // box-shadow: 15px 0 10px -15px inset;
        p {
          padding: 2vw;
        }
        .category-bar {
          width: 100%;
          padding-top: 2vw;
          display: flex;
          justify-content: flex-start;
          flex-wrap: nowrap;
          align-items: center;
          overflow: scroll;
          // box-shadow: -15px 0 10px -15px inset;
          &::-webkit-scrollbar {
            -webkit-appearance: none;
          }
          &::-webkit-scrollbar:horizontal {
            height: 7px;
          }
          &::-webkit-scrollbar:vertical {
            width: 0px;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            border: 2px solid white; /* should match background, can't be transparent */
            background-color: #e6e6e6;
          }
          // box-shadow: 0 4px 4px -2px #b3b2b2;
          div {
            max-width: 22%;
            min-width: 22%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon {
              min-width: 36px;
              max-width: 36px;
              height: 36px;
              background-color: #dbdbdb;
              color: #fff;
              border-radius: 50%;
              border: 0;
            }
            input[type="radio"] {
              display: none;
              &:checked ~ .icon {
                // border: 2px red solid;
                background-color: #00c5b8;
                padding: 3px;
              }
            }
          }
        }
      }
      .bottom {
        width: 80vw;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        // .account {
        //   width: 60%;
        // }
        .date_block {
          width: 30%;
          height: 80%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          border-radius: 16px;
          border: 1px solid #00c5b8;
        }
        .evid {
          width: 50%;
          height: 20px;
          border: 1px solid #00c5b8;
          padding: 0 5px;
          border-radius: 16px;
          display: flex;
          overflow: hidden;
          align-items: center;
          justify-content: space-around;
          transition: 0.2s;
          .items {
            width: 70%;
            height: 100%;
            .item {
              height: 20px;
              overflow: hidden;
              display: block;
              white-space: nowrap;
              text-overflow: ellipsis;
              display: flex;
              align-items: center;
              img {
                width: 0px;
                transition: 0.2s;
                &.focus {
                  width: 14px;
                }
              }
            }
          }
          input {
            display: none;
          }
          img {
            width: 100%;
          }
        }
      }
    }
    .collapse {
      position: absolute;
      top: 2%;
      right: 3%;
    }

    .keyboard {
      display: grid;
      grid-template-columns: 26% 26% 26% 22%;
      width: 100%;
      height: 60vw;
      border-radius: 0 0 30px 30px;
      .apply {
        grid-column-start: 3;
        grid-column-end: 5;
        background-color: #00c5b8;
        font-size: 30px;
      }

      overflow: hidden;
      * {
        background-color: #647895;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        border: 1px solid #4d5b70;
      }
    }
  }
}
</style>
