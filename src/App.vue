<script setup lang="ts">
import { ref, reactive } from "vue";
import SearchBox from "./component/SearchBox/SearchBox.vue";
import DisplayModal from "./component/DisplayContents/DisplayModal.vue";
import BookItem from "./component/DisplayContents/BookItem.vue";

import { TextContent } from "./module/openDB/openDB-type";
import { FilteredBookInfo } from "./module/googleBooks/googleBooks";

const content = ref<string>("");
const isModal = ref<boolean>(false);
const BooksList = ref<FilteredBookInfo[]>([]);

const displayTextContents = (tableOfContent: TextContent[]) => {
  content.value =
    tableOfContent.length === 0
      ? "OpenDBに目次が存在しません"
      : tableOfContent[0].Text;
  isModal.value = true;
};
const displayBooksInfo = (booksInfo: FilteredBookInfo[]) => {
  console.log(booksInfo);
  BooksList.value = booksInfo;
};
</script>

<template>
  <div class="container mx-auto">
    <SearchBox @books-info="displayBooksInfo" />
  </div>
  <DisplayModal
    :prop-data="{ isVisible: isModal, textOfContent: content }"
    @close="isModal = false"
  ></DisplayModal>

  <section class="text-gray-600 body-font">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="book in BooksList" :key="book.isbn" class="p-4 md:w-1/4">
          <BookItem :book="book" @text-contents="displayTextContents" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
