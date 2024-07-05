<template>
  <div class="container">
    <!-- count: {{ $store.state.count }}
    <button @click="$store.dispatch('addCount', 5)">++</button> -->

    <button @click="$store.dispatch('getWeather')">Weather</button>
    <SearchbarComp @onSearch-city="onSearchCity" />
    <WeatherinfoComp :weatherData="props.weatherData" />
  </div>
</template>
<script setup>
import SearchbarComp from "./SearchbarComp.vue";
import WeatherinfoComp from "./WeatherinfoComp.vue";

const emits = defineEmits(["onSearch-city"]);
const props = defineProps({
  weatherData: Object,
});

const onSearchCity = (city) => {
  emits("onSearch-city", city);
};

// const add = () => {
//   $store.commit("addCount");
// };

// add(() => {
//   $store.commit("addCount", 5);
// });
</script>
<style lang="scss" scope>
</style>