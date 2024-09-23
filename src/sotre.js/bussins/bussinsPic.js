import { defineStore } from "pinia";
import { activeBussins } from "./activeBussins";

export const BussinsProfile = defineStore("bussinsProfile", {
  state: () => ({
    bussinsPic: null,
    activeBussins:activeBussins()
  }),
  getters: {},
  actions: {
    async sendbussinsPic(payload) {
      const token = localStorage.getItem("token");
     
      let formData = new FormData();
      formData.append("file", payload);
      try {
        const response = fetch(
          "https://connectegy.runasp.net/api/Freelancer/Update-freelancer-picture",
          {
            method: "PUT",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
     
      } catch (error) {
        throw error;
      }
    },
    async getbussinsPic() {
     
      const token = localStorage.getItem("token");
     
      try {
       

        const response = await fetch(
          "https://connectegy.runasp.net/api/Freelancer/get-freelancer-picture",

          {
            method: "GET",
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          
          const error ='some thing went wrong'
          throw error
        }
        const imageUrl = await response.text();
     
         this.activeBussins.image=imageUrl
    
      
      } catch (error) {
        throw error;
      }
    },
  },
});
