<script setup lang="ts">
import { ref } from "vue";
import { extractTextContents } from "../../module/openDB/openDB";
import Icon from "./Parts/Icon.vue";

const searchTextContents = () => {};
</script>

<template>
  <section class="flex justify-center">
    <label class="relative block flex">
      <Icon />
      <input
        type="text"
        placeholder="Please enter 13 digits"
        class="placeholder:italic placeholder:text-slate-400 block w-80 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
    </label>
    <!-- FIXME ボタンのデザイン -->
    <button @click="searchTextContents">おす</button>
  </section>
</template>
