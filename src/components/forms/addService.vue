<template>
  <div class="container-fluid" :style="{ display: formVisibilty }">
    <form action="" class="row justify-content-center">
      <div class="col-md-10 d-flex justify-content-center align-items-center">
        <!-- Adjust column width as needed -->
        <label for="" class="form-label"> {{ serviceDescription }}</label>
        <input
          :type="inputType"
          class="form-control field"
          v-model="inputVal"
        />
        <button
          type="submit"
          class="btn submit btn-primary mx-1"
          @click.prevent="handleForm"
        >
          {{ formButton }}
        </button>
      </div>
    </form>
    <button class="btn delete-btn" @click.prevent="deleteFrom">❌</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["formVisibilty"]);
const emit = defineEmits("closeForm");
import { activeBussins } from "@/sotre.js/profile/activeBussins";
const inputVal = ref();
const serviceDescription = ref("تفاصيل الخدمة");
const formButton = ref("التالي");
const serviceDetails = ref();
const servicePrice = ref();
const inputType = ref("text");
const bussins =activeBussins();
const handleForm = () => {
  if (inputVal.value.trim() != "" || inputVal.value > 0) {
    if (formButton.value === "حفظ") {
      //send data to serve
      const services ={
        desc:serviceDetails.value,
        price:servicePrice.value
      }
      // bussins.addServise(payload)
      console.log(services)
      formButton.value = "التالي";
      console.log(inputVal.value)
      emit("closeForm");
    }
    if (serviceDescription.value === "تفاصيل الخدمة") {
      serviceDetails.value = inputVal.value;
      console.log(serviceDetails.value + "details");
      serviceDescription.value = "سعر الخدمة";
      inputType.value = "number";
      formButton.value = "حفظ";
    } else if (serviceDescription.value === "سعر الخدمة") {
      serviceDescription.value = "تفاصيل الخدمة";
      inputType.value = "text";
      formButton.value = "التالي";
      servicePrice.value = inputVal.value;
      console.log(servicePrice.value + "price");
    }

    inputVal.value = "";
  }
};
const deleteFrom = () => {
  inputVal.value = "";
  serviceDetails.value='';
  servicePrice.value='';
  emit("closeForm");
};
</script>
<style scoped>
.container-fluid {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #f2f2f2;
}
label {
  font-size: 16px;
  font-weight: 500;
}
.field {
  height: 50px;
  font-size: larger;
}
form {
  width: 100%;
}
.delete-btn {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.container-fluid:hover .delete-btn {
  opacity: 1;
}
</style>
