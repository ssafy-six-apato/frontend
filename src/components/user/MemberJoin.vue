<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
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
                  placeholder="아이디 입력"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="사용자이름:" label-for="username">
              <b-form-input
                  id="username"
                  v-model="user.username"
                  required
                  placeholder="사용자이름 입력"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호:" label-for="userpwd">
              <b-form-input
                  type="password"
                  id="userpwd"
                  v-model="user.userpwd"
                  required
                  placeholder="비밀번호 입력"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이메일:" label-for="email">
              <b-form-input
                  id="email"
                  v-model="user.email"
                  required
                  placeholder="이메일 입력"
              ></b-form-input>
            </b-form-group>
            <b-button
                type="button"
                variant="success"
                class="m-1"
                @click="registerUserInfo"
            >회원가입</b-button
            >
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { join } from "@/api/member";
export default {
  name: "MemberJoin",
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
    registerUserInfo() {
      join(
          {
            userid: this.user.userid,
            username: this.user.username,
            userpwd: this.user.userpwd,
            email: this.user.email,
          },
          ({ data }) => {
            let msg = "등록 처리시 문제가 발생했습니다.";
            if (data === "success") {
              msg = "등록이 완료되었습니다.";
            }
            alert(msg);
            this.$router.push({ name: "SignIn" });
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
