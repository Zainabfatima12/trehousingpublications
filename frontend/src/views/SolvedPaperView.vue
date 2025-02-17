<template>
  <Header />
  <faq/>


  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import faq from'@/components/SolvedPaper/FAQ.vue';

export default {
  name: "SolvedPaperView",
  components: {
    Header,
    faq,
   

    Footer,
  },
};
</script>

<style></style>
