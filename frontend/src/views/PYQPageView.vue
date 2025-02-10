<template>
  <Header />
  <Notification />

  <BiharSyllabusComponent />

  <TextTable/>

  <PyqSyPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";

import Notification from "@/components/PYQ/NotificationPanel.vue";
import PyqSyPdf from "@/components/PYQ/PyqSyPdf.vue";
import BiharSyllabusComponent from "@/components/PYQ/BiharSyllabusComponent.vue";


import Notification from "@/components/PYQs/NotificationPanel.vue";
import PyqSyPdf from "@/components/PYQs/PyqSyPdf.vue";
import TextTable from "@/components/PYQ/TextTable.vue";


export default {
  name: "SyllabusView",
  components: {
    Header,
    Notification,
    PyqSyPdf,

    BiharSyllabusComponent,

    TextTable,


    Footer,
  },
};
</script>

<style></style>
