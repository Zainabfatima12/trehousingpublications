<template>
  <Homepage />
  <HeroSec/>
  <RefBook/>
</template>

<script>
import Homepage from "./components/Homepage/Homepage.vue";
import HeroSec from "./components/Homepage/HeroSec.vue";
import RefBook from "./components/Homepage/RefBook.vue";
Homepage;

export default {
  name: "App",
  components: {
    Homepage,
    HeroSec,
    RefBook,
  },
};
</script>

<style></style>
