<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <!-- Logo -->
      <!-- <img src="../../assets/WhatsApp_Image_2024-02-21_at_10.02.13_890990b8-removebg-preview.png" alt="" class="logo"> -->

      <!-- Toggle button for small screens -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <!-- Four links in the middle -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">الرئيسية</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'reservation-categories'}" class="nav-link">الحجوزات</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/link3" class="nav-link">الخدمات</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/link4" class="nav-link">تواصل معنا</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
 .nav-item .nav-link {
  font-size: 1.1rem; /* تكبير حجم الروابط */
  margin-right: 1rem; /* توسيع المسافات بين الروابط */
}
.logo{
  width: 90px;
  height: 45px;
}
</style>
