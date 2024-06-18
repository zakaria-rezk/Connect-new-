import { defineStore } from "pinia";

export const BussinsProfile = defineStore("bussinsProfile", {
  state: () => ({
    bussinsPic: null,
  }),
  getters: {},
  actions: {
    async sendbussinsPic(payload) {
      const token = localStorage.getItem("token");
     
      let formData = new FormData();
      formData.append("file", payload);
      try {
        const response = fetch(
          "https://localhost:7165/api/Freelancer/Update-freelancer-picture",
          {
            method: "PUT",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        console.log(response);
      } catch (error) {
        throw error;
      }
    },
    async getbussinsPic() {
     
      const token = localStorage.getItem("token");
     
      try {
       

        const response = await fetch(
          "https://localhost:7165/api/Freelancer/get-freelancer-picture",

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
        
        const baseUrl = "https://localhost:7165";
        this.bussinsPic = `${baseUrl}${imageUrl}`;

        localStorage.removeItem("pic");
        localStorage.setItem("pic", this.bussinsPic);
      } catch (error) {
        throw error;
      }
    },
  },
});
