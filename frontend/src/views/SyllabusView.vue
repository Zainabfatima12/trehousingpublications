<template>
  <Header />

  <SyllabusTable />


  <LatestEvent/>

  <SyllabusHigherSecondary/>
  <LatestEvent />
  <BctsExam/>
  <SyllabusHigherSecondary />
  <syllabusPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import SyllabusTable from "@/components/syllabus/SyllabusTable.vue"; 
import SyllabusHigherSecondary from "@/components/syllabus/SyllabusHigherSecondary.vue";
import LatestEvent from "@/components/syllabus/LatestEvent.vue";
import syllabusPdf from "@/components/syllabus/syllabusPdf.vue";
import BctsExam from "@/components/syllabus/BctsExam.vue";


export default {
  name: "SyllabusView",
  components: {
    Header,

    SyllabusTable, // ✅ Fixed case
    syllabusPdf, // ✅ Fixed case

    LatestEvent,
    BctsExam,

    SyllabusHigherSecondary,
    Footer,
  },
};
</script>

<style></style>
