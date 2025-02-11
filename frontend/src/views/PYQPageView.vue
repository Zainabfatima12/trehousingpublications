<template>
  <Header />
  <TreFourZero />
  <PyqOverview />
  <TextTable/>
  
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import TextTable from "@/components/PYQ/TextTable.vue";
import TreFourZero from "@/components/PYQ/TreFourZero.vue";
import PyqOverview from '@/components/PYQ/PyqOverview.vue';

export default {
  name: "SyllabusView",
  components: {
    Header,
    TreFourZero,
    TextTable,
    PyqOverview,

    Footer,
  },
};
</script>

<style></style>
