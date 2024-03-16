<template>
  <TheHeader />
  <!-- سلايدر -->
  <div class="slider">
    <div id="carouselExampleCaptions" class="carousel slide">
      
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../../images/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Connect</h3>
            <h4>الموقع الاول والاوحد فى مصر الذى يجمع بين الحجوزات والخدمات</h4>
            <h5>احجز بسهولة</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../images/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Connect</h3>
            <h4>الموقع الاول والاوحد فى مصر الذى يجمع بين الحجوزات والخدمات</h4>
            <h5>احجز بسهولة</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../images/frames-for-your-heart-FqqiAvJejto-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Connect</h3>
            <h4>الموقع الاول والاوحد فى مصر الذى يجمع بين الحجوزات والخدمات</h4>
            <h5>احجز بسهولة</h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- شريط البحث والاعلى تقييما -->
  <div class="container">
    <!-- شريط البحث -->
    <div class="mt-5 col-12 d-flex justify-content-center">
      <div class="d-flex col-10">
        <input
          type="text"
          class="form-control p-2 bg-body-secondary"
          placeholder="ابحث هنا"
          aria-label="Search"
        />
        <button @click="Search" class="btn btn-primary" type="button">
          ابحث
        </button>
      </div>
    </div>
    <!-- نواتج البحث -->
    <div class="searchResult col-12">
      <div class="d-flex flex-wrap justify-content-between">
        <div class="col-3 m-3">دا الديف الى هعمل عليه لوب</div>
      </div>
    </div>
    <!-- الاعلى تقييما -->
    <div class="toprated col-12">
      <div class="head d-flex justify-content-center mt-5">
        <h4 class="p-4">الاعلى تقييما</h4>
      </div>
      <div class="cardat col-12">
        <div class="d-flex flex-wrap justify-content-between col-12">
            <div v-for="(top, i) in toprateds" :key="i" class="card bg-body-secondary border-1 col-lg-3  col-md-5 m-3 col-sm-11">
              <img
                :src="top.image"
                class="card-img-top"
                height="200px"
                alt="..."
              />
              <div class="card-body">
                <h6>{{top.title}}</h6>
                <p>{{top.category}}</p>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.slider img {
  height: 450px;
}
@media (max-width: 700px) {
  .slider img {
    height:250px;
  }
}
</style>
<script setup>
import { onMounted, ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";

const toprateds = ref({});
const getTopRated = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=6");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    toprateds.value = jsonData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

onMounted(getTopRated);
</script>
