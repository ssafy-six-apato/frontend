<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img
              src="@/assets/apato.png"
              class="d-inline-block align-middle"
              width="90px"
              alt="Kitten"
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
          ><router-link :to="{ name: 'Home' }" class="link"
          ><b-icon icon="house" font-scale="1"></b-icon> HOME</router-link
          ></b-nav-item
          >
          <b-nav-item href="#"
          ><router-link :to="{ name: 'Board' }" class="link"
          ><b-icon icon="journal" font-scale="1"></b-icon>
            커뮤니티</router-link
          ></b-nav-item
          >
          <b-nav-item href="#"
          ><router-link :to="{ name: 'SearchStores' }" class="link"
          ><b-icon icon="search" font-scale="1"></b-icon>
            아파트 주변 상권 검색하기</router-link
          ></b-nav-item
          >
          <b-nav-item href="#"
          ><router-link :to="{ name: 'House' }" class="link"
          ><b-icon icon="house-fill" font-scale="1"></b-icon>
            아파트정보</router-link
          ></b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="userInfo">
          <b-nav-item class="align-self-center"
          ><b-avatar
              variant="primary"
              v-text="userInfo ? userInfo.userid.charAt(0).toUpperCase() : ''"
          ></b-avatar
          >{{ userInfo.username }}({{ userInfo.userid }})님
            환영합니다.</b-nav-item
          >
          <b-nav-item class="align-self-center"
          ><router-link
              :to="{ name: 'MyPage' }"
              class="align-self-center"
          >내정보보기</router-link
          ></b-nav-item
          >
          <b-nav-item
              class="link align-self-center"
              @click.prevent="onClickLogout"
          >로그아웃</b-nav-item
          >
        </b-navbar-nav>
        <!-- <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="people" font-scale="2"></b-icon>
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'SignUp' }" class="link"
                ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'SignIn' }" class="link"
                ><b-icon icon="key"></b-icon> 로그인</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
        <b-navbar-nav class="ml-auto" v-else>
          <!-- <template #button-content>
            <b-icon icon="people" font-scale="2"></b-icon>
          </template> -->
          <!-- <router-link :to="{ name: 'SignUp' }" class="link"
              ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
            >
            <router-link :to="{ name: 'SignIn' }" class="link"
              ><b-icon icon="key"></b-icon> 로그인</router-link
            > -->
          <b-button variant="outline-primary" @click="moveSignUp" m>로그인</b-button>
          <b-col></b-col>
          <b-button variant="outline-primary" @click="moveSignIn">회원가입</b-button>
          <b-col></b-col>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

const memberStore = "memberStore";

export default {
  name: "NaviBar",
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    onClickLogout() {
      this.SET_IS_LOGIN(false);
      this.SET_USER_INFO(null);
      sessionStorage.removeItem("access-token");
      if (this.$route.path != "/") this.$router.push({ name: "Home" });
    },
    moveSignIn(){
      this.$router.push({ name: "SignUp" });
    },
    moveSignUp(){
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>

<style>
.navbar.navbar-dark.bg-dark{
  background-color: #0E4289!important;
}
.link{
  color: #FFFFFF;
  /*font-weight: bold;*/
}
.nav-link{
  color: #4C4C4C;
}

</style>
