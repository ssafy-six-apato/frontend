<template>
  <b-tr>
    <b-td>
      <a v-bind:href="url">{{ newstitle }}</a>
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
<style></style>
