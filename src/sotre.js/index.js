import { defineStore } from 'pinia'
import { authStore } from './authentication/authSotre'
const store =authStore()
export const activeUser = defineStore( 'activeuser', {
  
  state:() => ({
    activeUserToken:store.token

  }),
  getters :{
 
  },
  actions :{

}
})
