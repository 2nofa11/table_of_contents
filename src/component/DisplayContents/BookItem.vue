<script setup lang="ts">
import { FilteredBookInfo } from "@/module/googleBooks/googleBooks";

type Props = {
  book: FilteredBookInfo;
};
const props = defineProps<Props>();
</script>

<template>
  <div
    class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
  >
    <img
      class="lg:h-48 md:h-36 w-full object-cover object-center"
      :src="book.image"
    />
    <div class="p-6">
      <h2
        class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
      >
        Title
      </h2>
      <h1
        v-text="book.title"
        class="title-font text-lg font-medium text-gray-900 mb-3"
      ></h1>
      <div class="flex items-center flex-wrap">
        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >目次を見る
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
