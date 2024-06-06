<template>
  <div class="edit-img-info">
    <button class="btn" @click.prevent="emitFire"><font-awesome-icon icon="fa-solid fa-eye" class="px-1" />عرض الصورة</button>
    <label for="fileInput" class="btn"><font-awesome-icon icon="fa-solid fa-eye" class="px-1"/>تغيير الصورة</label>
  </div>
</template>
<script setup>
const emit =defineEmits("displayImg");
const emitFire =()=>{
    emit("displayImg")
}
</script>
<style scoped>
.edit-img-info {
  position: absolute;
  background-color: #fff;
  width: 200px;
  left: -6px;
  bottom: -112px;
  border-radius: 10px;
  box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.3);
}
.edit-img-info :hover{
    background-color: aquamarine;
}
.edit-img-info::before {
  content: "";
  position: absolute;

  box-shadow: rgb(0, 0, 0);
  top: -10px;
  left: 45px;
  transform: translateY(-50%);

  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #ffffff;
}
</style>
