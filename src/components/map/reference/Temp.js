
var root = "";

// 마커를 담을 배열입니다
var markers = [];


var mapContainer = document.getElementById("map"); // 지도를 표시할 div
var mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
};
// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);


