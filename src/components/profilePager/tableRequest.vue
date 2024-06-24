<template>
     <div class="container mt-5">
        <h2 class="mb-4">الطلبات  </h2>
        <table class="table table-striped table-bordered ">
        <thead>
                <tr>
                    <th> تفاصيل</th>
                    <th> قبول</th>
                    <th>رفض</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="request in user.requests" :key="request.id">
                    <!-- <td>  طلب {{ request.customerName }}يريد</td> -->
                    <td>    {{request.name }}</td>
                    <td><button @click="accpet(request)">✅</button> </td>
                    <td><button @click="refuse(request)">❌</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { activeUser } from "@/sotre.js/profile/activeUser";
const user=activeUser();
const accpet =async(id)=>{
   user.requests.shift();
    // const response =await fetch(`https://localhost:7165/api/Freelancer/accept/${id}`,)
}
const refuse = async ()=>{
    user.requests.shift();
}


</script>
<style scoped>
.container{
    margin: 25px;
}





</style>