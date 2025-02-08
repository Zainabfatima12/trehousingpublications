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
import SyllabusTable from "@/components/Syllabus/SyllabusTable.vue";
import SyllabusHigherSecondary from "@/components/Syllabus/SyllabusHigherSecondary.vue";
import LatestEvent from "@/components/Syllabus/LatestEvent.vue";
import SyllabusPdf from "@/components/Syllabus/syllabusPdf.vue";
import BctsExam from "@/components/Syllabus/BctsExam.vue";
import Exampattern from "@/components/Syllabus/Exampattern.vue";

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
