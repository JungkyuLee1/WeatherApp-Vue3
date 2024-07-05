<template>
  <NavbarComp />
  <MainComp :weatherData="weatherData" @onSearch-city="onSearchCity" />
</template>
  
<script setup>
import NavbarComp from "./components/NavbarComp.vue";
import MainComp from "./components/MainComp.vue";
import { ref, onMounted } from "vue";

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});

onMounted(() => {
  // $store.dispatch("getWeather");
  getWeather();
});

const onSearchCity = (city) => {
  // console.log(city);
  getWeather();
};

const getWeather = () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=e50164aa9b86794f0abf1f9d63a7f473`;
  fetch(API_URL)
    .then((resp) => resp.json())
    .then((data) => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
    });
};
</script>

<style scoped lang="scss">
</style>