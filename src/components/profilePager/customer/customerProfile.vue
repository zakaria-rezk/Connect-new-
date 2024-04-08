<template>
  <div class="profile-container">
    <div class="cover-photo">
      <!-- صورة الغلاف -->
      <img
<<<<<<<<< Temporary merge branch 1:src/components/profilePager/CustomerProfile.vue
        class="rounded"
        src="../../assets/WhatsApp Image 2023-06-20 at 09.11.46.jpg"
=========
        src="../../../assets/WhatsApp Image 2023-06-20 at 09.11.46.jpg"
>>>>>>>>> Temporary merge branch 2:src/components/profilePager/customer/customerProfile.vue
      />
    </div>
    <div class="profile-info">
      <div class="profile-picture">
        <!-- صورة الصفحة الشخصية -->
<<<<<<<<< Temporary merge branch 1:src/components/profilePager/CustomerProfile.vue
        <img v-if="noimage" src="../../assets/css/cuties_3.jpeg" />
        <img :src="imageUrl" />
=========
        <img
          src="../../../assets/_ZOF0026.JPG"
          alt=""
        />
>>>>>>>>> Temporary merge branch 2:src/components/profilePager/customer/customerProfile.vue
      </div>
      <h1>عبدالله سعيد</h1>
      <h1>قنا</h1>
      <h4 style="color: #0921f8">اعدادات حسابى</h4>

      <hr style="margin: 20px" />
    </div>
    <div class="grid-container">
      <div class="grid-item"><h3>الحجوزات السابقة</h3></div>
      <div class="grid-item"><h3>الحجوزات الحالة</h3></div>
      <div class="grid-item"><h3>الخدمات السابقة</h3></div>
      <div class="grid-item"><h3>الخدمات السابقة</h3></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";
const fileInput = ref(null);
const imageUrl = ref(null);
const noimage = ref(true);
const zeko = () => {
  console.log("dsfdsf");
};
const handleFileChange = () => {
  const file = fileInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      resizeImage(event.target.result, 300, 200, (resizedImage) => {
        imageUrl.value = resizedImage;
      });
    };
    reader.readAsDataURL(file);
  }
  noimage.value = false;
};
function resizeImage(imageSrc, maxWidth, maxHeight, callback) {
  const img = new Image();
  img.onload = () => {
    const width = img.width;
    const height = img.height;

    let newWidth = width;
    let newHeight = height;

    // Calculate new width and height maintaining aspect ratio
    if (width > maxWidth) {
      newWidth = maxWidth;
      newHeight = (height * maxWidth) / width;
    }
    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = (width * maxHeight) / height;
    }

    // Create a canvas element to draw the resized image
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    // Get the data URL of the resized image
    const resizedImage = canvas.toDataURL("image/jpeg");

    // Call the callback function with the resized image data URL
    callback(resizedImage);
  };
  img.src = imageSrc;
}
</script>



<style scoped>
.profile-container {
  /* max-width: 800px; */
  width: 70%;
  margin: 0 auto;
  padding: 5px;
}

.cover-photo {
  /* width: 100%; */
  height: 300px;
  /* background: url("cover-photo.jpg") no-repeat center center/cover; */
}

.profile-info {
  text-align: center;
  padding: 20px 0;
}

.profile-picture {
  width: 150px; /* قطر صورة الصفحة الشخصية */
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 10px;
}

.grid-container {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 100%;
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* gap: 20px; */
  /* margin-top: 20px; */
}

.grid-item {
  background-color: #f2f2f2;
  padding: 20px;
  margin: 5px;
  text-align: center;
  width: 45%;
  color: #f2f2f2;
  background-color: var(--btn-color);
  border-radius: 20px;
}

footer {
  margin-top: 40px;
  text-align: center;
}
.cover-photo img {
  width: 100%;
  height: 380px;
}
</style>