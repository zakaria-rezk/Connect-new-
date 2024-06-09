<template>
  <TheHeader />
  <div class="viewImg" v-if="displayProfilePic">
    <img :src="userProfile.profilePic" ref="userImg" />
  </div>
  <div class="profile">
    <div class="profile-info">
      <div class="profile-picture">
        <img class="image" :src="userProfile.profilePic" />
        <button
          class="custom-file-upload bg-primary btn"
          @click="ImgSetting"
          ref="changeImgRef"
        >
          <font-awesome-icon icon="fa-solid fa-camera" />
        </button>
        <ImgSettings v-show="divVisibilty === 1" @displayImg="showImg" />
      </div>

      <input
        class="bg-primary btn"
        type="file"
        id="fileInput"
        @change="handleFileChange($event)"
        accept="image/png, image/jpeg, image/jpg,image/Jpg"
        ref="fileInput"
        style="display: none"
      />
      <div class="userData d-flex justify-content-center fs-5">
        <p><font-awesome-icon icon="fa-solid fa-user" /></p>
        <p class="px-1">{{ userData.userName }}</p>
        <p><font-awesome-icon icon="fa-solid fa-location" /></p>
        <p class="px-2">{{ userData.userCity }},{{ userData.userState }}</p>
      </div>
      <div>
        <p>{{ userData.userStreet }}</p>
      </div>
    </div>
    <div class="container bg-gray-300">
      <div class="row">
        <div class="col">
          <div class="custom-btn-container">
            <router-link
              :to="{ name: 'customerReservation' }"
              :class="{ 'btn-primary': activeLink === 'aboutCustomer' }"
              ref="aboutCustomerLink"
              class="btn link m-1 btn-selected الشخصي"
              @click="handleColor('aboutCustomer')"
            >
              الحجوزات</router-link
            >
            <router-link
              :to="{ name: 'customerMessagess' }"
              :class="{ 'btn-primary': activeLink === 'customerProtfolio' }"
              class="btn m-1 link btn-selected الاعمال"
              @click="handleColor('customerProtfolio')"
            >
              الطلبات
            </router-link>
          </div>
        </div>
        <div class="col-auto ml-auto">
          <router-link
            v-if="user.hasBussins"
            :to="{ name: 'bussinsPage', params: { id: user.activeUserToken } }"
            class="btn link m-1 btn-selected btn-primary"
          >
            نشاطي التجاري</router-link
          >
          <router-link
            v-if="!user.hasBussins"
            :to="{ name: 'addfreelancebuisness' }"
            class="btn link m-1 btn-selected btn-primary"
          >
            انشاء عمل</router-link
          >
          <router-link
            :to="{
              name: 'updateProfile',
              params: { id: user.activeUserToken },
            }"
            class="btn link m-1 btn-selected btn-warning"
          >
            تعديل الملف الشخصي
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { activeUser } from "../../../sotre.js/profile/activeUser.js";
import TheHeader from "@/components/layout/TheHeader.vue";
import { UserProfile } from "@/sotre.js/profile/userProfile.js";
import ImgSettings from "../../UI/ImgSettings.vue";
import router from "@/router";
import ImgSettingsVue from "@/components/UI/ImgSettings.vue";
const userData = activeUser();
const fileInput = ref(null);
const activeLink = ref("aboutCustomer");
const user = activeUser();
const userProfile = UserProfile();
const divVisibilty = ref(0);
const changeImgRef = ref(null);
const displayProfilePic = ref(false);
const userImg = ref(null);
const showImg = () => {
  displayProfilePic.value = true;
};
const ImgSetting = () => {
  divVisibilty.value = divVisibilty.value === 0 ? 1 : 0;
};
const handleColor = (par) => {
  activeLink.value = par;
};

const handleFileChange = (e) => {
  const file = e.target.files[0];

  userProfile.sendProfilePic(file);
};
const handleClickOutside = (event) => {
  if (divVisibilty.value === 1 && !changeImgRef.value.contains(event.target)) {
    divVisibilty.value = 0;
 
  }
  if (displayProfilePic.value && !userImg.value.contains(event.target) &&  event.target.tagName !== 'BUTTON') {
    
    displayProfilePic.value = false;
  }
};

onBeforeMount(async () => {
  //add event listener that trigger when the user click any where
  document.addEventListener("click", handleClickOutside);
  await userData.userData();
  router.push({ name: "customerReservation" });
 
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.profile {
  /* filter: blur(15px);
 filter: contrast(5p); */
  background-color: #f2f2f2;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: top;
}
custom-btn-container button {
  background-color: #ca1212;
}
.profile-container {
  /* max-width: 800px; */
  width: 70%;
  margin: 0 auto;
  padding: 5px;
}

.profile-info {
  position: relative;
  text-align: center;
  padding: 20px 0;
  border-radius: 50%;
}

.profile-picture {
  position: relative;
  top: 10px;
  bottom: 30px;
  width: 300px; 
  height: 200px;

  margin: 0 auto 1px;
}
.profile-picture img {
  border-radius: 15%;
  object-fit: fill;
}
.viewImg {
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  
  background-color: rgba(42, 42, 44, 0.8);
}
.viewImg img {
  margin: 2px;
  width: 80%;
  height: 70%;
  border-radius: 50px;
  object-fit: fill;
}
footer {
  margin-top: 40px;
  text-align: center;
}
.custom-file-upload {
  position: relative;
  bottom: 25px;
  right: 100px;
  z-index: 1;
  padding: 10px 20px;
  font-size: larger;
  color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
}
.userData {
  margin-top: 2.1rem;
  bottom: 20px;
}
.ul {
  background-color: azure;
}
</style>
