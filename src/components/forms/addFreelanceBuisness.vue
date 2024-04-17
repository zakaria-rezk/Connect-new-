<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center form">
      <div class="col-md-8">
        <form id="regForm">
          <h1 id="register">احجز لك مكانا علي الانترنت</h1>
          <div class="all-steps" id="all-steps">
            <span class="step"
              ><font-awesome-icon :icon="['fas', 'kitchen-set']"
            /></span>

            <span class="step"
              ><font-awesome-icon icon="fa fa-phone"></font-awesome-icon
            ></span>
            <span class="step"
              ><font-awesome-icon icon="fa fa-location"></font-awesome-icon
            ></span>
            <span class="step"
              ><font-awesome-icon icon="fa fa-briefcase"></font-awesome-icon
            ></span>
            <span class="step"
              ><font-awesome-icon :icon="['fas', 'closed-captioning']"
            /></span>

            <span class="step next-round done"
              ><font-awesome-icon icon="fa fa-shop"></font-awesome-icon
            ></span>
          </div>

          <div v-show="current === 5" class="tab">
            <h6>اسم النشاط التجاري الخاص بك</h6>
            <p>
              <input
                placeholder=". . ."
                name="fname"
                v-model="addBussins.name"
                required
                @focus="toNull(addBussins, 'name')"
              />
            </p>
          </div>
          <div v-show="current === 4" class="tab">
            <h6>ادخل تخصصك</h6>
            <p>
              <input
                placeholder=". . ."
                name="dd"
                v-model="addBussins.profession"
                @focus="toNull(addBussins, 'profession')"
                required
              />
            </p>
          </div>
          <div v-show="current === 3" class="tab">
            <h6>اكتب نبذة مختصرة عن نشاطك التجاري</h6>
            <p>
              <input
                placeholder=". . ."
                name="dd"
                v-model="addBussins.decsription"
                @focus="toNull(addBussins, 'decsription')"
                required
              />
            </p>
          </div>

          <div v-show="current === 2" class="tab">
            <h6>اختار محفاظتك</h6>
            <p>
              <input
                placeholder=". . ."
                name="email"
                v-model="addBussins.state"
                @focus="toNull(addBussins, 'state')"
                required
              />
            </p>
          </div>
          <div v-show="current === 2" class="tab">
            <h6>اختر المدينة</h6>
            <p>
              <input
                placeholder=". . ."
                v-model="addBussins.city"
                required
                @focus="toNull(addBussins, 'city')"
              />
            </p>
          </div>

          <div v-show="current === 2" class="tab">
            <h6>اختر اسم الشارع</h6>
            <p>
              <input
                placeholder=". . ."
                v-model="addBussins.street"
                required
                @focus="toNull(addBussins, 'street')"
              />
            </p>
          </div>

          <div v-show="current === 1" class="tab">
            <h6>ادخل رقم الهاتف</h6>
            <p>
              <input
                placeholder=". . ."
                required
                v-model="addBussins.phone"
                @focus="toNull(addBussins, 'phone')"
              />
            </p>
          </div>
          <div class="thanks-message text-center" id="text-message">
            <img
              src="https://i.imgur.com/O18mJ1K.png"
              width="100"
              class="mb-4"
            />
            <h3>Thankyou for your feedback!</h3>
            <span
              >Thanks for your valuable information. It helps us to improve our
              services!</span
            >
          </div>
          <div style="overflow: auto" id="nextprevious">
            <div style="float: right">
              <button
                type="button"
                class="btn next"
                id="prevBtn"
                @click="move(1)"
              >
                <i class="fa fa-angle-double-left"></i> ⏭️
              </button>
              <button type="button" id="" class="btn back" @click="move(-1)">
                <i class="fa fa-angle-double-right"></i>⏮️
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import router from "@/router";
const current = ref(5);
const next = ref(4);
const back = ref(6);

