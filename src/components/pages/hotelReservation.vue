<template>
<TheHeader class="mb-5"/>
  <div class="container">
    <!-- filteration bar -->
    <div class="d-flex p  mt-2 rounded-2 filtarationParent">
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text custom-icon des"><i class="bi bi-geo-alt-fill"></i></span>
          </div>
          <input type="text" class="form-control custom-input" placeholder="اين تريد ان تذهب" v-model="destination">
        </div>
      </div>
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text custom-icon"><i class="bi bi-calendar3"></i></span>
          </div>
          <input class="form-control date-picker custom-input" v-model="checkInDate" placeholder="موعد الوصول ">
          <input class="form-control date-picker custom-input" v-model="checkOutDate" placeholder="موعد المغادرة ">
        </div>
      </div>
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text custom-icon"><i class="bi bi-person-fill"></i></span>
          </div>
          <input type="number" class="form-control custom-input" placeholder="عدد البالغين" v-model="adults">
          <input type="number" class="form-control custom-input" placeholder="عدد الاطفال" v-model="children">
          <button class="btn custom-btn col-2  rounded-start-3" @click="search">بحث</button>
        </div>
      </div>
    </div>
    <!-- filteration result -->
    <div class="searchResult col-12">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="col-3 m-3 ">دا الديف الى هعمل عليه لوب عشان نواتج البحث</div>
        </div>
    </div>
    <!-- الاعلى تقييما -->
    <div class="toprated col-12">
        <div class="head d-flex justify-content-center mt-5">
          <!-- <h4 class="p-4">الاعلى تقييما</h4> -->
        </div>
        <div class="cardat col-12">
          <div class="d-flex flex-wrap justify-content-between col-12">
            <div
              v-for="(top, i) in toprateds"
              :key="i"
              class="card bg-body-secondary border-1 col-lg-3 col-md-5 m-3 col-sm-11"
            >
              <img
                :src="top.image"
                class="card-img-top"
                height="200px"
                alt="..."
              />
              <div class="card-body">
                <h6>{{ top.title }}</h6>
                <p>{{ top.category }}</p>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { ar } from 'flatpickr/dist/l10n/ar';
import TheHeader from"../layout/TheHeader.vue"

const destination = ref('');
const checkInDate = ref('');
const checkOutDate = ref('');
const adults = ref('');
const children = ref('');

onMounted(() => {
  Flatpickr(".date-picker", {
    locale: ar,
    dateFormat: 'd-m-Y', 
    minDate: "today",
  });
  getTopRated()
});

const search = () => {
  // Handle search logic here
}
const toprateds = ref({});
const getTopRated = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=15");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    toprateds.value = jsonData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

</script>

<style scoped>
.custom-icon {
  background-color: #007bff; 
  color: #fff;
  border: none;
}

.input-group-prepend.custom-icon .form-control {
  border-radius: 0;
}

.custom-input {
  border-radius: 0;
}

.custom-btn {
  background-color: #007bff; 
  color: #fff;
  border: none;
  border-radius: 0;
}

.custom-btn:hover {
  background-color: #0056b3; 
}
.input-group-text{
    border-radius: 0;
    padding: 12px;
}
.des{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.serbtn{
    border-top-left-radius: 8px;
    border-top-left-radius: 10px;
}

</style>
