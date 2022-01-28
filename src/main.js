import {createApp} from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/css/template-basic-style.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueLazyLoad from 'vue3-lazyload';

import i18n from './i18n'
import store from "@/store";
import router from './router'

createApp(App).use(router)
	.use(i18n)
	.use(VueLazyLoad)
	.use(store)
	.mount('#app')

