
import { defineStore } from 'pinia'

export const useCounterStore = defineStore( 'autStore', {
  
  state:() => ({
  expiration:null,
  token:null,
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
    const error = response.message || 'something went wrong'
    console.log(response.ok + 'LOGIN response')
    throw error
  }
   if(response.ok)
   {
    // console.log(response.ok + 'LOGIN response')
  //  this.token = responseData.token
  //   console.log(this.isAuth)
   }
  }
  catch(error){
    throw error
  }
 },



  async signup(payload){
  //  console.log (payload.name)
  //  console.log (payload.userName)
  //  console.log (payload.phone)
  //  console.log (payload.email)
  //  console.log (payload.password)
  //  console.log (payload.location)
  //  console.log (typeof(payload.gender))
  
   const currentDate = new Date();
   const isoDateString = currentDate.toISOString();
   console.log (isoDateString)
   try { const response = await fetch('https://localhost:7165/api/Account/register',{
      method:'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:payload.name,
        userName:payload.userName,
        phoneNumber:payload.phone,
        email:payload.email,
        password:payload.password,
        confirmPassword:payload.password,
        location:payload.location,
        gender :payload.gender,
        dob: isoDateString
        
      })
      
    })

    if (!response.ok){
      console.log(response.status +"response.ok")
      console.log(response.description  +"response.description")
      const error = response.description || 'something went wrong'
      throw error
      
    }
    
     if(response.ok)
     {
     console.log(response.ok)
     }
  } 
  
  catch(error){
    throw error
  }
  
  }
}
})
