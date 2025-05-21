<template>
  <Header />
  <BctsExam />
  <RedTable />
  <SyllabusHigherSecondary />
  <SyllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";

import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";

import SyllabusPdf from "@/components/syllabus/syllabusPdf.vue";
import BctsExam from "@/components/syllabus/BctsExam.vue";
import RedTable from "@/components/syllabus/RedTable.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,

    SyllabusPdf,
    RedTable,
    BctsExam,

    SyllabusHigherSecondary,
    Footer,
  },
};
</script>

<style></style>
