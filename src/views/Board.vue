<!-- <template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-hotpink">
      <b-icon icon="journals"></b-icon> Board Service
    </h3>
    <router-view></router-view>
  </b-container>
</template>
<script>
export default {
  name: "Board",
};
</script>
<style scoped>
.underline-hotpink {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(231, 27, 139, 0.3) 30%
  );
}
</style> -->
<!-- <template>
  <div class="about">
    <h1>커뮤니티 페이지</h1>
    <router-view/>
    <board-link/>
  </div>
</template> -->

<template>
  <b-container class="bv-example-row mt-3 text-center">
    <b-alert show variant="light"></b-alert>
    <h3 class="underline-orange">
      <b-icon icon="journal"></b-icon> Community</h3>
    <b-row class="mb-1">
    </b-row>
    <router-view/>
    <board-link></board-link>
  </b-container>

</template>


<script>
// @ is an alias to /src
import BoardLink from "@/components/board/BoardLink.vue";
//import List from "@/components/board/List.vue";
export default {
  name: "Board",
  components: {
    BoardLink
  },

};
</script>
<style scope>
</style>
