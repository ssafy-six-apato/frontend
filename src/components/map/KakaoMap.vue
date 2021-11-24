<template>
  <div id="map-loc">
    <div id="map-location">
      <button @click="displayMarker(markerPositions1)">마커 찍어서 보기</button>
      <div id="map">
      </div>
    </div>
    <div class="button-group">
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "KakaoMap",
  data() {
    return {
      map: null,
      markers: [],
      infowindow: null,
      markerPositions1: [
      ],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9e46b81f8df91020398c3f171d892a7e";
      document.head.appendChild(script);
    }
  },
  computed:{
      ...mapState("storesStore",["houseInfo","storeList"]),
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    },
    displayMarker(markerPositions) {
      this.markerPositions1 = []
      markerPositions = this.markerPositions1
      this.storeList.forEach((item)=>{
        markerPositions.push([item.lat,item.lon])
      })

      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
          (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
            (position) =>
                new kakao.maps.Marker({
                  map: this.map,
                  position,
                })
        );

        const bounds = positions.reduce(
            (bounds, latlng) => bounds.extend(latlng),
            new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 500px;
  height: 500px;
  margin-left: 17rem;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
