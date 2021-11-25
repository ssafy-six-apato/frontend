<template>
  <b-tr>
    <b-td>
      <a class="link2" v-bind:href="url">{{ newstitle }}</a>
    </b-td>
  </b-tr>
</template>

<script>
export default {
  name: "List",
  props: {
    newstitle: String,
    url: String,
  },
};
</script>
<style>
.link2 {
  color: #4c4c4c;
}</style>
