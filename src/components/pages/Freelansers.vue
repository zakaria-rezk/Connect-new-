<template>
   <TheHeader/>
        
   <button @click.prevent="search()">a7a</button>
   <div class="container">
   <div 
      v-for="account in accounts"
      :key="account.id"
      class="wrapper px-5"
        style="cursor: pointer;"
    >
      <img :src="'https://localhost:7165' + account.image"  class="banner-image" alt="" />

      <h3 class="bg-secandray">{{ account.name }}</h3>
      <p class="">{{account.profession}}</p>
      <div class="button-wrapper">
        <button class="btn outline">{{ account.street }}</button>
        <router-link :to="{name:'bussinsPage',params:{id:account.id}}" class="btn fill">اطلب الخدمة</router-link >
      </div>
    </div>
</div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import TheHeader from "../layout/TheHeader.vue";
import { useRoute } from "vue-router";
const accounts=ref()
const token =localStorage.getItem('token')
const id =ref()
const search= async (keyWord=null)=>{
    let searchword=null;
    if (keyWord){
       
     searchword =`search=${keyWord}&`
    }
    else searchword =''
    const url=`https://localhost:7165/api/Freelancer/filter-freelancers?${searchword}pageIndex=1&pageSize=9`
    console.log(url)
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'accept': '*/*',
             'Authorization':`Bearer ${token}`
        }
    })
            const data = await response.json();
            accounts.value=data;
            console.log(accounts.value)


}

onBeforeMount(async()=>{
    search()
    const route =useRoute();
    id.value=route.params.id;
 
})
</script>
<style scoped>

.container {
  
  border-radius: 12px;
  border: 1px solid var(--gray);
  padding: 10px;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  flex-basis: 500px;
  flex-grow:1 ;
 flex-shrink: 1;
  text-align: center;
  min-height: 500px;
  overflow: hidden;
  
}

.wrapper {
  
 
  margin-top:25px ;
  animation: paginationS 3s;
 
  width: 25%;
  
}
.wrapper img {
  object-fit: cover;
  width:100% ;
  height: 250px;
 transition: transform 2s ease-in-out;
}
</style>