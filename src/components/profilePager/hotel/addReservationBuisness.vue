<template>
  <div style="background: linear-gradient(130deg, rgba(0,113,255,0.4), rgba(0,29,112,0.1));" class="p-4">
    <div class="container ">
      <div class="row justify-content-center">
        <div class="col-md-8" style="border: 2px solid rgba(0,123,255,0.5); border-radius: 10px; padding: 20px;">
          <h2 class="text-center mb-3" style="color: #333;">CONNECT</h2>
          <form @submit.prevent="submitForm">
            <!-- الاسم -->
            <div class="form-group">
              <label for="name" style="color: #333;">الاسم :</label>
              <input type="text" class="form-control" id="name" v-model="formData.name" required style="border-color: rgba(0,123,255,0.5);">
            </div>
            <!-- الوصف -->
            <div class="form-group">
              <label for="description" style="color: #333;">الوصف :</label>
              <textarea class="form-control" id="description" v-model="formData.description" required style="border-color: rgba(0,123,255,0.5);"></textarea>
            </div>
            <!-- رقم الهاتف والموقع -->
            <div class="row">
              <div class="form-group col-md-6">
                <label for="phoneNumber" style="color: #333;">رقم الهاتف :</label>
                <input type="tel" class="form-control" id="phoneNumber" v-model="formData.phoneNumber" required style="border-color: rgba(0,123,255,0.5);">
              </div>
              <div class="form-group col-md-6">
                <label for="location" style="color: #333;">الموقع :</label>
                <input type="text" class="form-control" id="location" v-model="formData.location" required style="border-color: rgba(0,123,255,0.5);">
              </div>
            </div>
            <!-- المهارات -->
            <div class="form-group">
              <label for="skills" style="color: #333;">قائمة الميزات :</label>
              <input type="text" class="form-control" id="skills" v-model="formData.skills" placeholder="أدخل الميزات مفصولة بفاصلة" style="border-color: rgba(0,123,255,0.5);">
            </div>
            <!-- متاح من والى -->
            <div class="row">
              <div class="form-group col-md-6">
                <label for="availableFrom" style="color: #333;">متاح من:</label>
                <input type="datetime-local" class="form-control" id="availableFrom" v-model="formData.availableFrom" required style="border-color: rgba(0,123,255,0.5);">
              </div>
              <div class="form-group col-md-6">
                <label for="availableTo" style="color: #333;">متاح حتى:</label>
                <input type="datetime-local" class="form-control" id="availableTo" v-model="formData.availableTo" required style="border-color: rgba(0,123,255,0.5);">
              </div>
            </div>
            <!-- ارسال -->
            <div class="text-center ">
              <button type="submit" class="btn btn-primary col-2" style="background-color: rgba(0,123,255,0.8); border-color: rgba(0,123,255,0.8); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">إرسال</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const formData = ref({
  name: "",
  description: "",
  phoneNumber: "",
  location: "",
  skills: "",
  availableFrom: "",
  availableTo: "",
});

const submitForm = () => {
  console.log("تم إرسال النموذج", formData.value);
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}
</style>
