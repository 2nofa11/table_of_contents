<script setup lang="ts">
import { ref, reactive } from "vue";
import SearchBox from "./component/SearchBox/SearchBox.vue";
import DisplayModal from "./component/DisplayContents/DisplayModal.vue";
import { TextContent } from "./module/openDB/openDB-type";
import { FilteredBookInfo } from "./module/googleBooks/googleBooks";

const content = ref<string>("");
const isModal = ref<boolean>(false);
const BooksList = ref<FilteredBookInfo[]>([]);

const displayTextContents = (tableOfContent: TextContent[]) => {
  content.value = tableOfContent[0].Text;
  isModal.value = true;
};
const displayBooksInfo = (booksInfo: FilteredBookInfo[]) => {
  console.log(booksInfo);
  BooksList.value = booksInfo;
};
</script>

<template>
  <div class="container mx-auto">
    <!-- <SearchBox @text-contents="displayTextContents" /> -->
    <SearchBox @books-info="displayBooksInfo" />
  </div>
  <DisplayModal
    :prop-data="{ isVisible: isModal, textOfContent: content }"
    @close="isModal = false"
  ></DisplayModal>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="book in BooksList" :key="book.isbn" class="p-4 md:w-1/3">
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
                <a
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
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
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
