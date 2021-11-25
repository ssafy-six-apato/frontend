<template>
  <b-row
    class="m-2"
    @click="selectHouse"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="2" class="text-center align-self-center">
<!--      <b-img-->
<!--        thumbnail-->
<!--        src="https://picsum.photos/250/250/?image=58"-->
<!--        alt="Image 1"-->
<!--      ></b-img>-->
      <b-iconstack font-scale="2" animation="throb">
        <b-icon stacked icon="building" variant="info" scale="0.75" shift-v="-0.25"></b-icon>
      </b-iconstack>
    </b-col>
    <b-col cols="10" class="align-self-center">
      {{ house.아파트 }}
    </b-col>
  </b-row>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "HouseListRow",
  data() {
    return {
      isColor: false,
    };
  },
  created() {
    console.log("housListRow= " + this.randomNum)
  },
  props: {
    house: Object,
  },
  methods: {
    ...mapActions("houseStore", ["detailHouse"]),
    ...mapState("houseStore",["randomNum"]),
    selectHouse() {
      // console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      this.detailHouse(this.house);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
