<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveList()">
          원래 게시글 보기
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="articles.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>제목</b-th>
              <b-th>조회수</b-th>
              <b-th>작성자</b-th>
              <b-th>작성일</b-th>
            </b-tr>
          </b-thead>
          <tbody>
          <!-- 하위 component인 ListRow에 데이터 전달(props) -->
          <board-list-row
              v-for="(article, index) in articles"
              :key="index"
              v-bind="article"
          />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import BoardListRow from "@/components/board/child/BoardListRow";
import {hottestArticle} from "@/api/board";

export default {
  name: "BoardList",
  components: {
    BoardListRow,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    hottestArticle(
        (response) => {
          // console.log(response.data.articleno)
          this.articles.push(response.data);
        },
        (error) => {
          console.log(error);
        }
    );
  },
  methods: {
    moveList() {
      this.$router.push({ name: "Board" });
    },
  },
};
</script>

<style scope>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
</style>
