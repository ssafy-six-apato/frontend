<template>
  <tr>
    <td>{{ articleno }}</td>
    <td>
      <router-link
          :to="{ name: 'BoardView', params: { articleno: articleno } }"
      >{{ subject }}</router-link
      >
    </td>
    <td>{{ hit }}</td>
    <td>{{ userid }}</td>
    <td>{{ regtime }}</td>
  </tr>
</template>

<script>
//import moment from 'moment';
export default {
  name: 'Row',
  props: {
    articleno: Number,
    userid: String,
    subject: String,
    hit: Number,
    regtime: String,
  },
};
</script>
