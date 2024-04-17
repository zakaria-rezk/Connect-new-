
import { defineStore } from 'pinia'


export const activeUser = defineStore( 'activeUser', {
  
  state:() => ({
    activeUserToken:localStorage.getItem('token'),
    name:null,
    gover:null,
    city:null,
    street:null
  }),
  getters :{
    userName(state){
      return state.name;
    },
    userState(state){
      return state.gover;
    },
    userCity(state){
      return state.city;
    },
    userStreet(state){
      return state.street;
    },
 
  },
  actions :{
  async  userData (){
    console.log('صلنا بسلام الله سبحانه وتعالي')
    console.log(this.activeUserToken)
    try {
    const response = await fetch('https://localhost:7165/api/Account/profile',{
      method:'GET',
     
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${this.activeUserToken}`
    }
    })
    const data =await response.json()
    if(!response.ok){
      const error = response.message || 'can not fetch userData'
      throw error
    } 
    
    if(response.ok)
       console.log(data.name)
      console.log(this.userName)
      this.name=data.name;
     this.gover =data.state
     this.city=data.city
     this.street=data.street
    }
    catch(error){ 
      throw error
    }
  }

}
})
