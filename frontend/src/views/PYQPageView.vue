<template>
  <Header />
  <Notification />
  <BiharSyllabusComponent />
  <PyqSyPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import Notification from "@/components/PYQ/NotificationPanel.vue";
import PyqSyPdf from "@/components/PYQ/PyqSyPdf.vue";
import BiharSyllabusComponent from "@/components/PYQ/BiharSyllabusComponent.vue";


export default {
  name: "SyllabusView",
  components: {
    Header,
    Notification,
    PyqSyPdf,
    BiharSyllabusComponent,

    Footer,
  },
};
</script>

<style></style>
