<template>
    <div class="wrap">
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div
        class="col-md-6" :style="{'background-color': 'aliceblue'}"
        style="
          border: 2px solid rgba(0, 123, 255, 0.5);
          border-radius: 10px;
          padding: 20px;
          margin-top: 50px;
        "
      >
        <h2 class="text-center mb-3" style="color: #333">تغيير كلمة المرور</h2>
        <form @submit.prevent >
          <div class="form-group" v-show="!forget">
            <label for="oldPassword" style="color: #333"
              >كلمة المرور القديمة :</label
            >
            <input
              type="password"
              class="form-control"
              id="oldPassword"
          
              required
              style="border-color: rgba(0, 123, 255, 0.5)"
            />
          </div>
          <div class="form-group" v-show="forget">
            <label for="oldPassword" style="color: #333"
              >  ادخل البريد الاكتروني :</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
          
              required
              style="border-color: rgba(0, 123, 255, 0.5)"
            />
          </div>
          <div class="form-group"  v-show="!forget">
            <label for="newPassword" style="color: #333"
              >كلمة المرور الجديدة :</label
            >
            <input
              type="password"
              class="form-control"
              id="newPassword"
            
              required
              style="border-color: rgba(0, 123, 255, 0.5)"
            />
          </div>
          <div class="form-group"  v-show="!forget">
            <label for="confirmNewPassword" style="color: #333"
              >تأكيد كلمة المرور الجديدة :</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmNewPassword"
            
              required
              style="border-color: rgba(0, 123, 255, 0.5)"
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary"
              style="
                background-color: rgba(0, 123, 255, 0.8);
                border-color: rgba(0, 123, 255, 0.8);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                width: 100%;
              "
            >
              تغيير كلمة المرور
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref ,onMounted} from 'vue';
const forget = ref(true);


onMounted(async () => {
  const router = useRoute();
  if (router.params.id) {
    forget.value = false; 
    console.log("change");
  }
});

</script>
<style scoped>
.wrap{
   
  animation: slide-up 0.5s ease;
}
.form-group {
  
  margin-bottom: 20px;
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
