<template>
  <Header/>
  <HeroSec />
  <AboutUs />
  <MissionVision/>
  <RefBook />
  <NewsLetter />
  <Footer/>
</template>

<script>
import HeroSec from "./components/Homepage/HeroSec.vue";
import RefBook from "./components/Homepage/RefBook.vue";
import AboutUs from "./components/Homepage/AboutUs.vue";
import NewsLetter from "@/components/Homepage/NewsLetter.vue";
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import MissionVision from "@/components/MissionVision.vue";

export default {
  name: "HomePageView",
  components: {
    Header,
    AboutUs,
    MissionVision,
    HeroSec,
    RefBook,
    NewsLetter,
    Footer,
   
  },
};
</script>

<style></style>
