<script setup lang="ts">
import { ref } from "vue";
import { fetchOpenDB } from "./module/openDB/openDB";
</script>

<template>
  <button @click="fetchOpenDB">おす</button>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>

<style scoped></style>
