<template>
  <div class="updateProfile">
  <div class="container ">
    <form @submit.prevent="submitForm" class="p-4 rounded shadow">
      <h2 class="mb-4">تعديل البيانات الشخصية</h2>
      <div class="mb-3">
        <label for="inputName" class="form-label">الاسم</label>
        <input type="text" class="form-control" id="inputName" v-model="formData.name" required>
      </div>
      <div class="mb-3">
        <label for="inputEmail" class="form-label">رقم الهاتف</label>
        <input type="tel" class="form-control" id="inputEmail" v-model="formData.phone" required>
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">المحافظة</label>
        <input type="text" class="form-control" id="inputPassword" v-model="formData.gover" required>
      </div>
      <div class="mb-3">
        <label for="inputPhone" class="form-label">المدينة</label>
        <input type="text" class="form-control" id="inputPhone" v-model="formData.city" required>
      </div>
      <div class="mb-3">
        <label for="inputAddress" class="form-label">الشارع</label>
        <input type="text" class="form-control" id="inputAddress" v-model="formData.street" required>
      </div>
      <router-link :to="{name:'customerWithId' ,params:{id:token}}" class="btn btn-primary" @click="submitForm">حفظ</router-link> 
      
    </form>

  </div>
  
</div>

</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import {activeUser} from '../../sotre.js/profile/activeUser.js'

const user=activeUser();
const token =localStorage.getItem('tokem') || 'lol'
const formData =reactive({
  name:user.userName,
  phone:user.phone,
  state:user.userState,
  city:user.userCity,
  street:user.userStreet

})
const submitForm =()=>{
  user.updateProfile(formData)
   
}
onMounted( async()=>{
  const user =  activeUser();
     await user.userData()
     
})
</script>

<style scoped>
.updateProfile{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/15528.jpg");
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
/* Add custom styles and animations here */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(32, 31, 31);
  font-size: 1.3rem;

}

form {
 min-width: 600px;
  animation: slide-up 0.5s ease;
  background-color: aliceblue;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>