<template>
  <NavbarComp />
  <div v-if="!$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
    <AboutComp />
  </div>
</template>
  
<script setup>
import NavbarComp from "./components/NavbarComp.vue";
import MainComp from "./components/MainComp.vue";
import AboutComp from "./components/AboutComp.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<style scoped lang="scss">
</style>