<template>
  <div class="search-bar">
    <form @submit.prevent>
      <!-- v-model="inputText"가능 @input 대신 -->
      <div class="form-group">
        <input
          type="search"
          @input="inputText = $event.target.value"
          placeholder="검색어를 입력하세요"
        />
        <button @click="$store.dispatch('getWeather')">
          <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref("");
const emits = defineEmits(["onSearch-city"]);
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 8px 20px;
  border-radius: 40px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0 20px;
  form {
    .form-group {
      display: flex;
      input {
        width: 100%;
        border: none;
        padding: 1em 0;
        font-size: 18px;
        outline: none;
      }
      button {
        background: transparent;
        border: none;
        &hover {
          cursor: pointer;
        }
        .icon {
          font-size: 24px;
        }
      }
    }
  }
}
</style>