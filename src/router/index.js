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
      component: ()=> import ('../components/profilePager/CustomerProfile.vue')
    },
    {
      path: '/HotelAdmin',
      name:'hotel-admin' ,
      component: ()=> import ('../components/profilePager/HotelAdmin.vue')
    },
    {
      path: '/ReservationCategories',
      name:'reservation-categories' ,
      component: ()=> import ('../components/pages/ReservationCategories.vue')
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
