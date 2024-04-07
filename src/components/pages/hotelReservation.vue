<template>
  <TheHeader class="mb-5" />
  <div class="container">
    <!-- filteration bar -->
    <div class="d-flex flex-wrap p-2 mt-2 rounded-2 filtarationParent">
      <div class="col-sm-12 col-md-12 col-lg-4 mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text custom-icon des"
              ><i class="bi bi-geo-alt-fill"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control custom-input"
            placeholder="اين تريد ان تذهب"
            v-model="destination"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text custom-icon"
              ><i class="bi bi-calendar3"></i
            ></span>
          </div>
          <input
            class="form-control date-picker custom-input"
            v-model="checkInDate"
            placeholder="موعد الوصول "
          />
          <input
            class="form-control date-picker custom-input"
            v-model="checkOutDate"
            placeholder="موعد المغادرة "
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text custom-icon"
              ><i class="bi bi-person-fill"></i
            ></span>
          </div>
          <input
            type="number"
            class="form-control custom-input"
            placeholder="عدد البالغين"
            v-model="adults"
          />
          <input
            type="number"
            class="form-control custom-input"
            placeholder="عدد الاطفال"
            v-model="children"
          />
          <button
            class="btn custom-btn rounded-start-3 col-lg-3 col-md-2"
            @click="search"
          >
            بحث
          </button>
        </div>
      </div>
    </div>

    <!-- filteration result -->
    <div class="reservations col-12">
      <div class="cardat col-12">
        <div class="d-flex flex-wrap justify-content-between col-12">
          <div
            class="card bg-body-secondary border-1 mb-4 position-relative"
          > دا الديف الى هعمل عليه لووب عشان نواتج الفلترة</div>
        </div>
      </div>
    </div>
    <!-- الحجوزات-->
    <div class="reservations col-12">
      <div class="cardat col-12">
        <div class="d-flex flex-wrap justify-content-between col-12">
          <div
            v-for="(top, i) in toprateds"
            :key="i"
            class="card bg-body-secondary border-1 mb-4 position-relative"
          >
            <img
              :src="top.image"
              class="card-img-top"
              height="200px"
              alt="..."
            />
            <div class="card-body">
              <h6 class="pb-1">{{ top.title }}</h6>
              <p class="pb-1">{{ top.category }}</p>
              <p class="pb-4">{{ top.price }} EGP</p>
            </div>
            <button
              class="btn btn-primary col-12 position-absolute bottom-0 start-2 end-0 rounded-0 rounded-bottom-2 border-4"
            >
              احجز الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <TheFooter/> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { ar } from "flatpickr/dist/l10n/ar";
import TheHeader from "../layout/TheHeader.vue";
// import TheFooter from "../layout/TheFooter.vue";

const destination = ref("");
const checkInDate = ref("");
const checkOutDate = ref("");
const adults = ref("");
const children = ref("");

onMounted(() => {
  Flatpickr(".date-picker", {
    locale: ar,
    dateFormat: "d-m-Y",
    minDate: "today",
  });
  getTopRated();
});

const search = () => {
  // Handle search logic here
};
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
.input-group-text {
  border-radius: 0;
  padding: 12px;
}
.des {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.serbtn {
  border-top-left-radius: 8px;
  border-top-left-radius: 10px;
}
@media (min-width: 650px) and (max-width: 1199px) {
  .card {
    width: 47%;
  }
}

@media (max-width: 650px) {
  .card {
    width: 95%;
  }
}
@media (min-width: 1199px) {
  .card {
    width: 30%;
  }
}
</style>
