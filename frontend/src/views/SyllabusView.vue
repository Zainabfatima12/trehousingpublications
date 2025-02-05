<template>
  <Header />
  <syllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import syllabusPdf from "@/components/syllabus/syllabusPdf.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    syllabusPdf,
    Footer,
  },
};
</script>

<style></style>
