<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-green">
      <b-icon icon="search"></b-icon> 아파트 주변 상권 검색하기
    </h3>
    <b-row>
      <b-col></b-col>
      <b-col cols="10" id="jumps">
        <b-jumbotron
          bg-variant="muted"
          text-variant="dark"
          border-variant="dark"
        >
          <template #header>상권 검색</template>
          <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row>
              <b-col>
                <b-input-group >
                  <template #prepend>
                  </template>
<!--                  <select @click="getGeo" id="select-option" v-model="selectedOption">-->
<!--                    <option value="whole">전체</option>-->
<!--                    <option value="cafe">카페</option>-->
<!--                    <option value="food">음식</option>-->
<!--                    <option value="sleep">숙박</option>-->
<!--                    <option value="service">생활서비스</option>-->
<!--                    <option value="edu">학문/교육</option>-->
<!--                  </select>-->
                  <b-form-input v-model="address" ></b-form-input>
                  <b-button @click="getGeo"> 결과 검색하기</b-button>
                </b-input-group>
              </b-col>
            </b-row>
          </b-container>
        </b-jumbotron>
      </b-col>
      <stores></stores>
      <kakao-map></kakao-map>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap"
import Stores from "@/components/map/Stores"
import {mapState} from "vuex";

export default {
  name: "SearchStores",
  components:{
    KakaoMap,
    Stores
  },
  data(){
    return{
      address : "",
      selectedOption : "전체"
    }
  },
  computed:{
    ...mapState("storesStore",["searchInfo"]),
  },
  methods:{
     getGeo(){
       this.$store.dispatch("storesStore/getGeoInfo",this.address) // 위도 경도 설정
       // const params = {lat : this.searchInfo.lat , lng : this.searchInfo.lng}
       // this.$store.dispatch("storesStore/getWholeStore",params)
       // this.getWholeStore() // 위도 경도 설정에 따른 상점목록 갱신
    },
  }

};
</script>

<style scoped>

#jumps{
  margin-right: 5rem;
}

#select-option{
  margin-right: 0.5rem;
}

.underline-green {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(56, 233, 40, 0.3) 30%
  );
}
</style>
