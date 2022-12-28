<script setup lang="ts">
import { ref } from "vue";
import SearchBox from "./component/SearchBox/SearchBox.vue";
import DisplayModal from "./component/DisplayContents/DisplayModal.vue";
import { TextContent } from "./module/openDB/openDB-type";

const content = ref<string>("");
const isModal = ref<boolean>(false);

const displayTextContents = (tabelOfContent: TextContent[]) => {
  console.log(tabelOfContent);
  content.value = tabelOfContent[0].Text;
  isModal.value = true;
};
</script>

<template>
  <div class="container mx-auto">
    <SearchBox @text-contents="displayTextContents" />
  </div>
  <DisplayModal
    :prop-data="{ isVisible: isModal, textOfContent: content }"
    @close="isModal = false"
  ></DisplayModal>
</template>

<style scoped></style>
