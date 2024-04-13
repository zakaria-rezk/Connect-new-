import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "@/sotre.js/authentication/authSotre";

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: "/Connect.Com",
      name: "connect",
      component: () => import("../components/pages/HomePage.vue"),
    },
    {
      path: "/customer/:id",
      name: "customerWithId",
      component: () =>
        import("../components/profilePager/customer/customerProfile.vue"),
         meta: { requierAuth: true },
      children: [
        {
          path: "about",
          name: "aboutCustomer",
          component: () =>
            import("../components/profilePager/customer/aboutCustomer.vue"),
        },
        {
          path: "projects",
          name: "customerProjects",
          component: () =>
            import("../components/profilePager/customer/customerProject.vue"),
        },
        {
          path: "protfolio",
          name: "customerProtfolio",
          component: () =>
            import("../components/profilePager/customer/customerProtfolio.vue"),
        },
      ],
    },

    {
      path: "/HotelAdmin",
      name: "hotel-admin",
      component: () =>
        import("../components/profilePager/hotel/hotelAdminProfile.vue"),
    },
    {
      path: "/ReservationCategories",
      name: "reservation-categories",
      component: () => import("../components/pages/ReservationCategories.vue"),
    },
    {
      path: "/followReservation",
      name: "follow-reservation",
      component: () =>
        import("../components/profilePager/hotel/followReservation.vue"),
    },
    {
      path: "/hotelReservations",
      name: "hotel-reservations",
      component: () => import("../components/pages/hotelReservation.vue"),
    },
    {
      path: "/addFreelanceBuisness",
      name: "add-freelance-buisness",
      component: () =>
        import(
          "../components/profilePager/freelancer/addFreelanceBuisness.vue"
        ),
    },
    {
      path: "/addReservationBuisness",
      name: "add-reservation-buisness",
      component: () =>
        import("../components/profilePager/hotel/addReservationBuisness.vue"),
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
  const store = authStore();
  if(to.meta.requierAuth && !store.isAuth) next({name:'Login'})
  else next()
  
});
export default router;
