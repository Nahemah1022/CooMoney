<template>
  <div class="main">
    <Header :title="'CooMoney'" @back="$router.push('/')"></Header>
    <div class="block">
      <h1 class="title">Log In</h1>
      <div class="buttons">
        <FB @getFbProp="getProp"></FB>
        <Google @getGoogleProp="getProp"></Google>
      </div>
      <div>
        <p class="p1">or login with email.</p>
        <div class="input-block">
          <input
            placeholder="Your Email"
            type="email"
            v-model="loginData.email"
          />
          <br />
          <br />
          <input
            placeholder="Your Password"
            type="password"
            v-model="loginData.password"
          />
          <p class="p2" v-if="showForgot" @click="sendInfor">
            Forgot your password?
          </p>
          <p :class="textAni()" v-if="showError">
            incorrect account or password!
          </p>
        </div>
      </div>

      <button @click="Login">Log In</button>
      <p class="dont" id="dont">
        Don't have an account?
        <span @click="SignUp">Sign up</span>
      </p>

      <!-- <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import FB from "@/components/FB.vue";
import Google from "@/components/Google.vue";
import axios from '@/store/axios';
export default {
  name: "Login",
  components: {
    Header,
    FB,
    Google,
  },
  computed: {
    loginData() {
      return this.$store.state.loginData;
    },
  },
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "incorrect account or password!",

      name: "",
      email: "",
      personalID: "",
      picture: "",

      showForgot: false,
      showError: false,
      showAni: false,

      time: null,
    };
  },
  methods: {
    async getProp(data) {
      let response;
      if (data.email) {
        response = await this.$store.dispatch("checkUser", {
          email: data.email,
          username: data.name,
          password: data.id,
          userPhoto: data.pic,
        });
        if (response.data.data.isExist) {
          this.$cookies.set("token", response.data.data.token, "1d");
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("username", response.data.data.username);
          localStorage.setItem("email", response.data.data.email);
          localStorage.setItem("userPhoto", response.data.data.userPhoto);
          axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.data.token;
          this.$router.push("/Home");
        } else {
          this.$store.state.signUp.email = response.data.data.email;
          this.$store.state.signUp.username = response.data.data.username;
          this.$store.state.signUp.password = response.data.data.password;
          this.$store.state.signUp.userPhoto = response.data.data.userPhoto;
          this.$store.state.signUp.userGender = 'MALE';
          let responseSignUp = await this.$store.dispatch("signUp");
          if (responseSignUp.data.status == 200) {
            this.$store.state.loginData.email = response.data.data.email;
            this.$store.state.loginData.password = response.data.data.password;
            let responseLogin = await this.$store.dispatch("login");
            if (responseLogin.data.status == 200) {
              this.$cookies.set("token", responseLogin.data.data.token, "1d");
              localStorage.setItem("username", response.data.data.username);
              localStorage.setItem("email", response.data.data.email);
              localStorage.setItem("userPhoto", response.data.data.userPhoto);
              localStorage.setItem("token", responseLogin.data.data.token);
              axios.defaults.headers['Authorization'] = 'Bearer ' + responseLogin.data.data.token;
              this.$router.push("/Home");
            } else {
              this.error();
            }
          }
        }
      }
    },
    async Login() {
      let response = await this.$store.dispatch("login");
      console.log(response);
      if (response.data.status == 200) {
        this.$cookies.set("token", response.data.data.token, "1d");
        localStorage.setItem("token", response.data.data.token);
        this.$router.push("/Home");
        axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.data.token;
      } else {
        this.error();
      }
    },
    error() {
      //console.log(this.username);
      //if not enroll by fb before enroll automatic,else login in directly
      this.showError = true;
      this.showForgot = true;
      this.showAni = true;
      this.timer();
    },
    timer() {
      //let my = this;
      this.time = setTimeout(() => {
        // do something...
        this.showAni = false;
      }, 500);
    },
    textAni() {
      if (!this.showAni) return "p3";
      else return "p3Shake";
    },
    SignUp() {
      this.$router.push("/SignUp");
    },
    sendInfor() {
      alert("你以為我會寄密碼給你嗎?並沒有，我只是想讓你點進來而已");
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
    .p3Shake {
      color: red;
      //text-align: right;
      margin-top: 1vh;
      animation: shake 0.5s;
      animation-iteration-count: infinite;
    }
    .p3 {
      color: red;
      //@extendtext-align: right;

      margin-top: 1vh;
      //animation: shake 1s;
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
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
