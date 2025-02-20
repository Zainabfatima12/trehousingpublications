<template>
  <Header />
  <HeaderDropdown />
  <downloadAttempt />
  <faq/>

  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import faq from'@/components/SolvedPaper/FAQ.vue';
import downloadAttempt from '@/components/SolvedPaper/DownloadAttempt.vue';
import HeaderDropdown from '@/components/SolvedPaper/HeaderDropdown.vue';
export default {
  name: "SolvedPaperView",
  components: {
    Header,
    faq,
    downloadAttempt,
    HeaderDropdown,

    Footer,
  },
};
</script>

<style></style>