const addBussins = reactive({
  name: '. . .',
  profession: '. . .',
  decsription: '. . .',
  phone: '. . .',
  state: '. . .',
  city: '. . .',
  street: '. . .',
  skills: [],
});
const isVlidName = computed(() => {
  return addBussins.name.trim() != "" &&addBussins.name !='. . .' ;
});
const isVlidprofession = computed(() => {
  return addBussins.profession.trim() != "" &&addBussins.profession !='. . .';
});
const isVliddecsription = computed(() => {
  return addBussins.decsription.trim() != ""  &&addBussins.decsription !='. . .';
});
const isVlidphone = computed(() => {
  return addBussins.phone.trim() != ""  &&addBussins.phone !='. . .';
});
const isVlidstate = computed(() => {
  return addBussins.state.trim() != ""  &&addBussins.state !='. . .';
});
const isVlidcity = computed(() => {
  return addBussins.city.trim() != ""  &&addBussins.city !='. . .';
});
const isVlistreet = computed(() => {
  return addBussins.street.trim() != ""  &&addBussins.street !='. . .';
});
const formIsvalid = () => {
 if (current.value===5) return isVlidName.value
 else if(current.value===4) return isVlidprofession.value
 else if(current.value===3) return isVliddecsription.value
 else if(current.value===2) return isVlidstate.value && isVlidcity.value &&isVlistreet.value
 else if(current.value===1) return isVlidphone.value

 else return true
};
const toNull = (obj, proeprty) => {
  console.log(proeprty)
  obj[proeprty] ="";
};
const move = (val) => {
  const valid =formIsvalid();
  const step = document.querySelectorAll(".step");
  if(!valid){
    step[current.value].classList.remove("done");
    step[current.value].classList.add("error");
    return
  }
  for (let i = 0; i < 1; i++) {
    if (val > 0) {
      
      step[current.value].classList.add("done");
      if (next.value >= 0) {
        step[next.value].classList.add("next-round");
      }
      next.value--;
      current.value--;
      back.value--;
    } else if (val < 0) {
      step[back.value].classList.remove("done");
      if (current.value >= 0) {
        step[current.value].classList.remove("next-round");
      }
      next.value++;
      current.value++;
      back.value++;
    }
  }
};

//  if(formData.value.name.trim()!='' && formData.value.description.trim() !='' &&formData.value.phoneNumber.length ===11&&formData.value.location.trim() !=''){
const submitForm = () => {
  router.push({ name: "bussinsPage" });
};
</script>

<style scoped>
.container {
  background-color: var(--secondarycolor);
  width: 100%;
  height: 100vh;
  border-radius: 20px;
}
.form {
  width: 100%;
  height: 100%;
}
#regForm {
  background-color: #ffffff;
  margin: 0px auto;
  font-family: Raleway;
  padding: 40px;
  border-radius: 10px;
  margin: auto;
}

#register {
  color: var(--primarycolor);
}

h1 {
  text-align: center;
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  border: 2px solid #0fa6d4;
}

.tab input:focus {
  border: 1px solid var(--primarycolor) !important;
  outline: none;
  border: 2px solid #0fa6d4;
}

input.invalid {
  border: 1px solid #e03a0666;
}

.tab {
  display: inline;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
h6 {
  color: #9fb5bc;
  font-size: 1.4rem;
}
button {
  color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}
.next {
  background-color: var(--primarycolor);
}
.back {
  background-color: var(--secondarycolor);
}
button:hover {
  opacity: 0.8;
}

button:focus {
  outline: none !important;
}

.all-steps {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.step {
  height: 40px;
  width: 40px;
  margin: 0 2px;
  background-color: var(--secondarycolor);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--primarycolor);
  opacity: 0.5;
}
.done {
  background-color: var(--primarycolor) !important ;
  color: var(--secondarycolor);
  opacity: 1;
}
.next-round {
  background-color: #aaaaaa;
}
.error{
  background-color: red;
}
.step.active {
  opacity: 1;
}

.step.finish {
  color: #fff;
  background: var(--primarycolor);
  opacity: 1;
}

.all-steps {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.thanks-message {
  display: none;
}
</style>
