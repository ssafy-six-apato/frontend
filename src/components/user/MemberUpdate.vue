<template>
  <b-container class="bv-example-row mt-3" v-if="userInfo">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원 정보 수정</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-form-group label="아이디:" label-for="userid">
              <b-form-input
                  id="userid"
                  v-model="user.userid"
                  required
                  :disabled="true"
              >userInfo.userid</b-form-input
              >
            </b-form-group>
            <b-form-group label="사용자이름:" label-for="username">
              <b-form-input id="username" v-model="user.username" required>{{
                  userInfo.username
                }}</b-form-input>
            </b-form-group>
            <b-form-group label="이메일:" label-for="email">
              <b-form-input id="email" v-model="user.email" required>{{
                  userInfo.email
                }}</b-form-input>
            </b-form-group>
            <b-button
                type="button"
                variant="success"
                class="m-1"
                @click="moveList"
            >완료</b-button
            >
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { modifyUserinfo } from "@/api/member";
const memberStore = "memberStore";
export default {
  name: "MemberUpdate",
  computed: {
    ...mapState(memberStore, ["userInfo", "isLogin", "isLoginError"]),
  },
  data() {
    return {
      user: {
        userid: null,
        username: null,
        userpwd: null,
        email: null,
      },
    };
  },
  created() {
    this.user.userid = this.userInfo.userid;
    this.user.username = this.userInfo.username;
    this.user.userpwd = this.userInfo.userpwd;
    this.user.email = this.userInfo.email;
  },

  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    update() {
      modifyUserinfo(
          {
            userid: this.user.userid,
            username: this.user.username,
            userpwd: this.user.userpwd,
            email: this.user.email,
          },
          ({ data }) => {
            let msg = "수정 처리시 문제가 발생했습니다.";
            if (data === "success") {
              msg = "수정이 완료되었습니다.";
            }
            this.userInfo.username = this.user.username;
            this.userInfo.email = this.user.email;
            alert(msg);
            // 현재 route를 /list로 변경.
            this.$router.push({ name: "MyPage" });
          },
          (error) => {
            console.log(error);
          }
      );
    },
  },
};
</script>

<style></style>
