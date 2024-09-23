<template>
  <div>
    {{ props.pageIndex }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({ pageIndex: Number });
const loadData = () => {

};
loadData();
</script>
