<template>
  <Header />

  <SyllabusTable />
  <SyllabusPdf />

  <LatestEvent/>

  <SyllabusHigherSecondary/>
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import SyllabusPdf from "@/components/syllabus/syllabusPdf.vue"; 
import SyllabusTable from "@/components/syllabus/SyllabusTable.vue"; // ✅ Fixed import path
import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";
import LatestEvent from "@/components/syllabus/LatestEvent.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,

    SyllabusTable, // ✅ Fixed case
    SyllabusPdf, // ✅ Fixed case

    LatestEvent,

    SyllabusHigherSecondary,
    Footer,
  },
};
</script>

<style></style>
