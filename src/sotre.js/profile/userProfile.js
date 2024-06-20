import { defineStore } from "pinia";
import { activeUser } from "./activeUser";
export const UserProfile = defineStore("userProfile", {
  state: () => ({
    Pic: null,
  }),
  getters: {
    profilePic(state) {
      return state.profilePic;
    },
  },
  actions: {
    async sendProfilePic(payload) {
      const token = localStorage.getItem("token");
     
      let formData = new FormData();
      formData.append("file", payload);
      try {
        const response = fetch(
          "https://localhost:7165/api/Account/Update-customer-picture",
          {
            method: "PUT",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        console.log('send profile pic') 
        console.log(response)
      } catch (error) {
        throw error;
      }
    },
    async getProfilePic() {
      const user=activeUser()
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
          const error = "some thing went wrong";
          throw error;
        }
        console.log(response);
        const imageUrl = await response.text();
        user.image =imageUrl;
        console.log('get profile pic ')
        await user.userData()
        const baseUrl = "https://localhost:7165";
        this.pic = `${baseUrl}${imageUrl}`;

       
       
      } catch (error) {
        throw error;
      }
    },
  },
});
