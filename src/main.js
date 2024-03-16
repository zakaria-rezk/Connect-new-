
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import   router  from './router/index.js'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'



/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)
const app=createApp(App)
app.use(createPinia())
app.component('FontAwesome', FontAwesomeIcon)
app.use(router)
app.use(bootstrap)
app.mount('#app')
