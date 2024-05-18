<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <!-- Logo -->
      <img
        src="../../assets/WhatsApp_Image_2024-02-21_at_10.02.13_890990b8-removebg-preview.png"
        alt=""
        class="logo"
      />

      <!-- Toggle button for small screens -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
            <router-link
              :to="{ name: 'reservation-categories' }"
              class="nav-link"
              >الحجوزات</router-link
            >
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
            <button
              :to="{ name: 'customerWithId', params: { id: userName } }"
              class="nav-link"
              @click="chagneverticalNavVisibilty"
            >
              حسابي
            </button>
          </li>

          <li class="nav-item" v-show="!isAuth">
            <router-link :to="{ name: 'Login' }" class="nav-link"
              >تسجيل الدخول</router-link
            >
          </li>

          <li class="nav-item" v-show="!isAuth">
            <router-link :to="{ name: 'register' }" class="nav-link"
              >انشاء حساب</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav>
    <div class="lol" :style="{ display: verticalNav }">
      <ul>
        <router-link 
          :to="{ name: 'customerWithId', params: { id: userName } }"
          class="router-link"
          ><p class="px-1">
            <font-awesome-icon icon="fa-solid fa-user" class="px-1" />
          </p>
          <li>حسابي</li>
        </router-link>
        <router-link v-if="active.hasBussins"
          :to="{ name: 'bussinsPage' , params: { id: userName }}"
          class="router-link"
          ><p class="px-1">
            <font-awesome-icon icon="fa-solid fa-money-check" class="px-1" />
          </p>
          <li>نشاطي التجاري</li>
        </router-link>
        <router-link
        :to="{name: 'updateProfile' ,params: { id: userName }}" 
          class="router-link"
          ><p class="px-1">
            <font-awesome-icon icon="fa-solid fa-gears" class="px-1" />
          </p>
          <li>الاعدادات</li>
        </router-link>

        <router-link
          :to="{ name: 'Login' }"
          @click="logout"
          class="router-link"
        >
          <p class="px-1">
            <font-awesome-icon
              icon="fa-solid fa-right-from-bracket"
              class="px-1"
            />
          </p>
          <li>تسجيل خروج</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

import { authStore } from "../../sotre.js/authentication/authSotre.js";
import { activeUser } from "@/sotre.js/profile/activeUser.js";
const active = activeUser();
const store = authStore();

const verticalNav = ref("none");
const isAuth = localStorage.getItem("token");
const userName = localStorage.getItem("userName") ||'sasasasa';
const token = localStorage.getItem("token") ||'sasassasa';
const chagneverticalNavVisibilty = () => {
  verticalNav.value = verticalNav.value === "inline" ? "none" : "inline";
};
const logout = () => {
  store.logout();
};
onBeforeMount(async () => {
  const user = activeUser();
  const token = localStorage.getItem("token");
        console.log(user.hasBussins)
      await user.decode(token);
   
  
});
</script>

<style scoped>
.lol {
  position: absolute;
  width: 200px;
  z-index: 100;
  left: 10px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}

.lol ul {
  display: flex;
  justify-content: flex-end;
  padding: 0;
  flex-direction: column;
  list-style: none;
  width: 100%;
}
.router-link {
  display: flex;
  font-size: 1.1rem;
  color: rgb(71, 67, 67);
  width: 100%;
  margin: 3px;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.router-link:hover {
  background-color: #f2f2f2;
  width: 100%;
}
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
.logo {
  width: 90px;
  height: 45px;
}
</style>
