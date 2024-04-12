<template>

   <div class="row content d-flex justify-content-center  bggray">
    <div class="col-12">
        <h2 class="text-center">من هو عبدالله؟</h2>
    </div>
</div>

<p class="bggray p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<!-- <div class="row content d-flex justify-content-center bggray">
    <div class="col-12">
        <h2 class="text-center ">مهاراتي</h2>
    </div>
</div> -->
<!-- <div class="container">
<ul class="row ">
    <li class="col-md-2 col-sm-12" v-for="skill in skills" :key="skill.id">
        <p class="bggray p-1">{{skill}}</p>
       
    </li> 
</ul>
<div v-if="!skills" class=" d-flex justify-content-center  text-danger mb-4">
<p>لا يوجد مهارات لعرضها</p>
</div> -->
<!-- </div> -->
</template>
<script setup>
import { ref } from "vue";

const skills =ref(['HTML','CSS','BOOTSTRAP'])




</script>
<style scoped>
.bggray{
    background-color: #fbfafa;
    border-radius: 15px;
  
}
.content{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
   margin-top: 30px;
width: 100%;
font-size:1.6rem;
font-weight: bolder;
background-color: rgb(255, 255, 255);

}
p{
    margin-top:10px ;
    font-weight: 800;
}
ul{
    margin-top:10px ;
    list-style-type: none;
}
/* ul li{
    display: inline;
    padding: 20px;
    margin-bottom:10px;
    padding-bottom:5px ;
} */
li p{
    font-weight:500;
    font-size: 1.3rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    margin-top:10px ;
    padding-right: 10px;
  
  list-style-type: none;
  background-clip: content-box;
 
  color: rgb(0, 0, 0);
border-radius: 10px;
}</style>