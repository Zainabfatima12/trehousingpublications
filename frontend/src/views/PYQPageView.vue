<template>
  <Header />
  <Notification/>

  


 
  <Footer />
</template>

<script>
import Header from "@/components/Homepage/HeaderSec.vue";
import Footer from "@/components/Homepage/FooterSec.vue";
import Notification from "@/components/PYQs/NotificationPanel.vue";




export default {
  name: "SyllabusView",
  components: {
    Header,
    Notification,

  
    Footer,
  },
};
</script>

<style></style>
