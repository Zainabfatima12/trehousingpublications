<template>
  <Header />
  <BctsExam />
  <SyllabusTable />
  <Exampattern />
  <LatestEvent />
  <SyllabusHigherSecondary />
  <SyllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import SyllabusTable from "@/components/syllabus/SyllabusTable.vue";
import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";
import LatestEvent from "@/components/syllabus/LatestEvent.vue";
import SyllabusPdf from "@/components/syllabus/syllabusPdf.vue";
import BctsExam from "@/components/syllabus/BctsExam.vue";
import Exampattern from "@/components/syllabus/Exampattern.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    SyllabusTable,
    SyllabusPdf,
    LatestEvent,
    BctsExam,
    Exampattern,
    SyllabusHigherSecondary,
    Footer,
  },
};
</script>

<style></style>
