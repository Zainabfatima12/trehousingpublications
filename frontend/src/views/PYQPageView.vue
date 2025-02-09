<template>
  <Header />
  <Notification />
  <PyqSyPdf />
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import Notification from "@/components/PYQs/NotificationPanel.vue";
import PyqSyPdf from "@/components/PYQs/PyqSyPdf.vue";

export default {
  name: "SyllabusView",
  components: {
    Header,
    Notification,
    PyqSyPdf,

    Footer,
  },
};
</script>

<style></style>
