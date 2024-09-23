<template>
  <TheHeader />
  <div class="container-fluid">
    <div class="row">
      <div class="wrapper col-12 col-md-4">
        <searchFuncanality @search="search" />
      </div>

      <div class="talents d-flex col-12 col-md-8">
        <div v-if="accounts.length === 0" class="text-center w-100">
          <h2 class="  m-auto">لا يوجد نتائج تطابق بحثك</h2>
        </div>
        <div
          class="talent flex-column flex-md-row my-2 mx-2"
          v-for="account in accounts"
          :key="account.id"
        >
          <div class="d-flex">
            <div class="img">
              <img
                :src="'https://localhost:7165' + account.image"
                alt=""
                class="py-1"
              />
            </div>
            <div class="talentDetail d-flex flex-column align-items-start p-2">
              <h4>اسم المؤسسة: {{ account.name }}</h4>
              <h3>النشاط :{{ account.profession }}</h3>
              <h4>العنوان :{{ account.city }}{{ account.state }}</h4>
            </div>
          </div>
          <div class="m-md-3 text-center">
            <router-link
              :to="{ name: 'bussinsPage', params: { id: account.id } }"
              class="btn align-self-start justify-self-end bg-warning"
              >عرض الملف الشخصي</router-link
            >
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script setup>
import searchFuncanality from "../bussins/searchFuncanality.vue";
import { onBeforeMount, ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";
import { useRoute } from "vue-router";
const accounts = ref();
const token = localStorage.getItem("token");
const id = ref();

const search = async (keyWord = null) => {
  let searchword = null;
  if (keyWord) {
    searchword = `search=${keyWord}&`;
  } else searchword = "";
  const url = `https://localhost:7165/api/Freelancer/filter-freelancers?${searchword}pageIndex=1&pageSize=9`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  accounts.value = data;
  console.log(accounts.value);
};

onBeforeMount(async () => {
  search();
  const route = useRoute();

  id.value = route.params.id;
});
</script>
<style scoped>
.container-fluid {
  color: rgb(162, 202, 18);
  height: 100vh;
}

.wrapper {
  background-color: rgb(48, 127, 255);
  height: 100% !important;
}
.talents {
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: rgb(216, 4, 0);
}
.talent {
  display: flex;
  justify-content: space-between;
  background-color: rgb(225, 225, 8);
  margin: 5px;
  width: 100%;

  border-radius: 25px;
  color: rgb(16, 15, 15);
}
.talentcont {
  background-color: rgb(27, 121, 204);
}
.img {
  height: 100%;
  width: 100px;
}
.img img {
  width: 90px;
  border-radius: 50%;
}

@media (max-width: 1024px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .talent {
    height: 50%;
  }
}
@media (max-width: 768px) {
  .container-fluid {
    position: relative;
    top: 15px;
  }
}
</style>
