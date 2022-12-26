<template>
  <div :class="{main: true, show: show}">
    <!-- <p>Judge comment</p> -->
    <textarea
      :class="{disable: status==='rejected' || status==='approved'}"
      :placeholder="placeholderMsg"
      v-model="inputComment"
    ></textarea>
    <div v-if="status==='pending'" class="btns">
      <div class="approve" @click.stop="judge(true)">
        <font-awesome-icon icon="check" size="lg" />Approve
      </div>
      <div class="reject" @click.stop="judge(false)">
        <font-awesome-icon icon="times" size="lg" />Reject
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Judgement",
  data() {
    return {
      placeholderMsg: "",
      inputComment: ""
    };
  },
  props: {
    show: Boolean,
    status: String,
    comment: String
  },
  methods: {
    judge(result) {
      this.$emit("judge", result, this.inputComment);
      this.$emit("toggle");
    }
  },
  mounted() {
    this.placeholderMsg =
      this.status === "pending"
        ? "Write your comment here"
        : this.comment === ""
        ? "No comment"
        : this.comment;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  width: 100%;
  max-height: 0vw;
  // border: 2px solid #000;
  border-radius: 16px;
  // box-shadow: 0 0 6px #cccccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  overflow: hidden;
  transition: 0.3s;
  &.show {
    margin: 10vw 0 0 0;
    max-height: 30vw;
    border: 1px solid gray;
    background-color: #fff;
  }
  .btns {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    .approve {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #57f2cd;
    }
    .reject {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #f25757;
    }
    svg {
      margin-right: 10px;
    }
  }
  textarea {
    width: 100%;
    // margin: 0 0 10px 0;
    border: 0;
    box-sizing: border-box;
    border-bottom: 1px solid gray;
    padding: 10px 15px;
    height: 80%;
    font-size: 18px;
    &::placeholder {
      color: #dbdada;
    }
    &.disable {
      pointer-events: none;
      font-size: 20px;
      border: 0;
      height: auto;
      background-color: transparent;
      &::placeholder {
        color: gray;
      }
    }
  }
}
</style>
