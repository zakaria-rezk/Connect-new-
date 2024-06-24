import { defineStore } from "pinia";

export const activeBussins = defineStore("activeBussins", {
  state: () => ({
    name: null,
    image:null,
    profession:null,
    description: null,
    bussinId: null,
   
  }),
  getters: {
    bussinsName: (state) => state.name,
    bussinsDesc: (state) => state.description,
    bussinsProfession: (state) => state.profession,
    bussinsId: (state) => state.bussinId,
    bussinsImage: (state) => state.image,
  },
  actions: {
    async bussinsData() {
      const token = localStorage.getItem("token");
      
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
      const data = await response.json();

      if (!response.ok) {
        const error = "some thing fonign wrong";
        throw error;
      }
    
      this.bussinId = data.id;
    
    },

    async bussinsDataById(BussinsID) {
      const token = localStorage.getItem("token");
      
      const response = await fetch(
        `https://localhost:7165/api/Freelancer/get-freelancer-by-id/${BussinsID}`,
        
        {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      if (!response.ok) {
        const error = "some thing fonign wrong";
        throw error;
      }
      const data = await response.json(); 
     
      

      this.name = data.name;
      this.description = data.description;
      this.image=data.image;
      this.profession=data.profession
    },
  },
});
