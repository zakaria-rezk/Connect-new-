import { defineStore } from "pinia";
import { activeBussins } from "./activeBussins";

export const offeredServices = defineStore("offeredServices", {
  state: () => ({
   offeredServices:[]
  }),
  getters: {
G_offeredServices: (state) =>state.offeredServices
  },
  actions: {
    async getOfferdServices (pageIndex){
       const bussins =activeBussins();
      
      try {
        const token =localStorage.getItem("token")
        const response = await fetch(`https://localhost:7165/api/Freelancer/get-offered-services/${bussins.bussinsId}?pageIndex=${pageIndex}&pageSize=2`,{
         method: "GET",
          headers:{
            'accept': '*/*',
            'Authorization' :`Bearer ${token}`
          }

        })
        if (!response.ok){
          const error = response.message || "falid to get offered serviese"
          throw error
        }
        
        const data = await response.json();
        
       
       
        this.offeredServices = data;
             console.log("offered services")
        
      
      }
      catch(error){
        throw error
      }

   }
  },
});

