import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
