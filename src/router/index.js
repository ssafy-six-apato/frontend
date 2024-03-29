import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import SearchStores from "@/views/SearchStores.vue";

import Member from "@/views/Member.vue";
import MemberLogin from "@/components/user/MemberLogin.vue";
import MemberJoin from "@/components/user/MemberJoin.vue";
import MemberMyPage from "@/components/user/MemberMyPage.vue";
import MemberUpdate from "@/components/user/MemberUpdate.vue";

import Board from "@/views/Board.vue";
// import BoardList from "@/components/board/BoardList.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
import BoardView from "@/components/board/BoardView.vue";
import BoardUpdate from "@/components/board/BoardUpdate.vue";
import BoardHottest from "@/components/board/BoardHottest";

import List from "@/components/board/List.vue";
import BoardLink from "@/components/board/BoardLink.vue";

import House from "@/views/House.vue";

import store from "@/store/index.js";

Vue.use(VueRouter);

// https://router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
  // console.log(store);
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const getUserInfo = store._actions["memberStore/getUserInfo"];
  let token = sessionStorage.getItem("access-token");
  if (checkUserInfo == null && token) {
    await getUserInfo(token);
  }
  if (checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    // next({ name: "SignIn" });
    router.push({ name: "SignIn" });
  } else {
    console.log("로그인 했다.");
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/searchStores",
    name: "SearchStores",
    component: SearchStores,
  },
  {
    path: "/user",
    name: "Member",
    component: Member,
    children: [
      {
        path: "singin",
        name: "SignIn",
        component: MemberLogin,
      },
      {
        path: "singup",
        name: "SignUp",
        component: MemberJoin,
      },
      {
        path: "update",
        name: "Update",
        beforeEnter: onlyAuthUser,
        component: MemberUpdate,
      },
      {
        path: "mypage",
        name: "MyPage",
        beforeEnter: onlyAuthUser,
        component: MemberMyPage,
      },
    ],
  },
  {
    //BoardHottest
    path: "/board",
    name: "Board",
    component: Board,
    //redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "List",
        component: List,
      },
      {
        path: "boardlink" ,
        name: "BoardLink",
        component: BoardLink,
      },

    ],
  },
  {
    path: "/board/BoardHottest",
    name: "BoardHottest",
    component: BoardHottest,
  },
  {
    path: "/board/write",
    name: "BoardWrite",
    beforeEnter: onlyAuthUser,
    component: BoardWrite,
  },
  {
    path: "/board/detail/:articleno",
    name: "BoardView",
    beforeEnter: onlyAuthUser,
    component: BoardView,
  },
  {
    path: "/board/update/:articleno",
    name: "BoardUpdate",
    beforeEnter: onlyAuthUser,
    component: BoardUpdate,
  },
  {
    path: "/house",
    name: "House",
    component: House,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
