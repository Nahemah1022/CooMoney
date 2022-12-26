<template>
  <div class="buttons">
    <label class="fb">
      <img class="google" src="@/assets/image/Login/fb_icon.svg" alt />
      <facebook-login
        v-show="false"
        appId="632957427307793"
        @login="onLogin"
        @logout="onLogout"
        @sdk-loaded="sdkLoaded"
        :send="sendProps()"
      ></facebook-login>
    </label>
  </div>
</template>

<script>
import "@/assets/css/global.scss";
import facebookLogin from "facebook-login-vuejs";
export default {
  name: "App",
  components: { facebookLogin },
  data() {
    return {
      //FB
      isConnected: false,
      name: "",
      email: "",
      personalID: "",
      picture: "",
      FB: undefined
    };
  },
  methods: {
    sendProps() {
      this.$emit("getFbProp", {
        id: this.personalID,
        email: this.email,
        name: this.name,
        pic: this.picture
      });
    },
    //FB function
    getUserData() {
      this.FB.api(
        "/me",
        "GET",
        { fields: "id,name,email,picture" },
        userInformation => {
          this.personalID = userInformation.id;
          this.email = userInformation.email;

          this.name = userInformation.name;
          //console.log(this.name);
          this.picture = userInformation.picture.data.url;
          this.$store.commit("setHeadshot", this.picture);
        }
      );
      //console.log(this.email);
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
    }
  }
};
</script>

<style>
#app {
  position: relative;
  margin: 0 auto;
  background: #fff;
}
</style>
