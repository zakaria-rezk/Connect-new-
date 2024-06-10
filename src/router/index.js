import { createRouter, createWebHistory } from "vue-router";
import { activeUser } from "@/sotre.js/profile/activeUser";
import { activeBussins } from "@/sotre.js/bussins/activeBussins";
import { UserProfile } from "@/sotre.js/profile/userProfile";
import { offeredServices } from "@/sotre.js/bussins/offeredServices";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Connect.Com",
      name: "connect",
      component: () => import("../components/pages/HomePage.vue"),
      beforeEnter:async(to, from, next)=>{
       
        next();
      }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/register/Login.vue"),
      meta: { requierAuth: false },
     
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/register/Register.vue"),
      meta: { requierAuth: false },
    },
  
    {
      path: "/forgetpassword",
      name: "forgetpassword",
      component: () => import("../components/register/changePass.vue"),
     
    },
    {
      path: "/changepassword/:id",
      name: "changepassword",
      component: () => import("../components/register/changePass.vue"),
     
    },
  
    {
      path: "/customer/:id",
      name: "customerWithId",
      component: () =>
        import("../components/profilePager/customer/customerProfile.vue"),
         meta: { requierAuth: true },
         beforeEnter: async (to, from, next) => {
         const user =activeUser();
         const pic =UserProfile()
         await pic.getProfilePic()
         await user.userData()
        next()
        },
      children: [
        {
          path: "about",
          name: "customerReservation",
          component: () =>
            import("../components/profilePager/customer/customerReservation.vue"),
        },

        
        {
          path: "projects",
          name: "customerProjects",
          component: () =>
            import("../components/profilePager/customer/customerProject.vue"),
        },
        {
          path: "customerMessagess",
          name: "customerMessagess",
          component: () =>
            import("../components/profilePager/customer/customerMessagess.vue"),
        },
   
      ],
    },
    {
      path: "/bussinsPage/:id",
      name: "bussinsPage",
      component: () =>
        import("../components/bussins/bussinsPage.vue"),
        meta: { requierAuth: true },
        beforeEnter: async (to, from, next) => {
          // console.log('before enter bussins')
          // const useOfferedServices = offeredServices();
          // await useOfferedServices.getOfferdServices(1);
          const active =  activeBussins();
           await active.bussinsData()
             next();
        },
   
    },

    {
      path: "/updateProfile/:id",
      name: "updateProfile",
      component: () =>
        import("../components/forms/updateProfile.vue"),
        meta: { requierAuth: true },
    },

    {
      path: "/ReservationCategories",
      name: "reservation-categories",
      component: () => import("../components/pages/ReservationCategories.vue"),
    },
  
    {
      path: "/hotelReservations",
      name: "hotel-reservations",
      component: () => import("../components/pages/hotelReservation.vue"),
    },
    {
      path: "/addFreelanceBuisness",
      name: "addfreelancebuisness",
      component: () =>
        import(
          "../components/forms/addFreelanceBuisness.vue"
        ),
    },
   

    {
      path: "/",
      name: "Connect",
      redirect: (to) => ({ path: "/Connect.Com" }),
    },

    // ...other routes
  ],
});
router.beforeEach(async (to,from,next) => {
  const auth = localStorage.getItem('token')
  if(to.meta.requierAuth && !auth) next({name:'Login'})
  else next()
  
});
export default router;
