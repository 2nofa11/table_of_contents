<script setup lang="ts">
import { ref } from "vue";
import { extractTextContents } from "./module/openDB/openDB";
</script>

<template>
  <button @click="extractTextContents">おす</button>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>

<style scoped></style>
