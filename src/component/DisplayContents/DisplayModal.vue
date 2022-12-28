<script setup lang="ts">
interface Props {
  isVisible: boolean;
  textOfContent: string;
}
interface Emits {
  (e: "close"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <teleport to="body">
    <div
      class="modal"
      id="sample-modal"
      v-show="isVisible"
      @click="emit('close')"
    ></div>
    <div class="modal-content" v-show="isVisible">
      <div class="box">
        <pre>{{ textOfContent }}</pre>
      </div>
    </div>
  </teleport>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  width: 600px;
  height: 700px;
  border-radius: 20px;
  padding: 20px;
}
.box {
  overflow-y: scroll;
}
.box::-webkit-scrollbar {
  display: none;
}
</style>
