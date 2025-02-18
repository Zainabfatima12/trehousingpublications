<template>
  <Header />
  <downloadAttempt />
  <faq/>

  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import faq from'@/components/SolvedPaper/FAQ.vue';
import downloadAttempt from '@/components/SolvedPaper/DownloadAttempt.vue';

export default {
  name: "SolvedPaperView",
  components: {
    Header,
    faq,
    downloadAttempt,

    Footer,
  },
};
</script>

<style></style>
