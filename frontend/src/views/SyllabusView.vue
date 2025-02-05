<template>
  <Header />
  <SyllabusHigherSecondary/>
  <syllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import syllabusPdf from "@/components/syllabus/syllabusPdf.vue";
import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    SyllabusHigherSecondary,
    syllabusPdf,
    Footer,
  },
};
</script>

<style></style>
