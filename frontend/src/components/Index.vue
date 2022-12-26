<template>
  <div class="main">
    <div class="rwd_slider_container_wrapper">
      <div class="rwd_slider_container">
        <div class="slider_container">
          <div>
            <img
              src="@/assets/image/Login/hover04.png"
              alt="pure css slider"
              width="400"
              height="280"
            />
          </div>
          <div>
            <img
              src="@/assets/image/Login/hover03.png"
              alt="pure css slider"
              width="400"
              height="280"
            />
          </div>
          <div>
            <img
              src="@/assets/image/Login/hover02.png"
              alt="pure css slider"
              width="400"
              height="280"
            />
          </div>
          <div>
            <img
              src="@/assets/image/Login/hover01.png"
              alt="pure css slider"
              width="400"
              height="280"
            />
          </div>
          <div>
            <img
              src="@/assets/image/Login/hover01.png"
              alt="pure css slider"
              width="400"
              height="280"
            />
          </div>
        </div>
        <!-- end of .slider_container -->
      </div>
      <!-- end of .rwd_slider_container -->
    </div>
    <!-- rwd_slider_container_wrapper-->

    <p class="title">Keep Track Of Money</p>
    <p class="subtitle">Tracking every expenses you have and understand your spending pattern</p>
    <button class="login" @click="Login">Log In</button>
    <button class="signup" @click="SignUp">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    Login() {
      if (localStorage.getItem("username")) {
        localStorage.removeItem("username");
      }
      if (localStorage.getItem("email")) {
        localStorage.removeItem("email");
      }
      if (localStorage.getItem("userPhoto")) {
        localStorage.removeItem("userPhoto");
      }
      this.$router.push("/Login");
    },
    SignUp() {
      if (localStorage.getItem("username")) {
        localStorage.removeItem("username");
      }
      if (localStorage.getItem("email")) {
        localStorage.removeItem("email");
      }
      if (localStorage.getItem("userPhoto")) {
        localStorage.removeItem("userPhoto");
      }
      this.$router.push("/SignUp");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 5vh;
  width: 100vw;
  height: 90vh;
  position: absolute;
  background-color: #ffffff;
}

.slider_container {
  margin: 30px auto;
  width: 400px;
  height: 280px;
  position: relative;
  border: 20px solid;
  border-color: #fff;
  border-bottom-width: 100px;
  background-color: #ffffff;
  box-sizing: content-box;
}
.slider_container div {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-animation: round 25s linear infinite;
  animation: round 25s linear infinite;
}
.slider_container div img {
  width: 100%;
  height: auto;
  display: block;
}
@-webkit-keyframes round {
  4% {
    opacity: 1;
    filter: alpha(opacity=100);
    /* 0 - 1秒 淡入*/
  }
  20% {
    opacity: 1;
    filter: alpha(opacity=100);
    /* 1- 5秒靜止*/
  }
  24% {
    opacity: 0;
    filter: alpha(opacity=0);
    /* 5-6秒淡出*/
  }
}
@keyframes round {
  4% {
    opacity: 1;
    filter: alpha(opacity=100);
    /* 0 - 1秒 淡入*/
  }
  20% {
    opacity: 1;
    filter: alpha(opacity=100);
    /* 1- 5秒靜止*/
  }
  24% {
    opacity: 0;
    filter: alpha(opacity=0);
    /* 5-6秒淡出*/
  }
}
.slider_container div:nth-child(4) {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}
.slider_container div:nth-child(3) {
  -webkit-animation-delay: 10s;
  animation-delay: 10s;
}
.slider_container div:nth-child(2) {
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
}
.slider_container div:nth-child(1) {
  -webkit-animation-delay: 20s;
  animation-delay: 20s;
}
.slider_container span {
  background: #fff;
  position: absolute;
  left: 0%;
  top: 280px;
  width: 400px;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  -webkit-transform: scaleY(0);
  -ms-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.slider_container:hover span {
  width: 100%;
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
}
.slider_container:hover div {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
.rwd_slider_container_wrapper {
  width: 440px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  background-color: #ffffff;
}
.rwd_slider_container {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: calc(70% + 100px);
}
.rwd_slider_container .slider_container {
  box-shadow: none;
  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background-color: #ffffff;
}
.rwd_slider_container .slider_container div {
  width: 100%;
  line-height: 0;
}
.rwd_slider_container .slider_container span {
  top: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.title {
  position: absolute;
  font-size: 5vw;
  font-weight: bold;
  top: 48vh;
  left: 24vw;
  padding: 0;
  color: #0eb9ab;
  background-color: #ffffff;
}

.subtitle {
  position: absolute;
  font-size: 3vw;
  font-weight: bold;
  top: 55vh;
  left: 12vw;
  padding: 0;
  color: #0eb9ab;
  background-color: #ffffff;
}

.login {
  position: absolute;
  font-size: 5vw;
  font-weight: normal;
  border-radius: 5vw;
  width: 50vw;
  height: 10vw;
  top: 65vh;
  left: 25vw;
  padding: 0;
  color: rgb(153, 153, 153);
  background-color: #ffffff;
  border-color: #0eb9ab;
  box-shadow: none;
}
.signup {
  position: absolute;
  font-size: 5vw;
  font-weight: normal;
  border-radius: 5vw;
  width: 50vw;
  height: 10vw;
  top: 72vh;
  left: 25vw;
  padding: 0;
  color: rgb(153, 153, 153);
  background-color: #ffffff;
  border-color: #0eb9ab;
}
</style>
