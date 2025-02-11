<template>
  <Header />
  <Notification />
  <PyqRightSection/>
  <TextTable/>
  <PyqSyPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import Notification from "@/components/PYQ/NotificationPanel.vue";
import PyqSyPdf from "@/components/PYQ/PyqSyPdf.vue";
import TextTable from "@/components/PYQ/TextTable.vue";

import PyqRightSection from "@/components/PYQ/PyqRightSection.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    PyqRightSection,
    Notification,
    PyqSyPdf,
    TextTable,

    Footer,
  },
};
</script>

<style></style>
