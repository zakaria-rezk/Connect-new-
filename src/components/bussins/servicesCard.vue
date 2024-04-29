<template>
  <div class="wrapper">
    <div class="product-info d-flex justify-content-center flex-column p-1">
      <div class="product-text">
        <h1>شبابيك</h1>

        <p class="p-1">
          بعض المعايير التي يجب أن نأخذها في الاعتبار حين نصمم غرفة للأطفال
          اختيار مكان تدخله الشمس ومكان جيد للتهوية. وضع لوح فارغ يسمح للطفل
          بالرسم أو الكتابة عليه حتى لا يكتب أو يرسم على الجدران. اختيار الألوان
          الكلاسيكية تبعث الهدوء والاسترخاء والثقة بالنفس. تجهيز مساحة أكبر للعب
          ولا يتم تكديس الأثاث داخل الغرفة.
        </p>
      </div>
      <div class="product-price-btn d-felx justify-content-space-between">
        <button type="button">اطلب الخدمة</button>
        <p><span>78</span>جنيه</p>
      </div>
    </div>
    <div class="product-img">
      <img
        src="/src/assets/WhatsApp Image 2023-06-20 at 09.11.46.jpg"
        height="420"
        width="327"
      />
    </div>
  </div>
  <hr />
  <br />
</template>
<script setup></script>
<style scoped>
body {
  background-color: #fdf1ec;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  height: 420px;
  width: 654px;
  margin: 15px;
  border-radius: 7px 7px 7px 7px;

  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  height: 420px;
  width: 327px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.product-text {
  text-align: center;
  margin: 0 auto;
  height: 300px;
  width: 327px;
}

.product-text h1 {
  font-size: 34px;
  color: #474747;
}

.product-text h1,
.product-price-btn p {
  font-family: "Bentham", serif;
}

.product-text h2 {
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

.product-text p {
  height: 125px;
  font-family: "Playfair Display", serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;

  overflow: hidden;
}

.product-price-btn {
  display: flex;
  justify-content: space-evenly;
  height: 103px;
  width: 327px;
  align-self: flex-end;
}

.product-price-btn p {
  display: inline-block;

  font-family: "Trocchi", serif;

  color: #474747;
}

span {
  display: inline-block;
  height: 50px;
  font-family: "Suranna", serif;
  font-size: 34px;
}

.product-price-btn button {
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
}
</style>
