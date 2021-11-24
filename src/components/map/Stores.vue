<template>
  <div id="container">
    <b-button id="button" @click="test">바뀐 값 보기</b-button>
    <b-container v-if="storeList && storeList.length != 0" class="bv-example-row mt-3">
      <div class="mb-2">
        <b-form-checkbox v-model="stickyHeader" inline>줄여서 보기</b-form-checkbox>
<!--        <b-form-checkbox v-model="noCollapse" inline>No border collapse</b-form-checkbox>-->
      </div>
      <b-table
          :sticky-header="stickyHeader"
          :no-border-collapse="noCollapse"
          responsive
          :items="storeList"
          :fields="fields"></b-table>
<!--      <stores-row-->
<!--          v-for="(store, index) in storeList"-->
<!--          :key="index"-->
<!--          :store="store"-->
<!--      ></stores-row>-->
    </b-container>
  </div>
</template>

<script>
import {mapState} from "vuex";
// import StoresRow from "@/components/map/StoresRow"

export default {
  name: "Stores",
  components:{
    // StoresRow
  },
  data(){
    return{
      stickyHeader : true,
      noCollapse : true,
      fields : [{key : 'indsLclsNm', label : '종류'},
        {key : 'ldongNm', label : '동'},
        {key : 'bizesNm', label : '이름'}]
    }
  },
  created() {
    // this.$store.dispatch("storesStore/getStoreList",this.houseInfo)
    // this.$store.dispatch("storesStore/clearHouseInfos")
  },
  computed:{
  ...mapState("storesStore",["houseInfo","storeList"]),
  },
  updated() {
    // this.$store.dispatch("storesStore/getStoreList",this.houseInfo)
    // console.log(this.storeList)

  },
  methods:{
    test(){
      this.$store.dispatch("storesStore/getStoreList",this.houseInfo)
    }
  }
}
</script>

<style scoped>
#button{
  margin-left: 8rem;
}
#container{
  margin-left: 8rem;
}
</style>
