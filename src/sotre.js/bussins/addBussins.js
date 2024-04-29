import { defineStore } from "pinia";

export const addBussins = defineStore("addBussins", {
  state: () => ({
    token: localStorage.getItem("token"),
    bussins: {
      name: null,
      profession: null,
      description: null,
      phone: null,
      state: null,
      city: null,
      street: null,

      skills: [],
    },
  }),
  getters: {
    bussinsName: (state) => state.bussins.name,

    bussinsProfession: (state) => state.bussins.profession,

    bussinsDescription: (state) => state.bussins.description,

    bussinsPhone: (state) => state.bussins.phone,

    bussinsState: (state) => state.bussins.state,

    bussinsCity: (state) => state.bussins.city,

    bussinsStreet: (state) => state.bussins.street,

    bussinsSkills: (state) => state.bussins.skills,
  },
  actions: {
    async addBussins(payload) {
      console.log(this.token);
      console.log(payload);
      try {
        const response = await fetch(
          "https://localhost:7165/api/Freelancer/add-freelancer-business",
          {
            method: "POST",
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: payload.name,
              description: payload.description,
              phoneNumber: payload.phone,
              profession: payload.profession,
              street: payload.street,

              city: payload.city,
              state: payload.state,
              skills: ["sdfsa"],
            }),
          }
        );

        if (!response.ok) {
          const error = response.message || "can not fetch userData";
          throw error;
        }

        if (response.ok) this.name = payload.name;
        this.profession = payload.profession;
        this.description = payload.description;
        this.phone = payload.phone;
        this.state = payload.state;
        this.city = payload.city;
        this.street = payload.street;
        this.skills = payload.skills;
      } catch (error) {
        throw error;
      }
    },
    async addServices(payload) {
      const url = "https://localhost:7165/api/Freelancer/add-offered-service";
      const queryPar = {
        Name: payload.name,
        Description: payload.description,
        Price: payload.price,
        IsAvailable: payload.IsAvailable,
      };
      const queryString = Object.keys(queryPar)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(queryPar[key])
        )
        .join("&");
   
            // let formData =new FormData();
            // formData.append('image',payload.ImageUrl)
     
     
      try {
        const response = await fetch(url + "?" + queryString, {
          method: "POST",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${this.token}`,
          },
          body:JSON.stringify({
            Image:payload.ImageUrl
          })
        });
      } catch (error) {
        throw error;
      }
    },
  },
});
