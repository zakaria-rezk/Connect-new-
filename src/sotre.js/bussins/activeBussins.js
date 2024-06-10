import { defineStore } from "pinia";

export const activeBussins = defineStore("activeBussins", {
  state: () => ({
    name: null,
    description: null,
    bussinId: null,
    offeredServices: [],
  }),
  getters: {
    bussinsName: (state) => state.name,
    bussinsDesc: (state) => state.description,
    bussinsId: (state) => state.bussinId,
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
      this.name = data.name;
      this.description = data.description;
    },
  },
});
