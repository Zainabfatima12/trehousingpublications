<template>
  <Header />
  <LatestEvent />
  <SyllabusHigherSecondary />
  <syllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import syllabusPdf from "@/components/Syllabus/syllabusPdf.vue";
import SyllabusHigherSecondary from "@/components/Syllabus/SyllabusHigherSecondary.vue";
import LatestEvent from "@/components/Syllabus/LatestEvent.vue";

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
