<template>
  <b-container className="bv-example-row mt-3 text-center">
    <h3 className="underline-orange">
      <b-icon icon="house-fill"></b-icon>
      아파트 검색
    </h3>
    <b-row>
      <b-col>
        <house-search-bar></house-search-bar>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" align="left">
        <house-list/>
      </b-col>
      <b-col cols="6">
        <house-detail
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseDetail from "@/components/house/HouseDetail.vue";

export default {
  name: "House",
  components: {
    HouseSearchBar,
    HouseList,
    HouseDetail,
  },
};
</script>
<style scoped>
.underline-orange {
  display: inline-block;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 70%,
      rgba(231, 149, 27, 0.3) 30%
  );
}
</style>
