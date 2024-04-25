import { defineStore } from "pinia";

export const activeBussins = defineStore("activeBussins", {
  state: () => ({
    name:null,
    description:null,
    offeredServices:[],
  
  }),
  getters: {
   bussinsName: (state) => state.name ,
   bussinsDesc: (state) => state.description,
    
  },
  actions: {
    async bussinsData() {
        const token =localStorage.getItem('token')
        const response = await fetch(
            "https://localhost:7165/api/Freelancer/freelancer-profile",
            {
              method: "GET",
  
              headers: {
                accept: "*/*",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if(!response.ok){
            const error ='some thing fonign wrong'
            throw error
          }
          else{
            const data =await response.json()
            this.name =data.name
            this.description=data.description
             console.log(data)
          }
        
    },
     async addServise (payload){
      // const token =localStorage.getItem('token')
      // const response = await fetch(
      //   "https://localhost:7165/api/Freelancer/add-offered-service",
      //   {
      //     method: "POST",
      //     headers: {
      //       accept: "*/*",
      //       Authorization: `Bearer ${this.token}`,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: payload.name,
      //       description: payload.description,
      //       phoneNumber: payload.phone,
      //       profession: payload.profession,
      //       street: payload.street,

      //       city: payload.city,
      //       state: payload.state,
      //       skills:['sdfsa'],
      //     }),
      //   }
      // );

    }
}

})