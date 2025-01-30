<template>
  <HeroSec />
  <AboutUs />
  <RefBook />
  <NewsLetter />
</template>

<script>
import HeroSec from "./components/Homepage/HeroSec.vue";
import RefBook from "./components/Homepage/RefBook.vue";
import AboutUs from "./components/Homepage/AboutUs.vue";
import NewsLetter from "@/components/Homepage/NewsLetter.vue";

export default {
  name: "HomePageView",
  components: {
    AboutUs,
    HeroSec,
    RefBook,
    NewsLetter,
  },
};
</script>

<style></style>
