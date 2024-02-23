import { createApp } from 'vue'
import { createPinia } from 'pinia'


import layoutComponents from '@/components/layout'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './assets/main.css'




axios.defaults.baseURL = 'http://127.0.0.1:8000'



const app = createApp(App)
app.use(layoutComponents)
app.use(createPinia())
app.use(router, axios)

app.mount('#app')
