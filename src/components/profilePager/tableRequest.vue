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
                    <td>  {{request.name  }}الحصول علي {{ request.customerName }}يريد</td>
                    <td><button>✅</button> </td>
                    <td><button>❌</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { activeUser } from "@/sotre.js/profile/activeUser";
const user=activeUser();



</script>
<style scoped>
.container{
    margin: 25px;
}





</style>