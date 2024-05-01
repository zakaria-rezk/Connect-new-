<template>
  <TheHeader />
  <div class="profile">

    <div class="profile-info">
      <div class="profile-picture mb-3">
        <!-- صورة الصفحة الشخصية -->
        <img v-if="noimage" src="C:\Users\zekor\Connect-new-\src\assets\css\cuties_3.jpeg" />
        <img :src="imageUrl" />
      </div>
      <label for="fileInput" class="custom-file-upload bg-primary"> تعديل الصورة </label>
      <input
      class="bg-primary btn"
        type="file"
        id="fileInput"
        @change="handleFileChange"
        accept="image/png, image/jpeg, image/jpg"
        ref="fileInput"
        style="display: none"
      />
      <div class="userData d-flex justify-content-center fs-5 ">
       <p><font-awesome-icon icon="fa-solid fa-user"   /></p> 
      <p class="px-1">{{ userData.userName }} </p>
      <p><font-awesome-icon icon="fa-solid fa-location" /></p> 
      <p class="px-2">{{  userData.userCity}},{{userData.userState}}</p>
    </div>
      <div>
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
import router from "@/router";
const userData =activeUser()
const fileInput = ref(null);
const imageUrl = ref(null);
const noimage = ref(true);
const activeLink =ref('aboutCustomer')
const user =activeUser();




const handleColor =  (par) =>{
  activeLink.value =par;
 

     
  }

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

    if (width > maxWidth) {
      newWidth = maxWidth;
      newHeight = (height * maxWidth) / width;
    }
    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = (width * maxHeight) / height;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    const resizedImage = canvas.toDataURL("image/jpeg");

    
    callback(resizedImage);
  };
  img.src = imageSrc;

}
onBeforeMount( async() => {
  
  console.log('udate')
   router.push({name: 'customerReservation'})   ;
  userData.userData()
 
      
  })
</script>



<style scoped>
.profile{
  background-color: #f2f2f2;
  
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
  
  text-align: center;
  padding: 20px 0;
}

.profile-picture {
  position: relative;
   top: 10px;
  bottom: 30px;
  width: 300px; /* قطر صورة الصفحة الشخصية */
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 10px;
}
.profile-picture img {
  box-shadow: 0 90px 25px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}


footer {
  margin-top: 40px;
  text-align: center;
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.ul {
  background-color: azure;
}
</style>