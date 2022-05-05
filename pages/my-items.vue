<template>
  <div class="container">
    <MyItem v-for="item in myRental" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "no-nav",
  computed: {
    ...mapState(["myRental"]),
  },
};
</script>

<style scoped>
.container {
  padding: 5rem 0;
}
</style>
