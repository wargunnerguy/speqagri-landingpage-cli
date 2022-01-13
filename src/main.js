import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/css/template-basic-style.css'
import i18n from './i18n'


createApp(App)
	.use(i18n)
	.mount('#app')

