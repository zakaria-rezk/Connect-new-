import { createRouter, createWebHistory } from 'vue-router';


 const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name:'Login',
      component: ()=> import('../components/register/Login.vue'),
    },
    {
      path: '/register',
      name:'register',
      component: ()=> import('../components/register/Register.vue'),
    },
    {
      path: '/Connect.Com',
      name:'connect',
      component: ()=> import('../components/pages/HomePage.vue'),
    },
    {
      path: '/Customer',
      name:'customer' ,
      component: ()=> import ('../components/profilePager/customer/customerProfile.vue')
    },
    {
      path: '/HotelAdmin',
      name:'hotel-admin' ,
      component: ()=> import ('../components/profilePager/hotel/hotelAdminProfile.vue')
    },
    {
      path: '/ReservationCategories',
      name:'reservation-categories' ,
      component: ()=> import ('../components/pages/ReservationCategories.vue')
    },
    {
      path: '/followReservation',
      name:'follow-reservation' ,
      component: ()=> import ('../components/profilePager/hotel/followReservation.vue')
    },
    {
      path: '/hotelReservations',
      name:'hotel-reservations' ,
      component: ()=> import ('../components/pages/hotelReservation.vue')
    },
    {
      path: '/addFreelanceBuisness',
      name:'add-freelance-buisness' ,
      component: ()=> import ('../components/profilePager/freelancer/addFreelanceBuisness.vue')
    },
    {
      path: '/addReservationBuisness',
      name:'add-reservation-buisness' ,
      component: ()=> import ('../components/profilePager/hotel/addReservationBuisness.vue')
    },
    
    {
      path: '/',
      name:'Connect',
      redirect: to => ({path: '/Connect.Com'}),
    },
  
    // ...other routes
  ],
});
export default router;
