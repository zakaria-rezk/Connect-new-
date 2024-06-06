<template>
  <TheHeader />
  <div class="profile">

    <div class="profile-info">
      <div class="profile-picture">
        <!-- صورة الصفحة الشخصية -->
     
        <img class="image" :src="userProfile.profilePic" />
        <button class="custom-file-upload bg-primary btn" @click="ImgSetting"> <font-awesome-icon  icon="fa-solid fa-camera"/> </button>
        <ImgSettings :divVisibilty="divVisibilty"/>
    
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
       <p><font-awesome-icon icon="fa-solid fa-user"   /></p> 
      <p class="px-1">{{ userData.userName }} </p>
      <p><font-awesome-icon icon="fa-solid fa-location" /></p> 
      <p class="px-2">{{  userData.userCity}},{{userData.userState}}</p>
      
    </div>
      <div >
        <p>{{ userData.userStreet }} </p>
      </div>
    </div>
    <div class="container bg-gray-300">
  <div class="row">
    <div class="col">
      <div class="custom-btn-container">
       <router-link :to="{name: 'customerReservation'}"  :class="{ 'btn-primary': activeLink === 'aboutCustomer' }"  ref="aboutCustomerLink" class="btn link m-1 btn-selected الشخصي" @click="handleColor('aboutCustomer')"> الحجوزات</router-link>
        <router-link  :to="{name: 'customerMessagess'}"  :class="{ 'btn-primary': activeLink === 'customerProtfolio' }" class="btn m-1 link  btn-selected الاعمال  "  @click="handleColor('customerProtfolio')"> الطلبات </router-link> 
        
     
      </div>
    </div>
    <div class="col-auto ml-auto ">
      
      <router-link v-if="user.hasBussins" :to="{ name: 'bussinsPage' , params: { id: user.activeUserToken }}"  class="btn link m-1 btn-selected btn-primary">  نشاطي التجاري</router-link>
      <router-link v-if="!user.hasBussins" :to="{name: 'addfreelancebuisness'}"  class="btn link m-1 btn-selected btn-primary"> انشاء عمل</router-link>
      <router-link :to="{name: 'updateProfile' ,params: {id: user.activeUserToken }}"  class="btn link m-1 btn-selected btn-warning"> تعديل الملف الشخصي </router-link>
    </div>
  </div>
</div>
  </div>
  <div class="container">
  <router-view />
</div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import { activeUser } from "../../../sotre.js/profile/activeUser.js";
import TheHeader from "@/components/layout/TheHeader.vue";
import {  UserProfile } from "@/sotre.js/profile/userProfile.js";
import ImgSettings  from '../../UI/ImgSettings.vue'
import router from "@/router";
import ImgSettingsVue from "@/components/UI/ImgSettings.vue";
const userData =activeUser()
const fileInput = ref(null);
const imageUrl = ref('/Images/zakariarezk0/Customer/b8301262-1f86-4e85-81e7-6b1a144c797e.JPG');
const noimage = ref(true);
const activeLink =ref('aboutCustomer')
const user =activeUser();
const userProfile =UserProfile()
const divVisibilty =ref(0)

const ImgSetting =()=>{
  divVisibilty.value =1
 }
const handleColor =  (par) =>{
  activeLink.value =par;

  }

const handleFileChange =(e) => {
  
  const file = e.target.files[0];

  imageUrl.value = URL.createObjectURL(file);
  userProfile.sendProfilePic(file)
  console.log(userProfile.profilePic)
 divVisibilty.value =0;

}
onBeforeMount( async() => {
     console.log(userProfile.profilePic)
      router.push({name: 'customerReservation'});
       userData.userData()
 
      
  })
</script>



<style scoped>
.profile{
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
  width: 300px; /* قطر صورة الصفحة الشخصية */
  height: 200px;

  margin: 0 auto 1px;
}
.profile-picture img {
 
  border-radius: 15%;
  object-fit: fill;
}

footer {
  margin-top: 40px;
  text-align: center;
}
.custom-file-upload {
   position: relative;
   bottom:25px;
   right: 100px;
   z-index: 1;
  padding: 10px 20px;
  font-size: larger;
  color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
}
.userData{
 margin-top: 2.1rem;
  bottom: 20px;

}
.ul {
  background-color: azure;
}
</style>