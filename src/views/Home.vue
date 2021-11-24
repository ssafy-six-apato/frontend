<template>
  <b-container className="bv-example-row mt-3">
    <b-row>
      <b-alert show><h3>오늘의 부동산 이슈</h3></b-alert>
    </b-row>
    <b-row>
      <b-table-simple>
        <tbody>
        <!-- 하위 component인 ListRow에 데이터 전달(props) -->
        <news-list
            v-for="(newsTitle, index) in newsTitles"
            :key="index"
            v-bind="newsTitle"
        />
        </tbody>
      </b-table-simple>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import NewsList from "@/components/home/NewsList";
import {listNews} from "@/api/news.js";

export default {
  name: "Main",
  components: {
    NewsList,
  },
  data() {
    return {
      newsTitles: [],
    };
  },
  created() {
    let param = {
      key: null,
    };
    listNews(
        param,
        (response) => {
          //console.log(response.data);
          this.newsTitles = response.data;
        },
        (error) => {
          console.log(error);
        }
    );
  },
};
</script>
<style scope></style>
