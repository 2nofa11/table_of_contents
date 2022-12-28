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
    >
      <div class="modal-content" v-show="isVisible">
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
  background-color: white;
  width: 600px;
  height: auto;
  border-radius: 20px;
  padding: 20px;
}
</style>
