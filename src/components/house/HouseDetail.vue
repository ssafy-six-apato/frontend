<template>
  <b-container v-if="house" class="bv-example-row">
    <b-row class="mb-2 mt-1">
      <b-col>
        <b-img :src="require(`@/assets/apts/${this.randomNum}.jpeg`)" fluid-grow></b-img>
<!--        <kakao-map-house></kakao-map-house>-->
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary"
          >일련번호 : {{ house.일련번호 }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary"
          >아파트 이름 : {{ house.아파트 }}
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">법정동 : {{ house.법정동 }} </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">층수 : {{ house.층 }}층</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="danger"
          >거래금액 :
          {{
            (parseInt(house.거래금액.replace(",", "")) * 10000) | price
          }}원</b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
// import KakaoMapHouse from "@/components/map/KakaoMapHouse";

export default {
  name: "HouseDetail",
  components:{
    // KakaoMapHouse
  },
  computed: {
    ...mapState("houseStore", ["house","randomNum"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
  methods:{
    test(){
      console.log(this.randomNum)
    }
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
