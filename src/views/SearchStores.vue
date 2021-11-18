<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-green">
      <b-icon icon="search"></b-icon> 아파트 주변 상권 검색하기
    </h3>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-jumbotron
          bg-variant="muted"
          text-variant="dark"
          border-variant="dark"
        >
          <template #header>상권 입력</template>

          <hr class="my-4" />

          <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row>
              <b-col align-h="center">
                <b-input-group >
                  <template #prepend>
                    <b-dropdown
                        v-model="test"
                        :options="menus"
                        text="카테고리 선택" variant="info" class="w-25" >
                      <b-dropdown-item>카페</b-dropdown-item>
                      <b-dropdown-item>음식점</b-dropdown-item>
                    </b-dropdown>
                  </template>
                  <b-form-input ></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
          </b-container>


          <map name="">안녕</map>
        </b-jumbotron>
      </b-col>
      <kakao-map align-w="center"></kakao-map>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap"

export default {
  name: "SearchStores",
  components:{
    KakaoMap
  },
  data(){
    return{
      test : "",
      menus : []
    }
  }
};
</script>

<style scoped>
.underline-green {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(56, 233, 40, 0.3) 30%
  );
}
</style>
