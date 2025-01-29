<template>
  <Homepage />
  <HeroSec/>
</template>

<script>
import Homepage from "./components/Homepage/Homepage.vue";
import HeroSec from "./components/Homepage/HeroSec.vue";
Homepage;

export default {
  name: "App",
  components: {
    Homepage,
    HeroSec,
  },
};
</script>

<style></style>
