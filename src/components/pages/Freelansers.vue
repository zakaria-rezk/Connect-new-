<template>
  <TheHeader />

  <div class="container-fluid">
    <div class="container bg-light wrapper">
      <div class="search d-flex flex-column py-5 mx-4">
        <div  class="d-flex">
          <div  class="keyword d-flex mx-1" v-for="word in words" :key="word">
            <p v-if="word">{{word}}</p>
            <button @click.prevent="removeWord(word)" class="span" ><font-awesome-icon :icon="['fas', 'circle-xmark']" class="icon" v-if="word"/></button>
          </div>
        
          
        </div>
        

        <div class="searchItem mt-5">
          <input
            type="text"
            class="searchInput"
            id="search"
            placeholder="ابحث عن موهبة لتنفيذ عملك"
            v-model="searchWord[0]"
            
          />
          <button @click.prevent="ss" for="" class="label py-2 ">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']"
          /></button>
        </div>
        <div class="searchItem mt-5">
          <select name="" id="optiosn" class="searchInput"  v-model="searchWord[1]">
            <option :value="searchWord[1]"  disabled hidden selected>ابحث باستخدام المهارة</option>
            

             <option :value="skill" v-for="skill in skills" :key="skill.id">
              {{ skill }}
            </option> 
          </select>
        </div>
        <div class="searchItem mt-5">
          <select name="" id="option" class="searchInput" v-model="searchWord[2]">
            <option :value="searchWord[2]"  selected disabled hidden >ابحث باستخدام المهارة</option>

            <option v-for="skill in skills" :key="skill.value" :value="skill">
              {{ skill }}
            </option>
          </select>
        </div>
      </div>

      <div class="talents bg-warning"></div>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";
import { useRoute } from "vue-router";
const accounts = ref();
const token = localStorage.getItem("token");
const id = ref();
const words=ref([]);
const searchWord =ref([])
const skills = ref([
  "تصميم المواقع",
  "التسويق الالكتروني",
  "تصميم الجرافيك",
  "برمجة تطبيقات الموبايل",
  "مدخل البيانات",
  "التعليق الصوتي",
]);
const dfa=(e)=>{
   console.log(e.target.value)
}
const ss =()=>{
  words.value=[...searchWord.value];
  console.log(searchWord.value)
  searchWord.value=[];
}
const removeWord =(word)=>{
  console.log(word);
  const index = words.value.indexOf(word);
  console.log(index)
  console.log(words.value)
  words.value.splice(index,1)
}
const search = async (keyWord = null) => {
  let searchword = null;
  if (keyWord) {
    searchword = `search=${keyWord}&`;
  } else searchword = "";
  const url = `https://localhost:7165/api/Freelancer/filter-freelancers?${searchword}pageIndex=1&pageSize=9`;
  console.log(url);
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container-fluid {
  background-color: rgb(66, 67, 69);

  color: rgb(255, 255, 255);

  height: 100vh;
  overflow: hidden;
}

.wrapper {
  background-color: rgb(255, 255, 255);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  overflow: hidden;
}
.talents {
  background-color: gray;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.searchInput {
  width: 80%;
  height: 40px;
}
.label {
  cursor: pointer;
  text-align: center;
  background-color: rgb(86, 223, 7);
  width: 30px;
  height: 40px;
  font-size: medium;
  list-style-type: none;
  border:0;

}
.keyword {
  display: flex;
  flex-direction: row;
  background-color: rgb(204, 205, 208);
  color: rgb(8, 70, 240);
  text-align: center;
  
}

.keyword p {
  font-size: 1.2rem;
  margin: 0 4px;
  width: fit-content;
}
.keyword .span {
 display: flex;
 font-size: 1.2rem;
 justify-content: center;
 align-items: center;
 height:100% ;
 padding:auto;
 text-align: center;
  background-color: gray;
  color: black;
  border: 0;
  padding-top: 2px;
}
</style>
