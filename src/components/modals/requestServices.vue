<template>
 
    <div class="modal-s">
      <div class="modal">
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
        <button class="btn btn-warning">Close Modal</button>
      </div>
    </div>
 
</template>
<script setup>
import { ref, onMounted } from "vue";

const showModal = ref(true);
</script>
<style scoped>
.modal-s {
  margin: auto;
  position: absolute;
  z-index: 111;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  width: 50%;
  background-color: rgb(137, 153, 12);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: rgb(3, 45, 197) !important;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

button {
  margin-top: 20px;
}
</style>
