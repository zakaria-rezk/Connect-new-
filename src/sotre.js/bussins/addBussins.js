import { defineStore } from "pinia";
import { activeUser } from "..";
const user = activeUser();
export const addBussins = defineStore("addBussins", {
  state: () => ({
    token: user.activeUserToken,
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
      console.log("وصلنا بعون ");
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
              skills:['sdfsa'],
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
  },
});
