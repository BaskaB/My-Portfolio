<template>
  <router-view />
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init({ once: true });
    window.addEventListener("load", AOS.refresh);
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
