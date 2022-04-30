<template>
  <div>
    <Nav />
    <!-- cardsSection is props send the data to the child component -->
    <div class="container">
      <Hero />
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id"
        :cardsSection="cardInfo"
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardInfo"
        :key="cardInfo.id"
        :cardsSection="cardInfo"
      />
    </div>
  </div>
</template>

<script>
// if components=true we don't use import and components objects!

import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
  name: "IndexPage",
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    };
  },
};
</script>
