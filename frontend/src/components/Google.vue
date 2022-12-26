<template>
  <div class="buttons">
    <label>
      <img class="google" src="@/assets/image/Login/google_icon.svg" alt />
      <GoogleLogin
        v-show="false"
        :params="params"
        :onSuccess="onSuccess"
      ></GoogleLogin>
    </label>
  </div>
</template>

<script>
import "@/assets/css/global.scss";
import GoogleLogin from "vue-google-login";
export default {
  name: "App",
  components: { GoogleLogin },
  data() {
    return {
      //google
      name: "",
      email: "",
      personalID: "",
      picture: "",
      params: {
        client_id:
          "1029131813912-i7g1k358ad467mk9on0r1ht9jj55akoq.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    //google function
    async onSuccess(googleUser) {
      //don't pass this parameter down
      //console.log(googleUser);
      //console.log("fuck");
      // This only gets the user information: id, name, imageUrl and email
      let profile = googleUser.getBasicProfile();
      //console.log(profile.getImageUrl());
      this.name = profile.getName();
      this.personalID = profile.getId();
      this.email = profile.getEmail();
      this.picture = profile.getImageUrl();
      this.$emit("getGoogleProp", {
        id: this.personalID,
        email: this.email,
        name: this.name,
        pic: this.picture,
      });
    },
  },
};
</script>

<style>
#app {
  position: relative;
  margin: 0 auto;
  background: #fff;
}
</style>
