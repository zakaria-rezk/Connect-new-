
import { defineStore } from 'pinia'

export const authStore = defineStore( 'autStore', {
  
  state:() => ({
  error :false,
  expiration:null,
  token:null,
  userName:null,
  serverError:false,
  egyptGovernorates: [
    "القاهرة",
    "الإسكندرية",
    "الجيزة",
    "المنوفية",
    "البحيرة",
    "القليوبية",
    "الغربية",
    "الشرقية",
    "الدقهلية",
    "كفر الشيخ",
    "الفيوم",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "الأقصر",
    "أسوان",
    "البحر الأحمر",
    "شمال سيناء",
    "جنوب سيناء",
    "مطروح",
  ],
  egyptCities: {
    القاهرة: [
      "القاهرة",
      "المعادي",
      "المقطم",
      "مدينة نصر",
      "مصر الجديدة",
      "المهندسين",
      "الزمالك",
      "التجمع الخامس",
    ],
    الإسكندرية: [
      "الإسكندرية",
      "برج العرب",
      "العامرية",
      "العصافرة",
      "المنتزة",
      "محرم بك",
      "سموحة",
    ],
    الجيزة: [
      "الجيزة",
      "السادس من أكتوبر",
      "الشيخ زايد",
      "الحوامدية",
      "البدرشين",
      "أوسيم",
      "العياط",
      "الصف",
      "العشرين",
      "الفيوم",
    ],
    المنوفية: ["شبين الكوم", "تلا", "الشهداء", "قويسنا", "بيرم", "السادات"],
    البحيرة: [
      "دمنهور",
      "كفر الدوار",
      "رشيد",
      "إدكو",
      "أبو المطامير",
      "أبو حمص",
      "الدلنجات",
    ],
    القليوبية: [
      "بنها",
      "قليوب",
      "الخانكة",
      "القناطر الخيرية",
      "شبرا الخيمة",
      "كفر شكر",
      "طوخ",
      "العبور",
    ],
    الغربية: ["طنطا", "المحلة الكبرى", "زفتى", "كفر الزيات", "سمنود"],
    الشرقية: [
      "الزقازيق",
      "بلبيس",
      "منيا القمح",
      "ههيا",
      "أبو حماد",
      "العاشر من رمضان",
      "السنبلاوين",
      "فاقوس",
    ],
    الدقهلية: ["المنصورة", "طلخا", "ميت غمر", "منية النصر", "أجا", "شربين"],
    "كفر الشيخ": ["كفر الشيخ", "دسوق", "فوه", "الرياض", "بركة السبع"],
    الفيوم: ["الفيوم", "طامية", "سنورس", "إبشواي", "يوسف الصديق"],
    المنيا: ["المنيا", "مغاغة", "بني مزار", "مطاي", "سمالوط", "ملوي"],
    أسيوط: ["أسيوط", "الغنايم", "ساحل سليم", "أبنوب", "ديروط", "منفلوط"],
    سوهاج: ["سوهاج", "طما", "المراغة", "أخميم", "جرجا", "البلينا"],
    قنا: ["قنا", "أبو تشت", "نجع حمادي", "دشنا", "قوص", "الوقف", "قفط"],
    الأقصر: ["الأقصر", "البياضية", "الزينية", "الطود", "إسنا", "أرمنت"],
    أسوان: ["أسوان", "أبو سمبل", "نصر النوبة", "كوم أمبو", "دراو"],
    "البحر الأحمر": ["الغردقة", "الأقصر", "مرسى علم", "رأس غارب", "سفاجا"],
    "شمال سيناء": ["العريش", "الشيخ زويد", "رفح", "بئر العبد"],
    "جنوب سيناء": ["شرم الشيخ", "دهب", "نويبع", "طور سيناء"],
    مطروح: ["مطروح", "الحمام", "العلمين", "الضبعة", "النجيلة"],
  }
  
  }),
  getters :{
   isAuth(state){
    return !!state.token
   }
  },
  actions :{
 async login(payload){


 try{ const response =await fetch('https://localhost:7165/api/Account/login',{
    method:'POST',
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      email:payload.email,
      password:payload.password,
    
    })
    
  })
  const responseData =await response.json()

 
  if (!response.ok){
     this.error = true;
    throw error
  }
  if(response.status > 400){
    console.log('400')
    console.log(response.body)
  }
   if(response.ok)
   {
    
   this.token = responseData.token
   localStorage.setItem('token', responseData.token);
   this.userName=payload.userName
   }
  }
  catch(error){
    throw error
  }
 },



  async signup(payload){

   const currentDate = new Date();
   const isoDateString = currentDate.toISOString();
   
   try { const response = await fetch('https://localhost:7165/api/Account/register',{
      method:'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:payload.name,
        phoneNumber:payload.phone,
        email:payload.email,
        password:payload.password,
        confirmPassword:payload.password,
        state:payload.state,
        city:payload.city,
        gender :payload.gender,
        street:payload.street,
        dob: isoDateString
        
      })
      
    })

    if (!response.ok){
      
      const error = response.description || 'something went wrong'
      throw error
      
    }
    if(response.ok){
      
      const login ={
        email:payload.email,
        password:payload.password,
        userName:payload.name
      }
    await this.login(login)
    }
    
     if(response.status >= 500)
     {
     this.serverError =true
     }
  } 
  
  catch(error){
    throw error
  }
  
  },
  logout(){
    
    localStorage.removeItem('token');
    localStorage.clear();
        this.token=null
  }
}
})
