import { defineStore } from "pinia";

export const UserProfile = defineStore("userProfile", {
  state: () => ({
    profilePic: null,
  }),
  getters: {},
  actions: {
    async sendProfilePic(payload) {
      const token = localStorage.getItem("token");
      let formData = new FormData();
      formData.append("file", payload);

      try {
        const response = fetch(
          "https://localhost:7165/api/Account/add-customer-picture",
          {
            method: "POST",
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
    async getProfilePic() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://localhost:7165/api/Account/get-customer-picture",
          {
            method: "GET",

            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const imageUrl = await response.text();
        const baseUrl = "https://localhost:7165";
        this.profilePic = `${baseUrl}${imageUrl}`;
        console.log(this.profilePic)
        localStorage.setItem("pic", this.profilePic);
      } catch (error) {
        throw error;
      }
    },
  },
});
