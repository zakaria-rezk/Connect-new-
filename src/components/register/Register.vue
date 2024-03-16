<template>
  <div class="parent">
    <div class="register">
      <div class="wraper">
        <h2>انشاء حساب جديد</h2>
        <div class="inputField">
          <input
            type="text"
            placeholder="الاسم الاول"
            v-model="registerData.firstName.value"
            ref="firstNameInput"
          />
          <input
            type="text"
            placeholder="الاسم الاخير"
            v-model="registerData.lastName.value"
            ref="lastNameInput"
          />
        </div>
        <div class="inputField">
          <input
            type="email"
            placeholder="*ادخل عنوان بريدك الالكتروني"
            v-model="registerData.email.value"
            ref="emailInput"
          />
          <input
            type="password"
            placeholder="*ادخل كلمة المرور"
            v-model="registerData.password.value"
            ref="passwordInput"
          />
        </div>
        <div class="inputField">
  
          <select
            id="gender"  
            v-model="registerData.gender.value"  
            ref="genderInput"   
          >
            <option value=""  disabled selected hidden >اختر الجنس</option>
            <option value="ذكر" id="male">ذكر</option>
            <option value="انثي" id="female">انثي</option>
          </select>
        </div>
  

        <!-- <div class="inputField">
       
       <select id="countries" placeholder="fdagdg">
     <option value="val0">المحافظة</option>
     
     <option value="val2">ذكر</option>
     <option value="val3">انثي</option>
     
   </select>
   <select id="countries" placeholder="fdagdg">
     <option value="val0">المدينة</option>
     
     <option value="val2">ذكر</option>
     <option value="val3">انثي</option>
     
   </select>
   </div>  -->

        <button @click="dispathchLoginAction">انشاء حساب</button>
        <p class="or">او</p>
        <router-link :to="{ name: 'Login' }" class="router-link"
          >سجل دخولك الان</router-link
        >
      </div>
    </div>
    <div class="logo">
      <img
        src="/src/assets/WhatsApp_Image_2024-02-21_at_10.02.13_890990b8-removebg-preview.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { useCounterStore } from "../../sotre.js/authentication/authSotre.js";
const store = useCounterStore();
const registerData = reactive({
  firstName: { value: "", errorMessage: false },
  lastName: { value: "", errorMessage: false },
  email: { value: "", errorMessage: false },
  password: { value:"", errorMessage: false },
  gender: { value:"", errorMessage: false },
});
const fullName =computed (() =>{
     return registerData.firstName.value +' ' +registerData.lastName.value}
)
const isValidfirstName = computed(() => {
  return registerData.firstName.value != "";
});
const isValidlastName = computed(() => {
  return registerData.password.value != "";
});
const isValidEmail = computed(() => {
  return registerData.email.value.includes("@");
});
const isValidpass = computed(() => {
  return registerData.password.value.length > 6;
});
const isValidGender = computed(() => {
  return registerData.gender.value !='';
});
const registerValidtion = () => {
  if (!isValidfirstName.value) {
    registerData.firstName.errorMessage = true;
    firstNameInput.value.classList.add("error");
  }
  if (!isValidlastName.value) {
    registerData.lastName.errorMessage = true;
    lastNameInput.value.classList.add("error");
  }
  if (!isValidEmail.value) {
    registerData.email.errorMessage = true;
    emailInput.value.classList.add("error");
  }
  if (!isValidpass.value) {
    registerData.password.errorMessage = true;
    passwordInput.value.classList.add("error");
  }
  if (!isValidGender.value) {
    registerData.gender.errorMessage = true;
    genderInput.value.classList.add("error");
  }
};
const dispathchLoginAction = () => {
  registerValidtion();
  if (
    isValidpass.value &&
    isValidEmail.value &&
    isValidlastName.value &&
    isValidfirstName.value
  ) {
   const signupData= {
    name :fullName.value,
    email:registerData.email.value,
    password:registerData.password.value,
    gender:registerData.gender.value
   }
   store.signup(signupData)
  }
  
  ///dispatch logic
};

const firstNameInput = ref();
const lastNameInput = ref();
const emailInput = ref();
const passwordInput = ref();
const genderInput =ref();
</script>
<style scoped>
.parent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e5fcfb;
}

.register {
  background-color: rgb(255, 255, 255);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 150;
  flex-shrink: 0;
}
.register .wraper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255);
  flex-basis: 500px;
  flex-grow: 1;
  height: 65%;
}
.wraper h2 {
  margin: 1rem;
  font-size: 50px;
  color: rgb(13, 159, 207);
}
.wraper .inputField {
  
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.wraper .inputField input,
select {

 
  width: 100%;
  height: 60px;
  border-color: rgb(13, 159, 207) rgb(17, 81, 231);
  margin: 1rem;
  border-radius: 25px;
}
.selectplaceholder{
  position: relative;
  font-size: 20px;
  top: 12%;
  cursor: pointer;
}
.wraper .inputField select {
  font-size: 20px;
}

.wraper input::placeholder {
  color: rgb(49, 51, 57);
  font-size: 20px;
  font-weight: 200;
  float: right;
  margin-right: 5px;
  color: rgb(64, 64, 64);
}
.wraper .inputField .error {
  color: rgb(186, 16, 50);
  border-radius: 25px;
  border-color: red red red red;
}
.wraper input:focus::placeholder {
  position: relative;
  bottom: 20px;
  font-size: 15px;

  color: black;
}
.wraper .forgetpass {
  align-self: flex-start;
  position: relative;
  right: 10px;
}

.wraper .or {
  margin: 1rem;
  font-weight: 800;
}
.router-link {
  color: var(--btn-color);
  font-weight: 800;
}
a {
  text-decoration: none;
}
.wraper button {
  background-color: var(--btn-color);
  width: 220px;
  height: 100px;
  border-radius: 10px;
  border-color: white;
  cursor: pointer;
  color: #e5fcfb;
  font-size: 25px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.logo img {
  max-width: 400px;
  max-height: 300px;
}
@media (max-width: 768px) {
  .logo {
    display: none;
  }
}
</style>