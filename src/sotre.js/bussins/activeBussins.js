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
        console.log(token)
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
          const data =await response.json()
        
       
          if(!response.ok){
            const error ='some thing fonign wrong'
            throw error
          }
        
          console.log('active bussins datta')
            this.name =data.name
            this.description=data.description
             console.log(data)
       
        
    },

}

})