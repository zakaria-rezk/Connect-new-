import { defineStore } from "pinia";

export const UserProfile = defineStore("userProfile", {
  state: () => ({
    profilePic: null,
  }),
  getters: {},
  actions: {
    async sendProfilePic(payload) {
      const token = localStorage.getItem("token");
      // console.log('send profile pic')
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
      } catch (error) {
        throw error;
      }
    },
    async getProfilePic() {
      // console.log("get customer profile oic");
      const token = localStorage.getItem("token");
      try {

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
          
          const error ='some thing went wrong'
          throw error
        }
        // console.log(response);
        const imageUrl = await response.text();
        const baseUrl = "https://localhost:7165";
        this.profilePic = `${baseUrl}${imageUrl}`;

        localStorage.removeItem("pic");
        localStorage.setItem("pic", this.profilePic);
        // console.log(this.profilePic + "profile pic");
      } catch (error) {
        throw error;
      }
    },
  },
});
