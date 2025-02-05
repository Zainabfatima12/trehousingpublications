<template>
  <Header />
  <LatestEvent/>
  <SyllabusHigherSecondary/>
  <syllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import syllabusPdf from "@/components/syllabus/syllabusPdf.vue";
import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";
import LatestEvent from "@/components/syllabus/LatestEvent.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    LatestEvent,
    SyllabusHigherSecondary,
    syllabusPdf,
    Footer,
  },
};
</script>

<style></style>
