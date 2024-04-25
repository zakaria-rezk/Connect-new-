import { defineStore } from "pinia";
import {jwtDecode }from 'jwt-decode';
export const activeUser = defineStore("activeUser", {
  state: () => ({
    activeUserToken: localStorage.getItem("token"),
    roles:[],
    name: null,
    gover: null,
    city: null,
    street: null,
    phone:null
  }),
  getters: {
    userName(state) {
      return state.name;
    },
    userState(state) {
      return state.gover;
    },
    userCity(state) {
      return state.city;
    },
    userStreet(state) {
      return state.street;
    },
    // userPhone(state){
    //   return state.phone
    // }
    hasBussins(state) {
      return state.roles.includes('Freelancer')
    }
  },
  actions: {
    async userData() {
    const token = localStorage.getItem('token')
    console.log(token)
      try {
        const response = await fetch(
          "https://localhost:7165/api/Account/profile",
          {
            method: "GET",

            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          const error = response.message || "can not fetch userData";
          throw error;
        }

        if (response.ok) console.log(data.name);
        console.log(this.userName);
        this.name = data.name;
        this.gover = data.state;
        this.city = data.city;
        this.street = data.street;
       
        console.log('active user ok')
      } catch (error) {
        throw error;
      }
    },
   async decode(token){
      const decodedToken = jwtDecode(token);
      const customerRole =  await decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
     this.roles=customerRole;
   
    }
  },
});
