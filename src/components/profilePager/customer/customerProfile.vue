<template>
  <div class="profile-container">
    <div class="cover-photo">
      <!-- صورة الغلاف -->
      <img
        src="../../../assets/WhatsApp Image 2023-06-20 at 09.11.46.jpg"
      />
    </div>
    <div class="profile-info">
      <div class="profile-picture">
        <!-- صورة الصفحة الشخصية -->
        <img
          src="../../../assets/_ZOF0026.JPG"
          alt=""
        />
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
<script setup></script>
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
