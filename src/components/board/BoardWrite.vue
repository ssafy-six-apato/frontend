<template>
  <b-container className="bv-example-row mt-3">
    <b-row>
    </b-row>
    <board-write-form type="register"/>
  </b-container>
</template>

<script>
import BoardWriteForm from "./child/BoardWriteForm.vue";

export default {
  name: "BoardWrite",
  components: {
    BoardWriteForm,
  },
};
</script>

<style></style>
