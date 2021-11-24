<template>
  <b-row
      class="m-2"
      @click="selectHouse"
      @mouseover="colorChange(true)"
      @mouseout="colorChange(false)"
      :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="10" class="align-self-center">
      <tr>
        <td>{{store.indsLclsNm}}</td>
        <td>{{store.ldongNm}}</td>
        <td>{{store.bizesNm}}</td>
      </tr>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "StoresRow",
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    store: Object,
  },
  methods: {
    ...mapActions("storesStore", ["getStoreList"]),

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
