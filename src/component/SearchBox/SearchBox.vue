<script setup lang="ts">
import { ref } from "vue";
import {
  extractBooksInfo,
  FilteredBookInfo,
} from "../../module/googleBooks/googleBooks";

import Icon from "./Parts/Icon.vue";
interface Emits {
  (e: "booksInfo", value: FilteredBookInfo[]): void;
}
const keyWord = ref<string>("");
const emit = defineEmits<Emits>();
const searchTextContents = async () => {
  emit("booksInfo", await extractBooksInfo(keyWord.value));
};
</script>

<template>
  <section class="flex justify-center py-10">
    <label class="relative block flex">
      <Icon />
      <input
        type="text"
        v-model="keyWord"
        placeholder="書籍情報を入力してください"
        class="placeholder:italic placeholder:text-slate-400 block w-80 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
    </label>

    <button
      class="text-white bg-indigo-500 border-0 ml-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      @click="searchTextContents"
    >
      検索
    </button>
  </section>
</template>
