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
      this.offeredServices=[]
       const bussins =activeBussins();
      console.log(pageIndex)
      try {
        const token =localStorage.getItem("token")
        const response = await fetch(`https://localhost:7165/api/Freelancer/get-offered-services/${bussins.bussinsId}?pageIndex=${pageIndex}&pageSize=3`,{
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
        
       
      
      
       for(let item =0; item <data.length;item++){
         const array ={
           name:data[item].name,
           price:data[item].price,
           description:data[item].description,
           image:`https://localhost:7165${data[item].image}`

         }
         this.offeredServices.push(array)
        
       }
       
        
      
      }
      catch(error){
        throw error
      }

   }
  },
});

