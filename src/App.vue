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
  <div>{{ BooksList }}</div>
</template>

<style scoped></style>
