import { defineStore } from "pinia";

export const BussinsProfile = defineStore("bussinsProfile", {
  state: () => ({
    bussinsPic: null,
  }),
  getters: {},
  actions: {
    async sendbussinsPic(payload) {
      const token = localStorage.getItem("token");
      console.log('send bussins pic')
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
      console.log("get bussins profile oic");
      const token = localStorage.getItem("token");
      console.log("token");
      try {
        console.log(token);

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
        console.log(response);
        const imageUrl = await response.text();
        console.log(imageUrl + "imgulrbussisns");
        const baseUrl = "https://localhost:7165";
        this.bussinsPic = `${baseUrl}${imageUrl}`;

        localStorage.removeItem("pic");
        localStorage.setItem("pic", this.bussinsPic);
        console.log(this.bussinsPic + "profile pic");
      } catch (error) {
        throw error;
      }
    },
  },
});
