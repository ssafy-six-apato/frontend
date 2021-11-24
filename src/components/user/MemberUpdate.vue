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
//import { modifyUserinfo } from "@/api/member";
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
  name: "MemberUpdate",
  computed: {
    ...mapState(memberStore, ["userInfo"]),
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
  methods: {
    moveList() {
      this.$router.push({ name: "MyPage" });
    },
  },
};
</script>

<style></style>
