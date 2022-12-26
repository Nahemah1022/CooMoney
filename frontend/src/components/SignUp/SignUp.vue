<template>
  <div class="main">
    <Header :title="'CooMoney'" @back="$router.go(-1)"></Header>
    <div class="block">
      <h1 class="title">Sign Up</h1>
      <div>
        <!-- <div class="buttons">
          <img class="fb" src="@/assets/image/Login/fb_icon.svg" alt />
          <img class="google" src="@/assets/image/Login/google_icon.svg" alt />
        </div> -->
        <br />
        <div class="input-block">
          <input
            placeholder="   Your Email"
            type="email"
            v-model="signUpData.email"
          />
          <br />
          <br />
          <input
            placeholder="   Password"
            type="password"
            v-model="signUpData.password"
          />
          <br />
          <br />
          <input
            placeholder="   Username"
            type="text"
            v-model="signUpData.username"
          />
        </div>
        <div class="wrapper">
          <div class="date" @click="chooseDate()">
            <h1 v-if="dateShow">Birth Date</h1>
            <label class="choose" v-if="!dateShow">
              <datepicker v-model="date" :format="'yyyy-MM-dd'"></datepicker>
              <font-awesome-icon
                icon="calendar-day"
                size="sm"
                style="color: #00c5b8"
              />
            </label>
          </div>
          <div class="Gender">
            <label class="switch">
              <input type="checkbox" v-model="gender" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import axios from "@/store/axios";
import Datepicker from "vuejs-datepicker";
export default {
  name: "SignUp",
  components: {
    Header,
    Datepicker,
  },
  data() {
    return {
      gender: true,
      dateShow: true,
      date: new Date(),
    };
  },
  computed: {
    signUpData() {
      return this.$store.state.signUp;
    },
  },
  methods: {
    chooseDate() {
      this.dateShow = false;
      console.log(this.dateShow);
    },
    async signUp() {
      if (this.gender) {
        this.$store.state.signUp.userGender = "FEMALE";
      } else {
        this.$store.state.signUp.userGender = "MALE";
      }

      let responseSignUp = await this.$store.dispatch("signUp");
      console.log(responseSignUp);
      if (responseSignUp.data.status == 200) {
        console.log(responseSignUp);
        this.$store.state.loginData.email = responseSignUp.data.data.email;
        this.$store.state.loginData.password = this.$store.state.signUp.password;
        let response = await this.$store.dispatch("login");
        if (response.data.status == 200) {
          this.$cookies.set("token", response.data.data.token, "1d");
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("username", responseSignUp.data.data.username);
          localStorage.setItem("email", responseSignUp.data.data.email);
          localStorage.setItem("userPhoto", responseSignUp.data.data.userPhoto);
          axios.defaults.headers["Authorization"] =
            "Bearer " + response.data.data.token;
          this.$router.push("/Home");
        } else {
          this.error();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  width: 85%;
  height: 90vh;
  margin: 0 auto;
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .wrapper {
    display: flex;
    position: relative;
    top: 5%;
    padding: 0 5%;
    justify-content: space-between;
    width: 90%;
    //background-color: red;
    .Gender {
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      left: 5%;
      //background-color: black;
      .switch {
        input {
          display: none;
          /* transform: translateX(300px); */
        }
        input:checked + .slider:before {
          //+ is choosed the next element css
          transform: translateX(70%);
        }
        input:checked + .slider:after {
          //+ is choosed the next element css
          transform: translateX(5%);
          content: "Female";
        }

        .slider {
          &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background-color: white;
            border-radius: 30vw;

            transform: translateX(-70%);
            transition: 1s;
          }
          &:after {
            content: "Male";
            color: white;

            line-height: 4vh;
            font-size: 3vh;
            position: absolute;
            width: 100%;
            height: 100%;
            //background-color: red;
            transform: translateX(50%);
            transition: 1s;
          }
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 30vw;
          //box-shadow: 0 0 0 2px #777, 0 0 4px #777;
          cursor: pointer;
          border: 4px solid transparent;
          background-color: #00c5b8;
          overflow: hidden;
        }

        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;

        //background-color: green;
        //margin: 8vw;
        //transform: translateY(50%);
      }
    }
    .space {
      width: 5%;
    }
    .date {
      position: relative;
      right: 5%;
      width: 100%;
      border: 1px solid #00c5b8;
      line-height: 44px;
      border-radius: 30px;
      .choose {
        width: 100%;
        height: 100%;
      }
      h1 {
        font-size: 3vh;
        text-align: center;
        color: #8d8d8d;
        font-weight: lighter;
      }
      input {
        //color: transparent;
        //display: none;
      }
    }
  }
  h1 {
    font-size: 44px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .input-block {
    input {
      width: 90%;
      border: 1px solid #00c5b8;
      line-height: 44px;
      border-radius: 30px;
      padding: 0 5%;
      font-size: 18px;
    }
    .p2 {
      color: #8d8d8d;
      text-align: right;
      margin-top: 1vh;
    }
  }
  .p1 {
    color: #8d8d8d;
    text-align: center;
    margin: 2vh;
    font-size: 14px;
  }
  button {
    color: #fff;
    font-size: 20px;
    width: 70%;
    margin: 0 auto;
    border: 1px solid #00c5b8;
    background-color: #00c5b8;
    line-height: 40px;
    border-radius: 30px;
    margin-top: 0vh;
    margin-bottom: 10vh;
  }
  p {
    color: #8d8d8d;
    text-align: center;
  }
}
</style>
