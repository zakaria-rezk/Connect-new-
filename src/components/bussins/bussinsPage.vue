<template>
  <TheHeader />
  <div class="wraper">
    <div>
      <img
        :src="imgUrl"
        alt=""
        class="cover-photo"
      />
      <label for="imgFile"></label>
      <input type="file"  accept="image/png, image/jpeg, image/jpg" @change="handelImgSrc($event)" id="imgFile" hidden>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";
const imgUrl = ref('/src/assets/WhatsApp Image 2023-06-20 at 09.11.46.jpg');
const handelImgSrc =(event)=>{

  const file =event.target.files[0];

imgUrl.value =URL.createObjectURL(file)


}
</script>

<style scoped>
.wraper {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.cover-photo {
  
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  
}
.cover-photo:hover{
  content: "Click to Change";

  border-radius: px;
  filter: blur(0.5px) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))

  
}
label{
  cursor: pointer;
  left: 0;
  width: 100%;
  height: 400px;
  transition: opacity 0.3s ease; 
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  
}
label:hover{
  opacity: 1;
}
</style>
