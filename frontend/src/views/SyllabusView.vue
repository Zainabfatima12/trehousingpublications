<template>
  <Header />
  <SyllabusTable />
  <SyllabusPdf />
  <SyllabusHigherSecondary/>
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import SyllabusPdf from "@/components/syllabus/syllabusPdf.vue"; 
import SyllabusTable from "@/components/syllabus/SyllabusTable.vue"; // ✅ Fixed import path
import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    SyllabusTable, // ✅ Fixed case
    SyllabusPdf, // ✅ Fixed case
    SyllabusHigherSecondary,
    Footer,
  },
};
</script>

<style></style>
