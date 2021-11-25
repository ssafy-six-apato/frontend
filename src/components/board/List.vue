<template>
  <b-container class="bv-example-row mt-3">
    <!-- <b-row>
      <b-col>
        <b-alert show><h3>글목록</h3></b-alert>
      </b-col>
    </b-row> -->
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-secondary" @click="movePage">글쓰기</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="primary" @click="moveHottest()">
          가장 핫한 게시글 보기
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
          <row
              v-for="(article, index) in articles"
              :key="`${index}articles`"
              :articleno="article.articleno"
              :subject="article.subject"
              :hit="article.hit"
              :userid="article.userid"
              :regtime="article.regtime"
          />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
    <div>
    </div>
  </b-container>

</template>
<script>
import http from '@/util/http-common';
import Row from "@/components/board/Row";
export default {
  name: 'List',
  components: {
    Row,
  },
  data: function() {
    return {
      articles: [],
      pageLimit : 10,
      pageOffset : 0,

    };
  },
  created() {
    this.initComponent();
  },
  watch: {
    '$route.query': function(){
      this.initComponent();
    },

  },

  methods: {
    initComponent(){
      http
          .get('/board/boardlink',{
            params: { limit: this.pageLimit, offset: `${this.$route.query.no - this.pageLimit}`}
          })
          .then(({ data }) => {
            this.articles = data
          })
          .catch(() => {
            console.
            alert('으아아가 발생했습니다.');
          });
    },
    movePage() {
      this.$router.push({ name: "BoardWrite" });
    },
    moveHottest(){
      this.$router.push({ name: "BoardHottest" });
    },
  },
};
</script>

<style></style>
