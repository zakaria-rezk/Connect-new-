<template>
    <div class="wrap">
    <div class="container mt-5" >
      <div class="row justify-content-center" >
        <div class="col-md-6" style="border: 2px solid rgba(0,123,255,0.5); border-radius: 10px; padding: 20px;margin-top:50px" >
          <h2 class="text-center mb-3" style="color: #333;">اعادة تعيين كلمة المرور</h2>
          <form @submit.prevent>
            <div class="form-group">
              <label for="email" style="color: #333;">عنوان البريد الالكترونى :</label>
              <input type="email" class="form-control" id="email" required style="border-color: rgba(0,123,255,0.5);">
            </div>
            <div class="form-group">
              <label for="newPassword" style="color: #333;">كلمة المرور الجديدة :</label>
              <input type="password" class="form-control" id="newPassword"  required style="border-color: rgba(0,123,255,0.5);">
            </div>
            <div class="form-group">
              <label for="confirmNewPassword" style="color: #333;">تأكيد كلمة المرور الجديدة :</label>
              <input type="password" class="form-control" id="confirmNewPassword"  required style="border-color: rgba(0,123,255,0.5);">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary" style="background-color: rgba(0,123,255,0.8); border-color: rgba(0,123,255,0.8); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 100%;">اعادة تعيين  كلمة المرور</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
  </template>
  
  
  <style scoped>
  .wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/15528.jpg");
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
  .form-group {
    background-color: aliceblue;
    margin-bottom: 20px;
  }
  </style>