<template>
  <div class="container">
    <!-- سلايدر -->
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../../images/segal.jpeg"
            class="d-block w-100"
            alt="..."
            height="400px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../../images/frames-for-your-heart-FqqiAvJejto-unsplash.jpg"
            class="d-block w-100"
            alt="..."
            height="400px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../../images/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg"
            class="d-block w-100"
            alt="..."
            height="400px"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- اسم الفندق والعنوان والاعدادات -->
    <div class="d-flex col-md-12">
      <h2 class="col-6">ريجينا ريزورت</h2>
      <h4 class="col-4">الغردقة</h4>
      <div class="dropdown">
        <button
          class="btn btn-white dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          الاعدادات
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Action</button></li>
        </ul>
      </div>
    </div>
    <div class="d-lg-flex col-12 justify-content-between pb-3">
      <!-- التفاصيل والغرف المتاحة والتقييمات واضافة غرفة ومتابعة الحجوزات -->
      <div class="details col-lg-4 col-md-12">
        <!-- التفاصيل -->
        <div class="detailspara col-12">
          <h4>التفاصيل</h4>
          <p>
            يقع منتجع ريجينا بيتش ريزورت في الغردقة على بعد 300 م من شاطئ
            بارادايس، ويوفر مكان إقامة مع مسبح خارجي ومواقف خاصة مجانية للسيارات
            وحديقة ومنطقة شاطئ خاص يقع منتجع ريجينا بيتش ريزورت في الغردقة على
            بعد 300 م من شاطئ بارادايس، ويوفر مكان إقامة مع مسبح خارجي ومواقف
            خاصة مجانية للسيارات وحديقة ومنطقة شاطئ خاص.يقع منتجع ريجينا بيتش
            ريزورت في الغردقة على بعد 300 م من شاطئ بارادايس، ويوفر مكان إقامة
            مع مسبح خارجي ومواقف خاصة مجانية للسيارات وحديقة ومنطقة شاطئ خاص.يقع
            منتجع ريجينا بيتش ريزورت في الغردقة على بعد 300 م من شاطئ بارادايس،
            ويوفر مكان إقامة..
            <a href="#" class="m-2">تعديل</a>
          </p>
        </div>
        <div class="bg-white col-12 mt-3 d-flex justify-content-between">
          <!-- التقييمات -->
          <div class="dropdown col-md-3">
            <a
              class="btn rates dropdown-toggle rounded-3 col-12"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              التقييمات
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">نجمة</a></li>
              <li><a class="dropdown-item" href="#">نجمتان</a></li>
              <li><a class="dropdown-item" href="#">ثلاث نجمات</a></li>
              <li><a class="dropdown-item" href="#">ثلاث نجمات</a></li>
              <li><a class="dropdown-item" href="#">ثلاث نجمات</a></li>
            </ul>
          </div>
          <!-- اضافة غرفة -->
          <div class="addghorfa col-md-4">
            <button
              type="button"
              class="btn btn-primary col-12"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              اضافة غرفة
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      اضافة غرفة
                    </h5>
                  </div>
                  <div class="modal-body">
                    <form id="dataForm">
                      <div class="mb-3">
                        <label for="exampleInputName" class="form-label">حالة الغرفة</label>
                        <input
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">عدد السراير</label>
                        <input
                          type="number"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">السعر</label>
                        <input
                          type="number"
                          class="form-control"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">العدد المتاح</label>
                        <input
                          type="number"
                          class="form-control"
                        />
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">
                          إرسال
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          إغلاق
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- متابعة الحجوزات -->
          <div class="followres col-md-">
            <button type="button" class="btn btn-primary col-12">
              متابعة الحجوزات
            </button>
          </div>
        </div>
      </div>
      <!-- الحجوزات المتاحة -->
      <div class="col-lg-7 col-md-12 justify-content-center d-flex">
        <div class="availbleres col-12 rounded-5 p-4 mt-5">
          <h4>الحجوزات المتاحة</h4>
          <div class="d-flex justify-content-around col-9 mt-3">
            <p>حالة الغرفة</p>
            <p>عدد السراير</p>
            <p>السعر</p>
            <p>العدد المتاح</p>
          </div>
          <div
            class="tittls mt-2 d-flex justify-content-around col-12 rounded-4 pt-3"
          >
            <p>حالة الغرفة</p>
            <p>عدد السراير</p>
            <p>السعر</p>
            <p>العدد المتاح</p>
            <a href="#">تعديل</a>
            <a href="#">حذف</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.detailspara {
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: 20px;
  margin-top: 50px;
}
.rates {
  background-color: #d9d9d9;
}
.tittls {
  background-color: #a3d8ff;
}
.availbleres {
  background-color: #d9d9d9;
}
@media (max-width: 900px) {
  #carouselExample img {
    height: 250px;
  }
}
</style>
