<template>
  <TheHeader />
  <div class="bussins">
    <div class="container">
      <div>
        <img :src="imgUrl" alt="" class="cover-photo" />
        <label for="imgFile"></label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          @change="handelImgSrc($event)"
          id="imgFile"
          hidden
        />
      </div>
      <div class="bussins">
        <div class="bussins-detail">
          <h3>اسم النشاط :{{active.bussinsName}}</h3>
          <h3>نوع النشاط : {{active.bussinsDesc}}</h3>
        </div>
        <div class="title">
          <BaseCard title="نبذة عن المحبة" />

          <p>
            {{active.bussinsDesc}}
          </p>
        </div>
        <div class="bussins-services">
          <BaseCard title="title" />

          <table class="table my-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <!-- Counter column -->
                <th scope="col">الخدمة</th>
                <th scope="col">السعر</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in services" :key="item.id">
                <th scope="row">{{ serviceNum }}</th>
                <!-- Counter value -->
                <td>{{ item.service }}</td>
                <td>{{ item.price }} جنيه</td>
              </tr>

              <!-- Add more rows as needed -->
            </tbody>
          </table>
          <addService :formVisibilty="formVisibilty" @closeForm="closeForm" />
          <div class="container d-flex justify-content-center my-4">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="showForm"
            >
              اضافة خدمة
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import TheHeader from "../layout/TheHeader.vue";
import addService from "@/components/forms/addService.vue";
import { activeBussins } from "@/sotre.js/profile/activeBussins.js";
const formVisibilty = ref("none");
const active =activeBussins();
const showForm = () => {
  formVisibilty.value = "flex";
};
const closeForm = () => {
  formVisibilty.value = "none";
};
const imgUrl = ref("/src/assets/WhatsApp Image 2023-06-20 at 09.11.46.jpg");

const handelImgSrc = (event) => {
  const file = event.target.files[0];

  imgUrl.value = URL.createObjectURL(file);
};
onMounted( ()=>{
  const active =activeBussins();
  active.bussinsData()
}
)

</script>

<style scoped>
.bussins {
  background-color: rgba(227, 227, 235, 0);
}
.title {
  border-radius: 10px;
  width: 100%;
  height: 200px;
  background-color: gainsboro;
}
.title p {
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  color: rgb(0, 0, 2);
}
.bussins-detail {
  color: gray;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
/* .container {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

} */
.cover-photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.cover-photo:hover {
  content: "Click to Change";
  position: relative;
  border-radius: px;
  filter: blur(0.5px) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
label {
  cursor: pointer;
  width: 80%;
  height: 400px;
  transition: opacity 0.3s ease;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  border-radius: 50px;
  left: 10%;
  right: 10%;
  opacity: 0;
}
label:hover {
  opacity: 1;
}
</style>
