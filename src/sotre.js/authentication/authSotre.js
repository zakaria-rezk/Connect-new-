
import { defineStore } from 'pinia'

export const useCounterStore = defineStore( 'autStore', {
  
  state:() => ({
  expiration:null,
  token:null
  
  }),
  getters :{
   isAuth(){
    return !!this.token
   }
  },
  actions :{
 async login(payload){
  console.log('login action is fired succfully')
  console.log(payload.email +'paload emali')
  console.log(payload.password +'paload password')
  const response =await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG1arhVS1yd6NVqhaCljaso4Ht1RN5lGc',{
    method:'POST',
    body:JSON.stringify({
      email:payload.email,
      password:payload.password,
      returnSecureToken:true
    })
    
  })
 
 
  if (!response.ok){
    const error = response.message || 'something went wrong'
    throw error
  }
  const responseData = await response.json();
   if(responseData.Success)
   {
    this.token = responseData.Token
   }
 },
  async signup(payload){
    
    const response =await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG1arhVS1yd6NVqhaCljaso4Ht1RN5lGc',{
      method:'POST',
      body:JSON.stringify({
        email:payload.email,
        password:payload.password,
        returnSecureToken:true
      })
      
    })
    if (!response.ok){
      const error = response.message || 'something went wrong'
      throw error
    }
    const responseData = await response.json();
     if(responseData.Success)
     {
      this.token = responseData.Token
     }

  }

  }
 
})
