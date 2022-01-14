import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";
import JobOffers from "@/pages/JobOffers";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobOffers
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
