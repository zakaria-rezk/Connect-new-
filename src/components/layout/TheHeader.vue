<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <!-- Logo -->
      <img src="../../assets/WhatsApp_Image_2024-02-21_at_10.02.13_890990b8-removebg-preview.png" alt="" class="logo">

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
            <router-link to="/" class="nav-link">الخدمات</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">تواصل معنا</router-link>
          </li>
        </ul>
      </div>

      <!-- Left side links -->
      <div>
        <ul class="navbar-nav">
          <!-- Login Link -->
          <li class="nav-item" v-show="isAuth">
            <router-link :to="{ name: 'customerWithId', params:{ id:token }}" class="nav-link">حسابي</router-link>
          </li>
          <li class="nav-item" v-show="isAuth">
            <router-link :to="{ name: 'Login' }" class="nav-link" @click="logout">تسجيل خروج</router-link>
          </li>
          
          <li class="nav-item" v-show="!isAuth">
            <router-link :to="{ name: 'Login' }" class="nav-link">تسجيل الدخول</router-link>
          </li>
          <!-- Signup Link -->
          <li class="nav-item" v-show="!isAuth">
            <router-link :to="{ name: 'register' }" class="nav-link">انشاء حساب</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
</template>

<script setup>

import { ref } from "vue";
import { authStore } from "../../sotre.js/authentication/authSotre.js";
const store = authStore();
const counter =ref(1)
const isAuth =localStorage.getItem('token') || null
const token =localStorage.getItem('token') || 'elia'

const logout=()=>{
 store.logout()
}

</script>

<style scoped>
 .nav-item .nav-link {
  font-size: 1.1rem; /* تكبير حجم الروابط */
  margin-right: 1rem; /* توسيع المسافات بين الروابط */
  color: aliceblue;
  
}
.navbar-nav .nav-item:hover {
  background-color: var(--primarycolor);
  border-radius: 8px;
  transform: scale(1.1);
   /* Change to your desired background color */
}
.logo{
  width: 90px;
  height: 45px;
}
</style>
