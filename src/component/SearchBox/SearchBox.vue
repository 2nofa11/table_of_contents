<script setup lang="ts">
import { TextContent } from "@/module/openDB/openDB-type";
import { ref } from "vue";
import {
  extractBooksInfo,
  FilteredBookInfo,
} from "../../module/googleBooks/googleBooks";

import Icon from "./Parts/Icon.vue";
interface Emits {
  (e: "textContents", value: TextContent[]): void;
  (e: "booksInfo", value: FilteredBookInfo[]): void;
}
const isbn = ref<string>("");
const emit = defineEmits<Emits>();
const searchTextContents = async () => {
  emit("booksInfo", await extractBooksInfo(isbn.value));
};
</script>

<template>
  <section class="flex justify-center py-10">
    <label class="relative block flex">
      <Icon />
      <input
        type="text"
        v-model="isbn"
        placeholder="書籍情報を入力してください"
        class="placeholder:italic placeholder:text-slate-400 block w-80 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
    </label>

    <!-- FIXME ボタンのデザイン -->
    <button @click="searchTextContents">おす</button>
  </section>
</template>
