<template>
<BaseCard :title="title" />
<p class="bggray p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</template>
<script setup>
import { ref } from "vue";
import BaseCard from '@/components/UI/BaseCard.vue';
const title ="من هو عبدالله"
const skills =ref(['HTML','CSS','BOOTSTRAP'])


</script>
<style scoped>
.bggray{
    background-color: #fbfafa;
    border-radius: 15px; 
}
p{
    margin-top:10px ;
    font-weight: 800;
}
</style>