<template>
  <div class="main">
    <img src="@/assets/image/Login/hover01.png" />
    <div class="btn-container">
      <p class="title">Keep Track Of Money</p>
      <p class="subtitle">Tracking every expenses your organization have</p>
      <button class="guest-btn" @click="LoginAsGuest">Guest</button>
      <button class="login" @click="Login">Log In</button>
      <button class="signup" @click="SignUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from '@/store/axios';
export default {
  name: "Index",
  methods: {
    LoginAsGuest() {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTAxOTA5MTg0YmI4M2QxYThmYTFiMyIsImlhdCI6MTY5MjQ3OTUwOSwiZXhwIjozMzg0OTYyNjE4fQ.hIn_UlxoDrXUe3HnB7tzp-q4pkt2Fiwb4iQsnuJFXkM";
      this.$cookies.set("token", token, "1d");
      localStorage.setItem("token", token);
      axios.defaults.headers['Authorization'] = 'Bearer ' + token;
      this.$router.push("/Home");
    },
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

img {
  width: 90vw;
  margin: 0 auto;
}

.title {
  font-size: 5vw;
  font-weight: bold;
  margin-top: 5px;
  color: #0eb9ab;
}

.subtitle {
  font-size: 3vw;
  font-weight: bold;
  margin-top: 5px;
  color: #0eb9ab;
}

.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 25vh;
}

button {
  font-size: 5vw;
  font-weight: normal;
  border-radius: 5vw;
  width: 50vw;
  height: 10vw;
  margin-top: 5px;
  color: rgb(153, 153, 153);
  background-color: #ffffff;
  border-color: #0eb9ab;
}

.guest-btn {
  background-color: rgb(106, 106, 248);
  color: #FFF;
}

</style>
