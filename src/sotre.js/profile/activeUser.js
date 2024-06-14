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
    userPhone(state){
      return state.phone
    },
    hasBussins(state) {
      return state.roles.includes('Freelancer')
    }
  },
  actions: {
    async userData() {
      const token = localStorage.getItem('token')
     
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

        if (response.ok)
     
        this.name = data.name;
        this.gover = data.state;
        this.city = data.city;
        this.street = data.street;
       
   
      } catch (error) {
        throw error;
      }
    },
    async updateProfile(payload){
      
      const token =localStorage.getItem('token')
      
          try{
            const response =await fetch('https://localhost:7165/api/Account/update-customer-info',{
              method:'PUT',
              headers:{
                'accept': '*/*',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              } ,
              body:JSON.stringify({
                name:payload.name,
                street:payload.street,
                phoneNumber:payload.phoneNumber,
               
                city:payload.city,
                state:payload.state,
                       
              })
             
            })
            if (response.ok) {
              userData()
            }
          }catch(error){
            throw error
          }
    },
   
      
    
   async decode(token){
    
      const decodedToken = jwtDecode(token);
     
      const customerRole =  await decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      
      const userName =  await decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
     
      localStorage.setItem('userName',userName)
     
       this.roles=customerRole;
   
    }
  },
});
